<?php
/**
 * Created by PhpStorm.
 * User: Sergio
 * Date: 26.04.2016
 * Time: 23:49
 */

namespace core;


use \PDO;

class DB implements IDB {
    protected $db;
    
    public function __construct() {
        $this->sqlConnect();
    }
    private function sqlConnect() {
        $dbName = 'SOHotel';
        $settings = "mysql:host=localhost;dbname=$dbName;charset=utf8";
        try {
            $this->db = new \PDO($settings, "root", "");
        } catch (PDOException $e) {
            die($e->getMessage());
        }
    }

    public function selectQuery($sql, $arrValue = []) {
//        return $sql;
        $query = $this->db->prepare($sql);
        $query->execute($arrValue);
        $array = $query->fetchAll(PDO::FETCH_ASSOC);
        return $array;
    }

    public function select($table, $what = false, $where = false, $orderColumn = false, $desc = false, $limit = false) {
        $arrValue = [];
        if ($what) {
            $whatSQL = implode(", ", $what);
        } else {
            $whatSQL = "*";
        }
        if ($where) {
            $whereSQL = "WHERE";
            $and = "";
            foreach ($where as $key => $value) {
                $whereSQL .= "$and `$key` = ?";
                $and = " AND";
                $arrValue[] = $value;
            }
        } else {
            $whereSQL = "";
        }
        if ($orderColumn) {
            $orderColumnSQL = "ORDER BY $orderColumn";
            if (strtoupper($desc) === "DESC") {
                $orderColumnSQL .= " DESC";
            } else {
                $orderColumnSQL .= " ASC";
            }
        } elseif (strtoupper($desc) === "DESC" && !$orderColumn) {
            $orderColumnSQL = "ORDER BY id DESC";
        } else {
            $orderColumnSQL = "";
        }
        if ($limit && count($limit) === 2) {
            $limitSQL = "LIMIT ";
            $limitSQL .= implode(", ", $limit);
        } elseif ($limit && count($limit) === 1) {
            $limitSQL = "LIMIT ".$limit[0];
        } else {
            $limitSQL = "";
        }
        $sql = "SELECT $whatSQL FROM `$table` $whereSQL $orderColumnSQL $limitSQL";
        $query = $this->db->prepare($sql);
        $query->execute($arrValue);
        $array = $query->fetchAll(PDO::FETCH_ASSOC);
        return $array;
    }
    public function insert($table, $what) {
        $comma = "";
        $whatSQL = "";
        $values = "";
        $arrValue = [];
        foreach ($what as $key => $value) {
            $whatSQL .= "$comma `$key`";
            $values .= "$comma ?";
            $comma = ",";
            $arrValue[] = $value;
        }
        $sql = "INSERT INTO `$table` ($whatSQL) VALUES ($values)";
        $query = $this->db->prepare($sql);
        $result = $query->execute($arrValue);
        if ($result) {
            $id = $this->db->lastInsertId();
            return $id;
        }
    }
    public function update($table, $what, $where) {
        $whatSQL = "";
        $comma = "";
        $arrValue = [];
        foreach ($what as $key => $value) {
            $whatSQL .= "$comma `$key` = ?";
            $comma = ",";
            $arrValue[] = $value;
        }
        $whereSQL = "";
        $and = "";
        foreach ($where as $key => $value) {
            $whereSQL .= "$and `$key` = ?";
            $and = " AND";
            $arrValue[] = $value;
        }
        $sql = "UPDATE `$table` SET $whatSQL WHERE $whereSQL";
        $query = $this->db->prepare($sql);
        $result = $query->execute($arrValue);
        return $result;
    }
    public function delete($table, $where) {
        $arrValue = [];
        if ($where) {
            $whereSQL = "WHERE";
            $and = "";
            foreach ($where as $key => $value) {
                $whereSQL .= " $and `$key` = ?";
                $arrValue[] = $value;
                $and = "AND";
            }
        } else {
            $whereSQL = "";
        }
        $sql = "DELETE FROM `$table` $whereSQL";
        $query = $this->db->prepare($sql);
        $result = $query->execute($arrValue);
        return $result;
    }
}
# delete працює
# insert працює
# update працює
# $table, $what = false, $where = false, $orderColumn = false, $desc = false, $limit = false
//$sql = new DB();
//echo "<pre>";
//print_r($sql->select("test", false, false, 'id', 'desc',[1, 10]));
//print_r($sql->insert('test', ['name'=>'new']));
//print_r($sql->update('test', ['name'=>'10'], ['id'=>'13']));
//echo "</pre>";
# ASC|DESC


interface IDB {
    /**
     * @param $table - Назва таблиці
     * @param $what - масив колонок, які потрібно повернути (якщо false - тоді всі колонки)
     * @param $where - асоціативний масив колонка - значення
     * @param $orderColumn - колонка по якій сортувати
     * @param $desc - напрям сортування
     * @param $limit - масив ліміту ([0-30]) за умовчуванням 0-30
     * @return mixed - результативний масив
     */
    public function select($table, $what, $where, $orderColumn, $desc, $limit);

    /**
     * @param $table - Назва таблиці
     * @param $what - масив колонок, які потрібно повернути (якщо false - тоді всі колонки)
     * @return mixed - ід елементу
     */
    public function insert($table, $what);

    /**
     * @param $table - Назва таблиці
     * @param $what - масив колонок, які потрібно повернути (якщо false - тоді всі колонки)
     * @param $where - асоціативний масив колонка - значення
     * @return mixed
     */
    public function update($table, $what, $where);

    /**
     * @param $table - Назва таблиці
     * @param $what - масив колонок, які потрібно повернути (якщо false - тоді всі колонки)
     * @return mixed
     */
    public function delete($table, $where);
}