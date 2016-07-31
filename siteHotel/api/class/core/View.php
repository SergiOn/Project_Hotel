<?php
/**
 * Created by PhpStorm.
 * User: Sergio
 * Date: 29.07.2016
 * Time: 15:52
 */

namespace core;


class View {
    protected function toJson($file) {
        $file = json_encode($file);
        return $file;
    }
}