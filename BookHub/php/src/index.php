<?php
require_once 'db.php';

$db = new Database();
$conn = $db->connect();

$stmt = $conn->query('SELECT * FROM books');
$books = $stmt->fetchAll();

foreach ($books as $book) {
    echo $book['title'] . ' by ' . $book['author'] . ' - ' . $book['price'] . "\n";
}