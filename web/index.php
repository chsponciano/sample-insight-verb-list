<?php
    if (isset($_GET['list'])) {
        include_once("list.html");
    } else {
        include_once("index.html");
    }
?>