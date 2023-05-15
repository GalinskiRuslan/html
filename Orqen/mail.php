<?php
$to = "info@orqen.kz";
$from = "info@orqen.kz";
$subject = "Заголовок письма";

$yourname = htmlspecialchars(strip_tags($_POST['name']));

$yourtel = htmlspecialchars(strip_tags($_POST['phone']));

$subject = '=?UTF-8?B?'.base64_encode('Письмо с сайта Carfin').'?=';
$message = '';
$message = $message.'Имя:'.$yourname;
$message = $message.' Телефон: '.$yourtel;


$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/plain; charset=utf8\r\n";

$headers .= "From:info@fincar.kz\r\n";


if(mail($to, $subject, $message, $headers)){
    header('location: index.html');
} else{
    echo 'Unable to send email. Please try again.';
}


?>