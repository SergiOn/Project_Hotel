<?php
/**
 * Created by PhpStorm.
 * User: Sergio
 * Date: 28.07.2016
 * Time: 14:18
 */

namespace controller;


use core\Controller;

class Rooms extends Controller {

    public function index() {
        $this->getAllRooms();
    }

    public function getAllRooms() {

    }

    public function getRooms($arr = [1]) {
        $page = $arr[0] - 1;
        $count = !empty($arr[1]) ? $arr[1] : 10;




        echo $page."<br>";
        echo $count."<br>";
    }
}