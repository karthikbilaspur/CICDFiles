<?php
require_once 'db.php';

if (isset($_POST['login'])) {
  $username = $_POST['username'];
  $password = $_POST['password'];

  $db = new Database();
  $conn = $db->connect();

  $stmt = $conn->prepare('SELECT * FROM users WHERE username = :username');
  $stmt->bindParam(':username', $username);
  $stmt->execute();

  $user = $stmt->fetch();

  if ($user && password_verify($password, $user['password'])) {
    echo 'Login successful!';
    // Start session and store user data
    session_start();
    $_SESSION['user_id'] = $user['id'];
    $_SESSION['username'] = $user['username'];
  } else {
    echo 'Invalid username or password.';
  }
}
?>

<form action="" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username"><br><br>
  <label for="password">Password:</label>
  <input type="password" id="password" name="password"><br><br>
  <input type="submit" name="login" value="Login">
</form>