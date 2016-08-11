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

    public function __construct() {
        $this->model = new \Model\Rooms();
        $this->view = new \view\Rooms();
    }

    public function index() {
        $this->AllRooms([0,1000]);
    }

    public function allRooms($arr = []) {
        $page = isset($arr[0]) ? $arr[0] - 1 : 0;
        $count = !empty($arr[1]) ? $arr[1] : 10;

        $count = 2; # delete

        $pageLimit = $page * $count;

        $date = date('Y-m-d');
        $dateTomorrow = date('Y-m-d', strtotime ('+1 days'));

        $allRooms = $this->model->allRooms($pageLimit, $count, $date, $dateTomorrow);
        $countAllRooms = $this->model->countAllRooms($date, $dateTomorrow);

        $dataAllRooms = [];
        $dataAllRooms[0] = $allRooms;

        if (!$page) {
            $dataAllRooms[1] = $countAllRooms;
        }

//        echo "<pre>";
//        print_r($dataAllRooms);
//        echo "</pre>";

    }




    public function getRooms() {

        echo "<pre>";
        print_r($_GET);
        echo "</pre>";





//        $roomsInfo = [
//            'time-in' => '26.07.2016',
//            'time-out' => '27.07.2016',
//            'reserved-rooms' => false,
//            '1-bed' => true,
//            '2-bed' => true,
//            'standard-rooms' => true,
//            'lux-rooms' => true,
//            'business-rooms' => true,
//            'no-smoke' => true,
//            'smoke' => false,
//            'steps' => false
//        ];
//
//
//
//        echo $page."<br>";
//        echo $count."<br>";
    }
}