<?php
/**
 * Created by PhpStorm.
 * User: Sergio
 * Date: 28.07.2016
 * Time: 14:24
 */

namespace Model;


use core\Model;

class Rooms extends Model{

    public function allRooms($page, $count) {
        $allRooms = $this->db->selectQuery("
              SELECT rooms.*, roomsInfo.name, roomsInfo.typeName, roomsInfo.image, roomsInfo.bedCount, roomsInfo.price, `roomsInfo`.`price-br`, 
              booking.idUser, booking.roomIn, booking.roomOut, booking.breakfast FROM `rooms` 
              LEFT JOIN `roomsInfo` ON rooms.type = roomsInfo.type 
              LEFT JOIN `booking` ON rooms.number = booking.numberRoom
              ORDER BY `id`
              LIMIT $page, $count
        ");
        return $allRooms;
    }
    public function countAllRooms() {
        $countAllRooms = $this->db->selectQuery("
              SELECT COUNT(*) FROM `rooms` 
              LEFT JOIN `roomsInfo` ON rooms.type = roomsInfo.type 
              LEFT JOIN `booking` ON rooms.number = booking.numberRoom
        ");
        return $countAllRooms;
    }


    public function getRooms($timeIn, $timeOut, $reserved_rooms, $bed_1, $bed_2, $standard_rooms, $lux_rooms, $business_rooms, $no_smoke, $smoke, $steps, $pageLimit, $count) {
        if ($bed_1 && $bed_2) {
            $sqlBed = 'roomsInfo.bedCount = 1 OR roomsInfo.bedCount = 2';
        } elseif ($bed_1 && !$bed_2) {
            $sqlBed = 'roomsInfo.bedCount = 1';
        } elseif (!$bed_1 && $bed_2) {
            $sqlBed = 'roomsInfo.bedCount = 2';
        }

        if ($standard_rooms) {

        }




    }





}


/*
 *
 * все без резерва
 * SELECT rooms.*, roomsInfo.name, roomsInfo.typeName, roomsInfo.image, roomsInfo.bedCount, roomsInfo.price, `roomsInfo`.`price-br`,
              booking.idUser, booking.roomIn, booking.roomOut, booking.breakfast FROM `rooms`
              LEFT JOIN `roomsInfo` ON rooms.type = roomsInfo.type
              LEFT JOIN `booking` ON rooms.number = booking.numberRoom
              WHERE booking.roomIn >= ('2016-07-31') OR booking.roomOut <= '2016-07-29' OR booking.roomIn IS NULL
              ORDER BY `id`
              LIMIT $page, $count

* SELECT COUNT(*) FROM `rooms`
              LEFT JOIN `roomsInfo` ON rooms.type = roomsInfo.type
              LEFT JOIN `booking` ON rooms.number = booking.numberRoom
              WHERE booking.roomIn >= ('2016-07-31') OR booking.roomOut <= '2016-07-29' OR booking.roomIn IS NULL
 *
 *
 * */

/*
 * рез
 *
 * SELECT rooms.*, roomsInfo.name, roomsInfo.typeName, roomsInfo.image, roomsInfo.bedCount, roomsInfo.price, `roomsInfo`.`price-br`,
              booking.idUser, booking.roomIn, booking.roomOut, booking.breakfast FROM `rooms`
              LEFT JOIN `roomsInfo` ON rooms.type = roomsInfo.type
              LEFT JOIN `booking` ON rooms.number = booking.numberRoom
              WHERE booking.roomIn < ('2016-07-31') AND booking.roomOut > '2016-07-29'
              ORDER BY `id`
 *
 * */