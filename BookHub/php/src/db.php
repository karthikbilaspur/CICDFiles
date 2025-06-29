<?php
class Database {
    private $host = 'mysql';
    private $db_name = 'bookhub';
    private $username = 'user';
    private $password = 'password';

    public function connect() {
        try {
            $conn = new PDO("mysql:host=$this->host;dbname=$this->db_name", $this->username, $this->password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch (PDOException $e) {
            die("Connection failed: " . $e->getMessage());
        }
    }
}


$user_id = $_SESSION['user_id'];

$db = new Database();
$conn = $db->connect();

$stmt = $conn->prepare('SELECT * FROM user_profiles WHERE user_id = :user_id');
$stmt->bindParam(':user_id', $user_id);
$stmt->execute();

$profile = $stmt->fetch();
?>

<h1><?php echo $profile['username']; ?></h1>
<p><?php echo $profile['bio']; ?></p>
<img src="<?php echo $profile['profile_picture']; ?>" alt="Profile Picture">