<?php
$host = "localhost"; 
$user = "root";
$password = "";
$dbname = "if0_40095582_HighCinema";

$conn = mysqli_connect($host, $user, $password, $dbname);

if (!$conn) {
    die(json_encode(["error" => "Kết nối CSDL thất bại: " . mysqli_connect_error()]));
}

mysqli_set_charset($conn, "utf8mb4");
?>