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

    public function allRooms($page, $count, $dateIn, $dateOut) {
        $allRooms = $this->db->selectQuery("
              SELECT rooms.*, roomsInfo.name, roomsInfo.typeName, roomsInfo.image, roomsInfo.bedCount, roomsInfo.price, `roomsInfo`.`price-br`, 
              booking.idUser, booking.roomIn, booking.roomOut, booking.breakfast FROM `rooms` 
              LEFT JOIN `roomsInfo` ON rooms.type = roomsInfo.type 
              LEFT JOIN `booking` ON rooms.number = booking.numberRoom
              WHERE booking.roomIn >= ('2016-07-31') OR booking.roomOut <= '2016-07-29' OR booking.roomIn IS NULL
              ORDER BY `id`
              LIMIT $page, $count
        ");
        return $allRooms;
    }
    public function countAllRooms($dateIn, $dateOut) {
        $countAllRooms = $this->db->selectQuery("
              SELECT COUNT(*) FROM `rooms` 
              LEFT JOIN `roomsInfo` ON rooms.type = roomsInfo.type 
              LEFT JOIN `booking` ON rooms.number = booking.numberRoom
              WHERE booking.roomIn >= ('2016-07-31') OR booking.roomOut <= '2016-07-29' OR booking.roomIn IS NULL
        ");
        return $countAllRooms;
    }

    public function bookingRooms() {

    }

    public function hotelRooms() {
    }




}