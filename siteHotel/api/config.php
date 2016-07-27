<?php
/**
 * Created by PhpStorm.
 * User: Sergio
 * Date: 27.07.2016
 * Time: 13:51
 */


function __autoload($className) {
    $className = preg_replace("/\\\\/", "/", $className);
    $path = "class/$className.php";
    if(file_exists($path)) {
        include_once($path);
    }
}

