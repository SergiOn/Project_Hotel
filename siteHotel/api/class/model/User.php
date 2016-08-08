<?php
/**
 * Created by PhpStorm.
 * User: Sergio
 * Date: 04.08.2016
 * Time: 0:31
 */

namespace Model;


use core\Model;

class User extends Model {

    public function setCookies($emailUser) {
        $email = $emailUser;
        $cookieData = $this->doEncryption($email);
        setcookie("auth", $cookieData['auth'], time()+60*60*24, "/");
        setcookie("token", $cookieData['token'], time()+60*60*24, "/");
    }
    public function doEncryption($email) {
        $token = md5("security_key".$email);
        return $array = ['auth' => $email, 'token' => $token];
    }
    public function removeCookies() {
        if (isset($_COOKIE['auth']) || isset($_COOKIE['token'])) {
            setcookie("auth", "", time()-1, "/");
            setcookie("token", "", time()-1, "/");
        }
    }

    public function login($email, $pass) {
        $userInfo = $this->db->selectQuery("
            SELECT user_data.* FROM `user_login` LEFT JOIN `user_data` 
            ON `user_login`.`id` = `user_data`.`id` 
            WHERE `user_login`.`email` = ? AND `user_login`.`pass` = ?
        ", [$email, $pass]);
        return $userInfo;
    }

    public function getTrueUser() {
        if (empty($_COOKIE)) return false;
        $email = $_COOKIE['auth'];
        $token = $_COOKIE['token'];
        $trueToken = $this->doEncryption($email)['token'];
        $userData = $this->db->select('user_login', false, ['email' => $email]);
        if (empty($userData) || $userData[0]['email'] !== $email || $token !== $trueToken) {
            return false;
        }

        $userInfo = $this->db->selectQuery("
            SELECT user_data.* FROM `user_login` LEFT JOIN `user_data` 
            ON `user_login`.`id` = `user_data`.`id` WHERE `user_login`.`email` = ?
        ", [$email]);
        return $userInfo;
    }

    public function registration($email, $pass, $name, $l_name, $tel) {
        $loginUser = $this->db->select('user_login', false, ['email' => $email]);
        if (!empty($loginUser)) return false;
        $idUser = $this->db->insert('user_login', ['email' => $email, 'pass' => $pass]);
        if (empty($idUser)) return false;
        $this->db->insert('user_data', ['id' => $idUser, 'name' => $name, 'l_name' => $l_name, 'phone' => $tel]);
        return $idUser;
    }




}