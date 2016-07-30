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
        include('templates/home.html');
    }

    public function rooms() {
        include('templates/rooms.html');
    }

    public function roomsRoom() {
        include('templates/rooms_the-room.html');
    }
    public function roomsRoomReserve() {
        include('templates/rooms_the-room-reserve.html');
    }
    public function roomsRoomReserveBr() {
        include('templates/rooms_the-room-reserve-br.html');
    }

    public function services() {
        include('templates/services.html');
    }

    public function contact() {
        include('templates/contact.html');
    }

    public function search() {
        include('templates/search.html');
    }

    public function login() {
        include('templates/login.html');
    }

    public function registration() {
        include('templates/registration.html');
    }

}