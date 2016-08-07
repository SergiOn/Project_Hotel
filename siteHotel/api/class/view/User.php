<?php
/**
 * Created by PhpStorm.
 * User: Sergio
 * Date: 04.08.2016
 * Time: 0:44
 */

namespace view;


use core\View;

class User extends View {

    public function login($userInfo) {
        echo $this->toJson($userInfo);
    }

    public function getTrueUser($userInfo) {
        echo $this->toJson($userInfo);
    }

    public function registration($userInfo) {
        echo $this->toJson($userInfo);
    }

}