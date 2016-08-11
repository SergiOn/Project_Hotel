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

    }

    public function allRooms() {
//        $date = date('Y-m-d');
//        $dateTomorrow = date('Y-m-d', strtotime ('+1 days'));

        $page = $_GET['page'];
        $count = $_GET['count'];
        $pageLimit = ($page - 1) * $count;

        $arrRooms = $this->model->allRooms($pageLimit, $count);
//        print_r($arrRooms);
        $this->view->allRooms($arrRooms);


    }




    public function getRooms() {
        if (empty($_GET)) return;

//        echo "<pre>";
//        print_r($_GET);
//        echo "</pre>";

        $timeIn = $_GET['timeIn'];
        $timeOut = $_GET['timeOut'];
        $reserved_rooms = $_GET['reserved-rooms'];
        $bed_1 = $_GET['1-bed'];
        $bed_2 = $_GET['2-bed'];
        $standard_rooms = $_GET['standard-rooms'];
        $lux_rooms = $_GET['lux-rooms'];
        $business_rooms = $_GET['business-rooms'];
        $no_smoke = $_GET['no-smoke'];
        $smoke = $_GET['smoke'];
        $steps = $_GET['steps'];
        $page = $_GET['page'];
        $count = $_GET['count'];
        $pageLimit = ($page - 1) * $count;


        if (!$bed_1 && !$bed_2) {
            $this->view->getRooms([]);
            return;
        }
        if (!$standard_rooms && !$lux_rooms && !$business_rooms) {
            $this->view->getRooms([]);
            return;
        }
        if (!$no_smoke && !$smoke) {
            $this->view->getRooms([]);
            return;
        }

        echo json_encode($_GET);

//        $arrRooms = $this->model->getRooms($timeIn,$timeOut,$reserved_rooms,$bed_1,$bed_2,$standard_rooms,$lux_rooms,$business_rooms,$no_smoke,$smoke,$steps,$pageLimit,$count);
//        $this->view->getRooms($arrRooms);

        /*
        *   http://sohotel.com/api/rooms/getRooms?timeIn=2016-08-11&timeOut=2016-08-12&reserved-rooms=0&1-bed=1&2-bed=1&standard-rooms=1&lux-rooms=1&business-rooms=1&no-smoke=1&smoke=1&steps=0&page=1&count=10
        */
        /*
         *  [timeIn] => 2016-08-11
            [timeOut] => 2016-08-12
            [reserved-rooms] => 0
            [1-bed] => 1
            [2-bed] => 1
            [standard-rooms] => 1
            [lux-rooms] => 1
            [business-rooms] => 1
            [no-smoke] => 1
            [smoke] => 1
            [steps] => 0
            [page] => 1
            [count] => 10
         * */





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