<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "isanczewski@gmail.com";
    $subject = "New workshop request";
      $message = "Empresa: " . $_POST['company'] . "\n" .
               "Participantes: " . $_POST['participants'] . "\n" .
               "Ciudad: " . $_POST['city'] . "\n" .
               "Teléfono: " . $_POST['telephone'] . "\n" .
               "Fecha deseada: " . $_POST['date'] . "\n" .
               "Email: " . $_POST['email'];
    $headers = "From: forms@ivansanczewski.com";

    if (mail($to, $subject, $message, $headers)) {
        header("Location: thanks.html"); // Will send user to a successuful page
    } else {
        header("Location: error.html"); // Will send user to a 404 page
    }
}   
?>