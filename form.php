<?php
    if (isset($_POST['name'], $_POST['email'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
    
        // show the $name and $email
        echo "Thanks $name for saying hello.<br> I will get back to you as soon as possible!";
        // echo "Please confirm it in your inbox of the email $email.";
    } else {
        echo 'You need to provide your name and email address.';
    }