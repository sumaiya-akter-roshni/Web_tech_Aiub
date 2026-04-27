<?php
session_start();


if (!isset($_SESSION['username'])) {
    header("Location: login.php");
    exit();
}

$username = $_SESSION['username']; 
?>

<!DOCTYPE html>
<html>
<head>
    <title>Dashboard</title>
    <style>
        body { font-family: Arial; display: flex; justify-content: center; margin-top: 100px; }
        .box { background: #e8f5e9; padding: 30px; border-radius: 10px; text-align: center; width: 350px; }
        a { display: inline-block; margin-top: 20px; padding: 10px 20px;
            background: #e53935; color: white; border-radius: 5px; text-decoration: none; }
    </style>
</head>
<body>
    <div class="box">
        <h1> Welcome, <?php echo htmlspecialchars($username); ?>!</h1>
        <p>You are successfully logged in.</p>
        <p>Session is keeping you logged in across pages.</p>
        <a href="logout.php">🚪 Logout</a>
    </div>
</body>
</html>