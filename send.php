<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // $to = "isanczewski@gmail.com";
    $to = "gabreile.paskeviciute@gmail.com";
    $subject = "New workshop request";
    $message =  "Hello Gabriele, someone has requested a kokedama Workshop. These are the details of the request:" . "\n" .
                . "\n" .
                "Company: " . $_POST['company'] . "\n" .
                "Number of participants: " . $_POST['participants'] . "\n" .
                "City: " . $_POST['city'] . "\n" .
                "Telephone number: " . $_POST['telephone'] . "\n" .
                "Date requested: " . $_POST['date'] . "\n" .
                "Email: " . $_POST['email'];
    $headers =  "From: forms@ivansanczewski.com";

    if (mail($to, $subject, $message, $headers)) {
        header("Location: thanks.html"); // Will send user to a successuful page
    } else {
        header("Location: error.html"); // Will send user to a 404 page
    }
}   
?>