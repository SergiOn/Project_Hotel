<?php
/**
 * Created by PhpStorm.
 * User: Sergio
 * Date: 09.05.2016
 * Time: 19:58
 */

namespace core;

class Routing {
    protected static function getPath() {
        $path = $_SERVER["REQUEST_URI"];
        $pathArr = explode("/", $path);
        $key = array_search('api', $pathArr);
        $dataUrl = [];

        $className = array_slice($pathArr, $key+1, 1)[0];
        $dataUrl[0][0] = $className;

        if (!empty($pathArr[$key+2])) {
            $methodName = array_slice($pathArr, $key+2, 1)[0];
            $methodName = preg_replace("/\?.*/", "", $methodName);
            $dataUrl[0][1] = $methodName;
        }

        if (!empty($pathArr[$key+3])) {
            $dataUrl[1] = array_slice($pathArr, $key + 3);
        }
        return $dataUrl;
    }

    public static function rout() {
        $dataUrl = self::getPath();

        $className = isset($dataUrl[0][0]) ? ucfirst($dataUrl[0][0]) : "User";
        $methodName = isset($dataUrl[0][1]) ? $dataUrl[0][1] : "index";

        $className = "\\controller\\".$className;

        if (class_exists($className)) {
            $obj = new $className;

            if (method_exists($obj, $methodName)) {

                $reflectionMethod = new \ReflectionMethod($className, $methodName);
                $params = $reflectionMethod->getNumberOfParameters();

                if ($params && isset($dataUrl[1])) {
                    $obj->$methodName($dataUrl[1]);
                } else {
                    $obj->$methodName();
                }
            }
        }

    }
}