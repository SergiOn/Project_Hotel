<?php
/**
 * Created by PhpStorm.
 * User: Sergio
 * Date: 29.07.2016
 * Time: 13:37
 */

namespace view;


use core\View;

class Pages extends View {

    public function home() {
        $file = file_get_contents('templates/home.html');
        echo $this->toJson($file);
    }

    public function rooms() {
        $file = file_get_contents('templates/rooms.html');
        echo $this->toJson($file);
    }

    public function roomsRoom() {
        $file = file_get_contents('templates/rooms_the-room.html');
        echo $this->toJson($file);
    }
    public function roomsRoomReserve() {
        $file = file_get_contents('templates/rooms_the-room-reserve.html');
        echo $this->toJson($file);
    }
    public function roomsRoomReserveBr() {
        $file = file_get_contents('templates/rooms_the-room-reserve-br.html');
        echo $this->toJson($file);
    }

    public function services() {
        $file = file_get_contents('templates/services.html');
        echo $this->toJson($file);
    }

    public function contact() {
        $file = file_get_contents('templates/contact.html');
        echo $this->toJson($file);
    }

    public function search() {
        $file = file_get_contents('templates/search.html');
        echo $this->toJson($file);
    }

    public function login() {
        $file = file_get_contents('templates/login.html');
        echo $this->toJson($file);
    }

    public function registration() {
        $file = file_get_contents('templates/registration.html');
        echo $this->toJson($file);
    }

}