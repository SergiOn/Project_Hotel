<?php
/**
 * Created by PhpStorm.
 * User: Sergio
 * Date: 27.07.2016
 * Time: 23:26
 */

namespace core;


abstract class Controller {
    public $model;
    public $view;

    abstract function index();
}