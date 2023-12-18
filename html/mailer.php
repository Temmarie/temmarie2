<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Your email sending logic here
    // Example using mail() function
    $to = 'temmar_whyte@yahoo.com';
    $subject = 'New Contact Form Submission';
    $headers = "From: $name <$email>";

    if (mail($to, $subject, $message, $headers)) {
        echo 'Thank you! Your message has been sent.';
    } else {
        http_response_code(500);
        echo 'Oops! Something went wrong and we couldn\'t send your message.';
    }
} else {
    http_response_code(400);
    echo 'Invalid request. Please try again.';
}
?>
