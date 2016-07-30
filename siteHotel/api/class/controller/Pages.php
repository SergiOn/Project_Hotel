<?php
/**
 * Created by PhpStorm.
 * User: Sergio
 * Date: 29.07.2016
 * Time: 13:28
 */

namespace controller;


use core\Controller;

class Pages extends Controller {

    public function __construct() {
        $this->view = new \view\Pages();
    }

    public function index() {
        // TODO: Implement index() method.
    }

    public function home() {
        $this->view->home();
    }

    public function rooms() {
        $this->view->rooms();
    }

    public function roomsRoom() {
        $this->view->roomsRoom();
    }
    public function roomsRoomReserve() {
        $this->view->roomsRoomReserve();
    }
    public function roomsRoomReserveBr() {
        $this->view->roomsRoomReserveBr();
    }

    public function services() {
        $this->view->services();
    }

    public function contact() {
        $this->view->contact();
    }

    public function search() {
        $this->view->search();
    }

    public function login() {
        $this->view->login();
    }

    public function registration() {
        $this->view->registration();
    }

}