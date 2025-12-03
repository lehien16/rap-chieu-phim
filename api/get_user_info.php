<?php 
session_start(); 
header('Content-Type: application/json; charset=utf-8'); 
include "db.php"; 

if (!isset($_SESSION['user_id']) && isset($_GET['debug'])) { 
    $_SESSION['user_id'] = 'ND010'; 
} 

if (isset($_SESSION['user_id'])) { 
    $user_id = mysqli_real_escape_string($conn, $_SESSION['user_id']); 
    $sql = "SELECT HoTen, Email FROM NguoiDung WHERE MaND=?"; 
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $user_id);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_assoc();
    $stmt->close();
    echo json_encode(["success" => true, "user" => $result]); 
} else { 
    echo json_encode(["success" => false, "message" => "Chưa đăng nhập"]); 
} 

$conn->close(); 
?>