<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "isanczewski@gmail.com";
    $subject = "New workshop request";
    $message =  "Company: " . $_POST['company'] . "\n" .
                "Participants: " . $_POST['participants'] . "\n" .
                "City: " . $_POST['city'] . "\n" .
                "Telephone: " . $_POST['telephone'] . "\n" .
                "Date: " . $_POST['date'] . "\n" .
                "Email: " . $_POST['email'] . "\n" .
    $headers = "From: form@ivansanczewski.com";

    if (mail($to, $subject, $message, $headers)) {
        header("Location: thanks.html") // Will send user to a successuful page
    } else {
        header("Location: error.html") // Will send user to a 404 page
    }
}   
?>