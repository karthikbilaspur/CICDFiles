<?<php
require_once 'db.php';
class BookService {
    private $db;

    public function __construct(Database $db) {
        $this->db = $db;
    }

    public function get_book($id) {
    try {
        $conn = $this->db->connect();
        $stmt = $conn->prepare('SELECT * FROM books WHERE id = :id');
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        $book = $stmt->fetch();

        return $book;
    } catch (PDOException $e) {
        throw new Exception('Error retrieving book: ' . $e->getMessage());
    }
}

public function create_book($data) {
    try {
        $conn = $this->db->connect();
        $stmt = $conn->prepare('INSERT INTO books (title, author, price) VALUES (:title, :author, :price)');
        $stmt->bindParam(':title', $data['title']);
        $stmt->bindParam(':author', $data['author']);
        $stmt->bindParam(':price', $data['price']);
        $stmt->execute();

        return $conn->lastInsertId();
    } catch (PDOException $e) {
        throw new Exception('Error creating book: ' . $e->getMessage());
    }
}
>

