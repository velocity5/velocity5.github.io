<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Pagination</title>
    <style type="text/css">
#tnt_pagination{
    display: inline-block;
    text-align: left;
    height: 22px;
    line-height: 21px;
    clear: both;
    padding-top: 3px;
    font-family: Arial, Gotham, "Helvetica Neue", Helvetica,Arial, SansSerif;
    font-size: 12px;
    font-weight: normal;
}

#tnt_pagination a:link, #tnt_pagination a:visited{
    padding: 7px;
    padding-top: 2px;
    padding-bottom: 2px;
    border: 1px solid #e6e6e6;
    margin-left: 10px;
    text-decoration: none;
    background-color: white;
    width: 22px;
    font-weight: normal;
}
#tnt_pagination a:hover{
    background-color: azure;
    border: 1px solid#BBDDFF;
    color: #0072BC;
}
#tnt_pagination .active_tnt_link{
    padding: 7px;
    padding-top: 2px;
    padding-bottom: 2px;
    horder: 1px solid #ddeeff;
    margin-left: 10px;
    text-decoration: none;
    background-color: #e6e6e6;
    cursor: default;
}
#tnt_pagination .disabled_tnt_pagination{
    padding: 7px;
    padding-top: 2px;
    padding-bottom: 2px;
    border: 1px solid #EBEBEB;
    margin-left: 10px;
    text-decoration: none;
    background-color: #e6e6e6;
    cursor: default;
}
.content {
    margin: 10px auto;
    width: 800px;
    text-align: center;
    border: 1px solid #dfd;
}
    </style>
</head>
<body>
<div class = "content">
    <div id = "tnt_pagination">
        <span class = "disabled_tnt_pagination">Prev</span>
        <a href = "pagination.php?page=1">1</a>
        <a href = "pagination.php?page=2">2</a>
        <a href = "pagination.php?page=3">3</a>
        <a href = "pagination.php?page=4">4</a>
        <a href = "pagination.php?page=5">5</a>
        <a href = "pagination.php?page=6">6</a>
        <a href = "pagination.php?page=7">7</a>
        <a href = "#forward">Next</a>
    </div>
    <?php
        $page = isset($_GET["page"]) ? $_GET["page"]: '1';
    ?>
    <p class = "result">Bạn đang ở trang thứ <?php echo $page?></p>
</div>
</body>
</html>﻿