<?php
require_once 'db.php';
require_once 'book_service.php';

$book_service = new BookService(new Database());
$books = $book_service->get_books();

$book_id = $_GET['id'];

$db = new Database();
$conn = $db->connect();

$stmt = $conn->prepare('SELECT * FROM books WHERE id = :id');
$stmt->bindParam(':id', $book_id);
$stmt->execute();

$book = $stmt->fetch();

// Display book details

$stmt = $conn->prepare('SELECT * FROM reviews WHERE book_id = :book_id');
$stmt->bindParam(':book_id', $book_id);
$stmt->execute();

$reviews = $stmt->fetchAll();

// Display reviews
foreach ($reviews as $review) {
  echo $review['rating'] . ' - ' . $review['review'];
}
?>