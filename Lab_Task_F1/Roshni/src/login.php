<?php
session_start();

if (isset($_SESSION['username'])) {
    header("Location: dashboard.php");
    exit();
}

$error = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username === "admin" && $password === "1234") {
        $_SESSION['username'] = $username; 
        header("Location: dashboard.php"); 
        exit();
    } else {
        $error = " Invalid username or password!";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <style>
        body { font-family: Arial; display: flex; justify-content: center; margin-top: 100px; }
        .box { background: #f4f4f4; padding: 30px; border-radius: 10px; width: 300px; }
        input { width: 100%; padding: 8px; margin: 8px 0; box-sizing: border-box; }
        button { width: 100%; padding: 10px; background: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; }
        .error { color: red; }
    </style>
</head>
<body>
    <div class="box">
        <h2> Login</h2>
        <p class="error"><?php echo $error; ?></p>
        <form method="POST">
            <input type="text"     name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
        <p><small>Use: admin / 1234</small></p>
    </div>
</body>
</html>