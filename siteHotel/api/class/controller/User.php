<?php
/**
 * Created by PhpStorm.
 * User: Sergio
 * Date: 27.07.2016
 * Time: 20:39
 */

namespace controller;


use core\Controller;

class User extends Controller {

    public function __construct() {
        $this->model = new \Model\User();
        $this->view = new \view\User();
    }

    public function index() {
        //$var2 = "it is a var"
        //print_r($var2);
    }

    public function login() {
        $method = $_POST;
        if (empty($method)) return;
        $data = json_decode($method['userLogin'], true);

        $email = $data['email'];
        $pass = md5($data['pass']);
//        $email = 'on@mail.com';
//        $pass = md5('12345');

        $userInfo = $this->model->login($email, $pass);
        if (empty($userInfo)) return;
        $this->model->setCookies($email);
        $this->view->login($userInfo);
    }
    public function logout() {
        $this->model->removeCookies();
    }
    public function getTrueUser() {
        $userInfo = $this->model->getTrueUser();
        if (!$userInfo) {
            $this->model->removeCookies();
        }
        $this->view->getTrueUser($userInfo);
    }
    public function registration() {
        $method = $_POST;
        if (empty($method)) return;
        $data = json_decode($method['userRegistration'], true);

        $email = $data['email'];
        $pass = md5($data['pass']);
        $name = $data['name'];
        $l_name = $data['l_name'];
        $tel = $data['tel'];

        $idUser = $this->model->registration($email, $pass, $name, $l_name, $tel);
        if (!$idUser) {
            $this->view->registration([]);
            return;
        }
        $userInfo = $this->model->login($email, $pass);
        if (empty($userInfo)) {
            return;
        }
        $this->model->setCookies($email);
        $this->view->registration($userInfo);
    }



    public function booking() {

    }

    public function search() {
        $method = $_GET;
        if (empty($method)) return;
        $searchValue = json_decode($method['searchValue'], true);
        //$searchValue = $method['searchValue'];

        $searchAnswer = $this->model->search($searchValue);
        $this->view->search($searchAnswer);
    }
}
