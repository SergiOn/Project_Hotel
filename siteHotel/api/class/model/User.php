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

    public function setCookies($idUser) {
        $userInfo = $this->db->select('user_login', false, ['id' => $idUser])[0];
        $email = $userInfo['email'];
        $cookieData = $this->doEncryption($email);
        setcookie("auth", $cookieData['auth'], time()+60*60*24, "/");
        setcookie("token", $cookieData['token'], time()+60*60*24, "/");
    }
    public function doEncryption($email) {
        $token = md5("security_key".$email);
        return $array = ['auth' => $email, 'token' => $token];
    }
    public function removeCookies($idUser) {
        $cookieAuth = $_COOKIE['auth'];
        $cookieToken = $_COOKIE['token'];
        $trueToken = $this->doEncryption($cookieAuth)['token'];
        $userData = $this->db->select('user_login', ['email'], ['id' => $idUser]);

        if (empty($userData) || $userData[0]['email'] !== $cookieAuth || $cookieToken !== $trueToken) {
            return;
        }
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
        if (empty($_COOKIE)) return;
        $email = $_COOKIE['auth'];

        $userInfo = $this->db->selectQuery("
            SELECT user_data.* FROM `user_login` LEFT JOIN `user_data` 
            ON `user_login`.`id` = `user_data`.`id` WHERE `user_login`.`email` = ?
        ", [$email]);
        return $userInfo;
    }



}