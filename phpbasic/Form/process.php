<?php
    $email = $_POST["email"];
    $password = $_POST["pass"];

$result= ($email == "admin" && $password == "00")? "Login Successfully" : "Login Failed";
echo $result;