<? php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "sablaniayuvraj@gmail.com";
$subject = "New Message from YS";

mail($to, $subject, $message, "From: " . $name);
echo "Your message has been sent";

 ?>
