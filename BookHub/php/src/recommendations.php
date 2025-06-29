
<?php
require_once 'db.php';

function get_user_reading_history($conn, $user_id) {
  $stmt = $conn->prepare('SELECT book_id FROM reviews WHERE user_id = :user_id');
  $stmt->bindParam(':user_id', $user_id);
  $stmt->execute();

  return $stmt->fetchAll(PDO::FETCH_COLUMN);
}

function get_recommended_books($conn, $user_id) {
  $book_ids = get_user_reading_history($conn, $user_id);

  $recommended_books = [];

  foreach ($book_ids as $book_id) {
    $stmt = $conn->prepare('
      SELECT b.* 
      FROM books b 
      JOIN books b2 ON b.genre = b2.genre 
      WHERE b.id != :book_id AND b2.id = :book_id
    ');
    $stmt->bindParam(':book_id', $book_id);
    $stmt->execute();

    $books = $stmt->fetchAll();

    foreach ($books as $book) {
      $recommended_books[$book['id']] = $book;
    }
  }

  return $recommended_books;
}

$db = new Database();
$conn = $db->connect();

try {
  $user_id = $_SESSION['user_id'];

  $recommended_books = get_recommended_books($conn, $user_id);

  foreach ($recommended_books as $book) {
    echo $book['title'] . ' by ' . $book['author'] . "\n";
  }
} catch (PDOException $e) {
  echo 'Error: ' . $e->getMessage();
}
?>