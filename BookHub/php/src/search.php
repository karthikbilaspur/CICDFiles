
<?php
require_once 'db.php';

function get_search_results($conn, $author, $genre, $publication_date, $rating) {
  $sql = 'SELECT b.*, COALESCE(AVG(r.rating), 0) AS avg_rating 
          FROM books b 
          LEFT JOIN reviews r ON b.id = r.book_id 
          WHERE 1=1 ';

  $params = [];

  if ($author) {
    $sql .= ' AND b.author LIKE :author ';
    $params[':author'] = '%' . $author . '%';
  }

  if ($genre) {
    $sql .= ' AND b.genre = :genre ';
    $params[':genre'] = $genre;
  }

  if ($publication_date) {
    $sql .= ' AND b.publication_date = :publication_date ';
    $params[':publication_date'] = $publication_date;
  }

  if ($rating) {
    $sql .= ' HAVING COALESCE(AVG(r.rating), 0) >= :rating ';
    $params[':rating'] = $rating;
  }

  $sql .= ' GROUP BY b.id ';

  $stmt = $conn->prepare($sql);

  foreach ($params as $key => $value) {
    $stmt->bindValue($key, $value);
  }

  $stmt->execute();

  return $stmt->fetchAll();
}

$db = new Database();
$conn = $db->connect();

$author = filter_input(INPUT_GET, 'author', FILTER_SANITIZE_STRING);
$genre = filter_input(INPUT_GET, 'genre', FILTER_SANITIZE_STRING);
$publication_date = filter_input(INPUT_GET, 'publication_date', FILTER_SANITIZE_STRING);
$rating = filter_input(INPUT_GET, 'rating', FILTER_VALIDATE_FLOAT);

try {
  $books = get_search_results($conn, $author, $genre, $publication_date, $rating);

  foreach ($books as $book) {
    echo $book['title'] . ' by ' . $book['author'] . ' (' . number_format($book['avg_rating'], 2) . ' stars)' . "\n";
  }
} catch (PDOException $e) {
  echo 'Error: ' . $e->getMessage();
}
?>

<form action="" method="get">
  <label for="author">Author:</label>
  <input type="text" id="author" name="author"><br><br>
  <label for="genre">Genre:</label>
  <select id="genre" name="genre">
    <option value="">All</option>
    <option value="Fiction">Fiction</option>
    <option value="Non-Fiction">Non-Fiction</option>
  </select><br><br>
  <label for="publication_date">Publication Date:</label>
  <input type="date" id="publication_date" name="publication_date"><br><br>
  <label for="rating">Rating:</label>
  <select id="rating" name="rating">
    <option value="">All</option>
    <option value="5">5 stars</option>
    <option value="4">4 stars</option>
    <option value="3">3 stars</option>
    <option value="2">2 stars</option>
    <option value="1">1 star</option>
  </select><br><br>
  <input type="submit" value="Search">
</form>