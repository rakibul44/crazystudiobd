<?php
if(isset($_POST['send_message'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    if(empty($name) || empty($email) || empty($message)){
        header('Location: index.html?error=Some data is missing');
        exit();
    }else{
        $message = 'Name: '. $name . '<br> Email: ' . $email . '<br> Message: ' . $message;
        $mailto = 'mdrakib76634@gmail.com';
        $subject = 'Email from Crazy Studio BD Website';
        $header = 'From: ' . $email;

        $mailstatus = mail($mailto, $subject, $message, $header);
        if($mailstatus == true){
            header('Location: index.html?success=Message Sent');
            exit();
        }else{
            header('Location: index.html?error=Message Validation Faild');
            exit();
        }
    }
}else{
    echo('Thanks For Visiting .But its not for you Bro');
}