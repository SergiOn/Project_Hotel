<?php
/**
 * Created by PhpStorm.
 * User: Sergio
 * Date: 28.07.2016
 * Time: 0:09
 */

namespace core;


class Model {
    protected $db;

    public function __construct() {
        $this->db = new \core\DB();
    }

}