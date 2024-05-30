<?php
// Initialize variables to store user input and error messages
$username = $password = $email = "";
$usernameError = $passwordError = $emailError = "";
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve user input from the form
    $username = $_POST["username"];
    $password = $_POST["password"];
    $email = $_POST["email"];
    // Check if the username is empty
    if (empty($username)) {
        $usernameError = "Username is required";
    }
    // Check if the password is empty
    if (empty($password)) {
        $passwordError = "Password is required";
    }
    // Check if the email is empty and in a valid format
    if (empty($email)) {
        $emailError = "Email is required";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailError = "Invalid email format";
    }
}
?>