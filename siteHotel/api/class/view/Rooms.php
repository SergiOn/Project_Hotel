<?php
/**
 * Created by PhpStorm.
 * User: Sergio
 * Date: 29.07.2016
 * Time: 15:52
 */

namespace view;


use core\View;

class Rooms extends View {

    public function allRooms($file) {
        echo $this->toJson($file);
    }

    public function getRooms($arrRooms) {
        echo $this->toJson($arrRooms);
    }
}


