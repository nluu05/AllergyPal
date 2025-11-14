<?php
// Documentation source: https://www.w3schools.com/php/php_sessions.asp
// Other source: https://www.php.net/manual/en/ref.session.php
session_start();

$response = [
    "loggedIn" => isset($_SESSION["username"]),
    "username" => $_SESSION["username"] ?? null
];

echo json_encode($response);
?>
