<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];
  
  // Set up the email
  $to = 't.lia.31211@gmail.com'; // Replace with your email address
  $subject = 'New contact Portfolio form';
  $body = "Name: $name\nPhone: $phone\nEmail: $email\nMessage: $message";
  
  // Send the email
  if (mail($to, $subject, $body)) {
    echo 'Email sent successfully!';
  } else {
    echo 'An error occurred. Please try again later.';
  }
}
?>
