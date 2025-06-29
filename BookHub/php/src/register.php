<?php
require_once 'db.php';

if (isset($_POST['register'])) {
  $username = $_POST['username'];
  $email = $_POST['email'];
  $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

  $db = new Database();
  $conn = $db->connect();

  $stmt = $conn->prepare('INSERT INTO users (username, email, password) VALUES (:username, :email, :password)');
  $stmt->bindParam(':username', $username);
  $stmt->bindParam(':email', $email);
  $stmt->bindParam(':password', $password);

  if ($stmt->execute()) {
    echo 'Registration successful!';
  } else {
    echo 'Error registering user.';
  }
}
?>

<form action="" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username"><br><br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email"><br><br>
  <label for="password">Password:</label>
  <input type="password" id="password" name="password"><br><br>
  <input type="submit" name="register" value="Register">
</form>