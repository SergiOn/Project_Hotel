-- phpMyAdmin SQL Dump
-- version 4.4.15.7
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Авг 08 2016 г., 01:09
-- Версия сервера: 5.7.13
-- Версия PHP: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `SOHotel`
--

-- --------------------------------------------------------

--
-- Структура таблицы `booking`
--

CREATE TABLE IF NOT EXISTS `booking` (
  `id` int(5) NOT NULL,
  `idUser` int(5) NOT NULL,
  `numberRoom` int(5) NOT NULL,
  `roomIn` date NOT NULL,
  `roomOut` date NOT NULL,
  `breakfast` char(7) NOT NULL DEFAULT 'false'
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `booking`
--

INSERT INTO `booking` (`id`, `idUser`, `numberRoom`, `roomIn`, `roomOut`, `breakfast`) VALUES
(1, 1, 101, '2016-07-30', '2016-08-14', 'false'),
(2, 1, 102, '2016-07-31', '2016-08-31', 'false'),
(3, 1, 103, '2016-08-15', '2016-08-30', 'false');

-- --------------------------------------------------------

--
-- Структура таблицы `rooms`
--

CREATE TABLE IF NOT EXISTS `rooms` (
  `id` int(5) NOT NULL,
  `number` int(5) NOT NULL,
  `step` int(3) NOT NULL,
  `smoking` char(20) NOT NULL,
  `type` char(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `rooms`
--

INSERT INTO `rooms` (`id`, `number`, `step`, `smoking`, `type`) VALUES
(1, 101, 1, 'для некурящих', 'standard-1'),
(2, 102, 1, 'для некурящих', 'standard-2'),
(3, 103, 1, 'для некурящих', 'standard-3'),
(4, 104, 1, 'для некурящих', 'standard-4'),
(5, 105, 1, 'для некурящих', 'standard-5'),
(6, 106, 1, 'для некурящих', 'lux-1'),
(7, 107, 1, 'для некурящих', 'lux-2'),
(8, 108, 1, 'для некурящих', 'business-1'),
(9, 109, 1, 'для некурящих', 'business-2'),
(10, 110, 1, 'для некурящих', 'business-3'),
(11, 201, 2, 'для курящих', 'standard-1'),
(12, 202, 2, 'для курящих', 'standard-2'),
(13, 203, 2, 'для курящих', 'standard-3'),
(14, 204, 2, 'для курящих', 'standard-4'),
(15, 205, 2, 'для курящих', 'standard-5'),
(16, 206, 2, 'для курящих', 'lux-1'),
(17, 207, 2, 'для курящих', 'lux-2'),
(18, 208, 2, 'для курящих', 'business-1'),
(19, 209, 2, 'для курящих', 'business-2'),
(20, 210, 2, 'для курящих', 'business-3'),
(21, 301, 3, 'для некурящих', 'standard-1'),
(22, 302, 3, 'для некурящих', 'standard-2'),
(23, 303, 3, 'для некурящих', 'standard-3'),
(24, 304, 3, 'для некурящих', 'standard-4'),
(25, 305, 3, 'для некурящих', 'standard-5'),
(26, 306, 3, 'для некурящих', 'lux-1'),
(27, 307, 3, 'для некурящих', 'lux-2'),
(28, 308, 3, 'для некурящих', 'business-1'),
(29, 309, 3, 'для некурящих', 'business-2'),
(30, 310, 3, 'для некурящих', 'business-3'),
(31, 401, 4, 'для курящих', 'standard-1'),
(32, 402, 4, 'для курящих', 'standard-2'),
(33, 403, 4, 'для курящих', 'standard-3'),
(34, 404, 4, 'для курящих', 'standard-4'),
(35, 405, 4, 'для курящих', 'standard-5'),
(36, 406, 4, 'для курящих', 'lux-1'),
(37, 407, 4, 'для курящих', 'lux-2'),
(38, 408, 4, 'для курящих', 'business-1'),
(39, 409, 4, 'для курящих', 'business-2'),
(40, 410, 4, 'для курящих', 'business-3'),
(41, 501, 5, 'для некурящих', 'standard-1'),
(42, 502, 5, 'для некурящих', 'standard-2'),
(43, 503, 5, 'для некурящих', 'standard-3'),
(44, 504, 5, 'для некурящих', 'standard-4'),
(45, 505, 5, 'для некурящих', 'standard-5'),
(46, 506, 5, 'для некурящих', 'lux-1'),
(47, 507, 5, 'для некурящих', 'lux-2'),
(48, 508, 5, 'для некурящих', 'business-1'),
(49, 509, 5, 'для некурящих', 'business-2'),
(50, 510, 5, 'для некурящих', 'business-3'),
(51, 601, 6, 'для курящих', 'standard-1'),
(52, 602, 6, 'для курящих', 'standard-2'),
(53, 603, 6, 'для курящих', 'standard-3'),
(54, 604, 6, 'для курящих', 'standard-4'),
(55, 605, 6, 'для курящих', 'standard-5'),
(56, 606, 6, 'для курящих', 'lux-1'),
(57, 607, 6, 'для курящих', 'lux-2'),
(58, 608, 6, 'для курящих', 'business-1'),
(59, 609, 6, 'для курящих', 'business-2'),
(60, 610, 6, 'для курящих', 'business-3'),
(61, 701, 7, 'для некурящих', 'standard-1'),
(62, 702, 7, 'для некурящих', 'standard-2'),
(63, 703, 7, 'для некурящих', 'standard-3'),
(64, 704, 7, 'для некурящих', 'standard-4'),
(65, 705, 7, 'для некурящих', 'standard-5'),
(66, 706, 7, 'для некурящих', 'lux-1'),
(67, 707, 7, 'для некурящих', 'lux-2'),
(68, 708, 7, 'для некурящих', 'business-1'),
(69, 709, 7, 'для некурящих', 'business-2'),
(70, 710, 7, 'для некурящих', 'business-3'),
(71, 801, 8, 'для некурящих', 'standard-1'),
(72, 802, 8, 'для некурящих', 'standard-2'),
(73, 803, 8, 'для некурящих', 'standard-3'),
(74, 804, 8, 'для некурящих', 'standard-4'),
(75, 805, 8, 'для некурящих', 'standard-5'),
(76, 806, 8, 'для некурящих', 'lux-1'),
(77, 807, 8, 'для некурящих', 'lux-2'),
(78, 808, 8, 'для некурящих', 'business-1'),
(79, 809, 8, 'для некурящих', 'business-2'),
(80, 810, 8, 'для некурящих', 'business-3'),
(81, 901, 9, 'для курящих', 'standard-1'),
(82, 902, 9, 'для курящих', 'standard-2'),
(83, 903, 9, 'для курящих', 'standard-3'),
(84, 904, 9, 'для курящих', 'standard-4'),
(85, 905, 9, 'для курящих', 'standard-5'),
(86, 906, 9, 'для курящих', 'lux-1'),
(87, 907, 9, 'для курящих', 'lux-2'),
(88, 908, 9, 'для курящих', 'business-1'),
(89, 909, 9, 'для курящих', 'business-2'),
(90, 910, 9, 'для курящих', 'business-3'),
(91, 1001, 10, 'для некурящих', 'standard-1'),
(92, 1002, 10, 'для некурящих', 'standard-2'),
(93, 1003, 10, 'для некурящих', 'standard-3'),
(94, 1004, 10, 'для некурящих', 'standard-4'),
(95, 1005, 10, 'для некурящих', 'standard-5'),
(96, 1006, 10, 'для некурящих', 'lux-1'),
(97, 1007, 10, 'для некурящих', 'lux-2'),
(98, 1008, 10, 'для некурящих', 'business-1'),
(99, 1009, 10, 'для некурящих', 'business-2'),
(100, 1010, 10, 'для некурящих', 'business-3'),
(101, 1101, 11, 'для некурящих', 'standard-1'),
(102, 1102, 11, 'для некурящих', 'standard-2'),
(103, 1103, 11, 'для некурящих', 'standard-3'),
(104, 1104, 11, 'для некурящих', 'standard-4'),
(105, 1105, 11, 'для некурящих', 'standard-5'),
(106, 1106, 11, 'для некурящих', 'lux-1'),
(107, 1107, 11, 'для некурящих', 'lux-2'),
(108, 1108, 11, 'для некурящих', 'business-1'),
(109, 1109, 11, 'для некурящих', 'business-2'),
(110, 1110, 11, 'для некурящих', 'business-3'),
(111, 1201, 12, 'для некурящих', 'standard-1'),
(112, 1202, 12, 'для некурящих', 'standard-2'),
(113, 1203, 12, 'для некурящих', 'standard-3'),
(114, 1204, 12, 'для некурящих', 'standard-4'),
(115, 1205, 12, 'для некурящих', 'standard-5'),
(116, 1206, 12, 'для некурящих', 'lux-1'),
(117, 1207, 12, 'для некурящих', 'lux-2'),
(118, 1208, 12, 'для некурящих', 'business-1'),
(119, 1209, 12, 'для некурящих', 'business-2'),
(120, 1210, 12, 'для некурящих', 'business-3'),
(121, 1301, 13, 'для курящих', 'standard-1'),
(122, 1302, 13, 'для курящих', 'standard-2'),
(123, 1303, 13, 'для курящих', 'standard-3'),
(124, 1304, 13, 'для курящих', 'standard-4'),
(125, 1305, 13, 'для курящих', 'standard-5'),
(126, 1306, 13, 'для курящих', 'lux-1'),
(127, 1307, 13, 'для курящих', 'lux-2'),
(128, 1308, 13, 'для курящих', 'business-1'),
(129, 1309, 13, 'для курящих', 'business-2'),
(130, 1310, 13, 'для курящих', 'business-3'),
(131, 1401, 14, 'для некурящих', 'standard-1'),
(132, 1402, 14, 'для некурящих', 'standard-2'),
(133, 1403, 14, 'для некурящих', 'standard-3'),
(134, 1404, 14, 'для некурящих', 'standard-4'),
(135, 1405, 14, 'для некурящих', 'standard-5'),
(136, 1406, 14, 'для некурящих', 'lux-1'),
(137, 1407, 14, 'для некурящих', 'lux-2'),
(138, 1408, 14, 'для некурящих', 'business-1'),
(139, 1409, 14, 'для некурящих', 'business-2'),
(140, 1410, 14, 'для некурящих', 'business-3'),
(141, 1501, 15, 'для некурящих', 'standard-1'),
(142, 1502, 15, 'для некурящих', 'standard-2'),
(143, 1503, 15, 'для некурящих', 'standard-3'),
(144, 1504, 15, 'для некурящих', 'standard-4'),
(145, 1505, 15, 'для некурящих', 'standard-5'),
(146, 1506, 15, 'для некурящих', 'lux-1'),
(147, 1507, 15, 'для некурящих', 'lux-2'),
(148, 1508, 15, 'для некурящих', 'business-1'),
(149, 1509, 15, 'для некурящих', 'business-2'),
(150, 1510, 15, 'для некурящих', 'business-3'),
(151, 1601, 16, 'для курящих', 'standard-1'),
(152, 1602, 16, 'для курящих', 'standard-2'),
(153, 1603, 16, 'для курящих', 'standard-3'),
(154, 1604, 16, 'для курящих', 'standard-4'),
(155, 1605, 16, 'для курящих', 'standard-5'),
(156, 1606, 16, 'для курящих', 'lux-1'),
(157, 1607, 16, 'для курящих', 'lux-2'),
(158, 1608, 16, 'для курящих', 'business-1'),
(159, 1609, 16, 'для курящих', 'business-2'),
(160, 1610, 16, 'для курящих', 'business-3'),
(161, 1701, 17, 'для некурящих', 'standard-1'),
(162, 1702, 17, 'для некурящих', 'standard-2'),
(163, 1703, 17, 'для некурящих', 'standard-3'),
(164, 1704, 17, 'для некурящих', 'standard-4'),
(165, 1705, 17, 'для некурящих', 'standard-5'),
(166, 1706, 17, 'для некурящих', 'lux-1'),
(167, 1707, 17, 'для некурящих', 'lux-2'),
(168, 1708, 17, 'для некурящих', 'business-1'),
(169, 1709, 17, 'для некурящих', 'business-2'),
(170, 1710, 17, 'для некурящих', 'business-3'),
(171, 1801, 18, 'для некурящих', 'standard-1'),
(172, 1802, 18, 'для некурящих', 'standard-2'),
(173, 1803, 18, 'для некурящих', 'standard-3'),
(174, 1804, 18, 'для некурящих', 'standard-4'),
(175, 1805, 18, 'для некурящих', 'standard-5'),
(176, 1806, 18, 'для некурящих', 'lux-1'),
(177, 1807, 18, 'для некурящих', 'lux-2'),
(178, 1808, 18, 'для некурящих', 'business-1'),
(179, 1809, 18, 'для некурящих', 'business-2'),
(180, 1810, 18, 'для некурящих', 'business-3'),
(181, 1901, 19, 'для некурящих', 'standard-1'),
(182, 1902, 19, 'для некурящих', 'standard-2'),
(183, 1903, 19, 'для некурящих', 'standard-3'),
(184, 1904, 19, 'для некурящих', 'standard-4'),
(185, 1905, 19, 'для некурящих', 'standard-5'),
(186, 1906, 19, 'для некурящих', 'lux-1'),
(187, 1907, 19, 'для некурящих', 'lux-2'),
(188, 1908, 19, 'для некурящих', 'business-1'),
(189, 1909, 19, 'для некурящих', 'business-2'),
(190, 1910, 19, 'для некурящих', 'business-3'),
(191, 2001, 20, 'для некурящих', 'standard-1'),
(192, 2002, 20, 'для некурящих', 'standard-2'),
(193, 2003, 20, 'для некурящих', 'standard-3'),
(194, 2004, 20, 'для некурящих', 'standard-4'),
(195, 2005, 20, 'для некурящих', 'standard-5'),
(196, 2006, 20, 'для некурящих', 'lux-1'),
(197, 2007, 20, 'для некурящих', 'lux-2'),
(198, 2008, 20, 'для некурящих', 'business-1'),
(199, 2009, 20, 'для некурящих', 'business-2'),
(200, 2010, 20, 'для некурящих', 'business-3'),
(201, 2101, 21, 'для некурящих', 'standard-1'),
(202, 2102, 21, 'для некурящих', 'standard-2'),
(203, 2103, 21, 'для некурящих', 'standard-3'),
(204, 2104, 21, 'для некурящих', 'standard-4'),
(205, 2105, 21, 'для некурящих', 'standard-5'),
(206, 2106, 21, 'для некурящих', 'lux-1'),
(207, 2107, 21, 'для некурящих', 'lux-2'),
(208, 2108, 21, 'для некурящих', 'business-1'),
(209, 2109, 21, 'для некурящих', 'business-2'),
(210, 2110, 21, 'для некурящих', 'business-3'),
(211, 2201, 22, 'для некурящих', 'standard-1'),
(212, 2202, 22, 'для некурящих', 'standard-2'),
(213, 2203, 22, 'для некурящих', 'standard-3'),
(214, 2204, 22, 'для некурящих', 'standard-4'),
(215, 2205, 22, 'для некурящих', 'standard-5'),
(216, 2206, 22, 'для некурящих', 'lux-1'),
(217, 2207, 22, 'для некурящих', 'lux-2'),
(218, 2208, 22, 'для некурящих', 'business-1'),
(219, 2209, 22, 'для некурящих', 'business-2'),
(220, 2210, 22, 'для некурящих', 'business-3'),
(221, 2301, 23, 'для некурящих', 'standard-1'),
(222, 2302, 23, 'для некурящих', 'standard-2'),
(223, 2303, 23, 'для некурящих', 'standard-3'),
(224, 2304, 23, 'для некурящих', 'standard-4'),
(225, 2305, 23, 'для некурящих', 'standard-5'),
(226, 2306, 23, 'для некурящих', 'lux-1'),
(227, 2307, 23, 'для некурящих', 'lux-2'),
(228, 2308, 23, 'для некурящих', 'business-1'),
(229, 2309, 23, 'для некурящих', 'business-2'),
(230, 2310, 23, 'для некурящих', 'business-3'),
(231, 2401, 24, 'для курящих', 'standard-1'),
(232, 2402, 24, 'для курящих', 'standard-2'),
(233, 2403, 24, 'для курящих', 'standard-3'),
(234, 2404, 24, 'для курящих', 'standard-4'),
(235, 2405, 24, 'для курящих', 'standard-5'),
(236, 2406, 24, 'для курящих', 'lux-1'),
(237, 2407, 24, 'для курящих', 'lux-2'),
(238, 2408, 24, 'для курящих', 'business-1'),
(239, 2409, 24, 'для курящих', 'business-2'),
(240, 2410, 24, 'для курящих', 'business-3'),
(241, 2501, 25, 'для некурящих', 'standard-1'),
(242, 2502, 25, 'для некурящих', 'standard-2'),
(243, 2503, 25, 'для некурящих', 'standard-3'),
(244, 2504, 25, 'для некурящих', 'standard-4'),
(245, 2505, 25, 'для некурящих', 'standard-5'),
(246, 2506, 25, 'для некурящих', 'lux-1'),
(247, 2507, 25, 'для некурящих', 'lux-2'),
(248, 2508, 25, 'для некурящих', 'business-1'),
(249, 2509, 25, 'для некурящих', 'business-2'),
(250, 2510, 25, 'для некурящих', 'business-3');

-- --------------------------------------------------------

--
-- Структура таблицы `roomsInfo`
--

CREATE TABLE IF NOT EXISTS `roomsInfo` (
  `id` int(11) NOT NULL,
  `type` char(12) NOT NULL,
  `name` char(250) NOT NULL,
  `typeName` char(100) NOT NULL,
  `image` char(250) NOT NULL,
  `bedCount` int(2) NOT NULL,
  `price` int(7) NOT NULL,
  `price-br` int(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `roomsInfo`
--

INSERT INTO `roomsInfo` (`id`, `type`, `name`, `typeName`, `image`, `bedCount`, `price`, `price-br`) VALUES
(1, 'standard-1', 'Номер с большой кроватью (King Size)', 'Стандартный номер', 'img/2_rooms/s-1.jpg', 1, 340, 365),
(2, 'standard-2', 'Номер категории делюкс', 'Стандартный номер', 'img/2_rooms/s-2.jpg', 1, 375, 400),
(3, 'standard-3', 'Угловой номер категории делюкс с большой кроватью (king size) и панорамным видом', 'Стандартный номер', 'img/2_rooms/s-3.jpg', 1, 415, 440),
(4, 'standard-4', 'Номер с односпальной кроватью (Twin)', 'Стандартный номер', 'img/2_rooms/s-4.jpg', 1, 340, 365),
(5, 'standard-5', 'Номер с двумя односпальными кроватями (Twin)', 'Стандартный номер', 'img/2_rooms/s-5.jpg', 2, 340, 365),
(6, 'lux-1', 'Люкс с одной спальней, большой кроватью (King Size) и доступом в бар-гостиную', 'Люкс номер', 'img/2_rooms/l-1.jpg', 1, 590, 615),
(7, 'lux-2', 'Президентский люкс с панорамным видом', 'Люкс номер', 'img/2_rooms/l-2.jpg', 1, 4500, 4525),
(8, 'business-1', 'Номер бизнес-класса premium с большой кроватью (King Size)', 'Бизнес номер', 'img/2_rooms/bz-1.jpg', 1, 440, 465),
(9, 'business-2', 'Номер бизнес-класса с большой кроватью (King Size) и доступом в бар-гостиную', 'Бизнес номер', 'img/2_rooms/bz-2.jpg', 1, 390, 415),
(10, 'business-3', 'Номер бизнес-класса с двумя односпальными кроватями и доступом в бар-гостиную', 'Бизнес номер', 'img/2_rooms/bz-3.jpg', 2, 390, 415);

-- --------------------------------------------------------

--
-- Структура таблицы `user_data`
--

CREATE TABLE IF NOT EXISTS `user_data` (
  `id` int(5) NOT NULL,
  `name` char(50) NOT NULL,
  `l_name` char(50) NOT NULL,
  `phone` char(20) NOT NULL,
  `regDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `user_data`
--

INSERT INTO `user_data` (`id`, `name`, `l_name`, `phone`, `regDate`) VALUES
(1, 'Сергей', 'Онищенко', '+38 (096) 977 44 91', '2016-07-28 23:53:31'),
(2, 'Петро', 'Порошенко', ' +38 (099) 123 45 67', '2016-08-07 14:05:40'),
(3, 'Elvis Aaron', 'Presley', '+38 (081) 935 19 77', '2016-08-07 18:14:37'),
(4, 'Bill', 'Gates', '+38 (123) 456 78 90', '2016-08-07 18:24:14');

-- --------------------------------------------------------

--
-- Структура таблицы `user_login`
--

CREATE TABLE IF NOT EXISTS `user_login` (
  `id` int(5) NOT NULL,
  `email` char(50) NOT NULL,
  `pass` char(38) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `user_login`
--

INSERT INTO `user_login` (`id`, `email`, `pass`) VALUES
(1, 'on@mail.com', '827ccb0eea8a706c4c34a16891f84e7b'),
(2, 'poroshenko@mail.com', 'aa366f775f58ea559f7fd4c51a84e644'),
(3, 'elvispresley@mail.com', '8b28c7134887bb938e1ffed68456ffb2'),
(4, 'billgates@mail.com', '5f532a3fc4f1ea403f37070f59a7a53a');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `roomsInfo`
--
ALTER TABLE `roomsInfo`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user_data`
--
ALTER TABLE `user_data`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user_login`
--
ALTER TABLE `user_login`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT для таблицы `user_login`
--
ALTER TABLE `user_login`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
