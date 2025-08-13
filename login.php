<?php
// 設定正確的帳號和密碼
$correct_username = "admin";
$correct_password = "password123";

// 檢查使用者提交的帳號和密碼
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // 驗證帳號和密碼
    if ($username === $correct_username && $password === $correct_password) {
        // 成功登入
        echo "<h1>登入成功！</h1>";
        echo "<p>恭喜你！這是你的旗標：<b>flag{easy_brute_force}</b></p>";
    } else {
        // 登入失敗
        echo "<h1>登入失敗！</h1>";
        echo "<p>帳號或密碼錯誤，請再試一次。</p>";
    }
}
?>