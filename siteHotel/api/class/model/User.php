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

    public function login($email, $pass) {
        $userInfo = $this->db->selectQuery("
            SELECT user_data.* FROM `user_login` LEFT JOIN `user_data` 
            ON `user_login`.`id` = `user_data`.`id` 
            WHERE `user_login`.`email` = ? AND `user_login`.`pass` = ?
        ", [$email, $pass]);
        return $userInfo;
    }



}