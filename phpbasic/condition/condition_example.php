<meta charset="utf-8">
<?php
    $number = 10;
    if($number % 2 == 0){
        $result = "Số chẵn";
    }else{
        $result = "Số lẻ";
    }
    $result =($number % 2 != 0) ? "Số chẵn" : "Số lẻ";
    echo $result;
?>