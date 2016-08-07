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

    public function setCookies($idUser) {
        $this->model->setCookies($idUser);
    }
    public function removeCookies($idUser) {
        $this->model->removeCookies($idUser);
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

        if (!empty($userInfo)) {
            $this->setCookies($userInfo[0]['id']);
        }
        $this->view->login($userInfo);
    }
    public function logout() {
        $method = $_POST;
        if (empty($method)) return;
        $this->removeCookies($method['idUser']);
    }
    public function getTrueUser() {
        $userInfo = $this->model->getTrueUser();
        if (!$userInfo) {
            $this->model->removeCookies();
        }
        $this->view->getTrueUser($userInfo);
    }
    public function registration() {

    }



    public function booking() {

    }

    public function search() {

    }


}
