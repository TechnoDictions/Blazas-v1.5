<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect data
    $firstName = htmlspecialchars($_POST['first_name']);
    $lastName  = htmlspecialchars($_POST['last_name']);
    $email     = htmlspecialchars($_POST['email']);
    $phone     = htmlspecialchars($_POST['phone']);
    $subject   = htmlspecialchars($_POST['subject']);
    $message   = htmlspecialchars($_POST['message']);

    // Example: send email
    $to = "ahmadindustrial6692@gmail.com";
    $subjectLine = "New Contact Form Submission: $subject";
    $body = "Name: $firstName $lastName\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subjectLine, $body, $headers)) {
        header("Location: index.html?status=success");
    } else {
        header("Location: index.html?status=error");
    }
    exit();
}
?>
