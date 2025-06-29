<?php
require_once 'db.php';

if (isset($_POST['submit_review'])) {
  $book_id = $_POST['book_id'];
  $user_id = $_SESSION['user_id'];
  $rating = $_POST['rating'];
  $review = $_POST['review'];

  $db = new Database();
  $conn = $db->connect();

  $stmt = $conn->prepare('INSERT INTO reviews (book_id, user_id, rating, review) VALUES (:book_id, :user_id, :rating, :review)');
  $stmt->bindParam(':book_id', $book_id);
  $stmt->bindParam(':user_id', $user_id);
  $stmt->bindParam(':rating', $rating);
  $stmt->bindParam(':review', $review);

  if ($stmt->execute()) {
    echo 'Review submitted successfully!';
  } else {
    echo 'Error submitting review.';
  }
}
?>

<form action="" method="post">
  <label for="rating">Rating:</label>
  <select id="rating" name="rating">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
  </select><br><br>
  <label for="review">Review:</label>
  <textarea id="review" name="review"></textarea><br><br>
  <input type="hidden" name="book_id" value="<?php echo $book_id; ?>">
  <input type="submit" name="submit_review" value="Submit Review">
</form>