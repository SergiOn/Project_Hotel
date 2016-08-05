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
//        if (empty($_POST)) return;
//        $method = $_POST;
//
//        $data = json_decode($method['userLogin'], true);
//
//        $email = $data['email'];
//        $pass = md5($data['pass']);

        $email = 'on@mail.com';
        $pass = md5('12345');

        $userInfo = $this->model->login($email, $pass);
//        $this->view->login($userInfo);

        echo '<pre>';
        print_r($userInfo);
        echo '</pre>';

        if (!empty($userInfo)) {
            echo '<br><br> good<br><br>';

            $this->setCookies($userInfo[0]['id']);
        }
    }

    public function registration() {

    }

    public function setCookies($idUser) {
        echo $idUser;
    }
    public function deleteCookies() {
    }

    public function booking() {

    }

    public function search() {

    }

    public function getTrueUserId() {

    }
}
