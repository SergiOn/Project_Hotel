<?php
/**
 * Created by PhpStorm.
 * User: Sergio
 * Date: 27.07.2016
 * Time: 13:42
 */

error_reporting(-1); //* показывать ошибки
//error_reporting(0); //* не показывать ошибки


require_once('config.php');

core\Routing::rout();


