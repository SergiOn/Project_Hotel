-- phpMyAdmin SQL Dump
-- version 4.4.15.7
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июл 29 2016 г., 02:40
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
-- Структура таблицы `rooms`
--

CREATE TABLE IF NOT EXISTS `rooms` (
  `id` int(5) NOT NULL,
  `number` int(5) NOT NULL,
  `step` int(3) NOT NULL,
  `smoking` char(6) NOT NULL,
  `type` char(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `rooms`
--

INSERT INTO `rooms` (`id`, `number`, `step`, `smoking`, `type`) VALUES
(1, 101, 1, 'false', 'standard-1'),
(2, 102, 1, 'false', 'standard-2'),
(3, 103, 1, 'false', 'standard-3'),
(4, 104, 1, 'false', 'standard-4'),
(5, 105, 1, 'false', 'standard-5'),
(6, 106, 1, 'false', 'lux-1'),
(7, 107, 1, 'false', 'lux-2'),
(8, 108, 1, 'false', 'business-1'),
(9, 109, 1, 'false', 'business-2'),
(10, 110, 1, 'false', 'business-3'),
(11, 201, 2, 'true', 'standard-1'),
(12, 202, 2, 'true', 'standard-2'),
(13, 203, 2, 'true', 'standard-3'),
(14, 204, 2, 'true', 'standard-4'),
(15, 205, 2, 'true', 'standard-5'),
(16, 206, 2, 'true', 'lux-1'),
(17, 207, 2, 'true', 'lux-2'),
(18, 208, 2, 'true', 'business-1'),
(19, 209, 2, 'true', 'business-2'),
(20, 210, 2, 'true', 'business-3'),
(21, 301, 3, 'false', 'standard-1'),
(22, 302, 3, 'false', 'standard-2'),
(23, 303, 3, 'false', 'standard-3'),
(24, 304, 3, 'false', 'standard-4'),
(25, 305, 3, 'false', 'standard-5'),
(26, 306, 3, 'false', 'lux-1'),
(27, 307, 3, 'false', 'lux-2'),
(28, 308, 3, 'false', 'business-1'),
(29, 309, 3, 'false', 'business-2'),
(30, 310, 3, 'false', 'business-3'),
(31, 401, 4, 'true', 'standard-1'),
(32, 402, 4, 'true', 'standard-2'),
(33, 403, 4, 'true', 'standard-3'),
(34, 404, 4, 'true', 'standard-4'),
(35, 405, 4, 'true', 'standard-5'),
(36, 406, 4, 'true', 'lux-1'),
(37, 407, 4, 'true', 'lux-2'),
(38, 408, 4, 'true', 'business-1'),
(39, 409, 4, 'true', 'business-2'),
(40, 410, 4, 'true', 'business-3'),
(41, 501, 5, 'false', 'standard-1'),
(42, 502, 5, 'false', 'standard-2'),
(43, 503, 5, 'false', 'standard-3'),
(44, 504, 5, 'false', 'standard-4'),
(45, 505, 5, 'false', 'standard-5'),
(46, 506, 5, 'false', 'lux-1'),
(47, 507, 5, 'false', 'lux-2'),
(48, 508, 5, 'false', 'business-1'),
(49, 509, 5, 'false', 'business-2'),
(50, 510, 5, 'false', 'business-3'),
(51, 601, 6, 'true', 'standard-1'),
(52, 602, 6, 'true', 'standard-2'),
(53, 603, 6, 'true', 'standard-3'),
(54, 604, 6, 'true', 'standard-4'),
(55, 605, 6, 'true', 'standard-5'),
(56, 606, 6, 'true', 'lux-1'),
(57, 607, 6, 'true', 'lux-2'),
(58, 608, 6, 'true', 'business-1'),
(59, 609, 6, 'true', 'business-2'),
(60, 610, 6, 'true', 'business-3'),
(61, 701, 7, 'false', 'standard-1'),
(62, 702, 7, 'false', 'standard-2'),
(63, 703, 7, 'false', 'standard-3'),
(64, 704, 7, 'false', 'standard-4'),
(65, 705, 7, 'false', 'standard-5'),
(66, 706, 7, 'false', 'lux-1'),
(67, 707, 7, 'false', 'lux-2'),
(68, 708, 7, 'false', 'business-1'),
(69, 709, 7, 'false', 'business-2'),
(70, 710, 7, 'false', 'business-3'),
(71, 801, 8, 'false', 'standard-1'),
(72, 802, 8, 'false', 'standard-2'),
(73, 803, 8, 'false', 'standard-3'),
(74, 804, 8, 'false', 'standard-4'),
(75, 805, 8, 'false', 'standard-5'),
(76, 806, 8, 'false', 'lux-1'),
(77, 807, 8, 'false', 'lux-2'),
(78, 808, 8, 'false', 'business-1'),
(79, 809, 8, 'false', 'business-2'),
(80, 810, 8, 'false', 'business-3'),
(81, 901, 9, 'true', 'standard-1'),
(82, 902, 9, 'true', 'standard-2'),
(83, 903, 9, 'true', 'standard-3'),
(84, 904, 9, 'true', 'standard-4'),
(85, 905, 9, 'true', 'standard-5'),
(86, 906, 9, 'true', 'lux-1'),
(87, 907, 9, 'true', 'lux-2'),
(88, 908, 9, 'true', 'business-1'),
(89, 909, 9, 'true', 'business-2'),
(90, 910, 9, 'true', 'business-3'),
(91, 1001, 10, 'false', 'standard-1'),
(92, 1002, 10, 'false', 'standard-2'),
(93, 1003, 10, 'false', 'standard-3'),
(94, 1004, 10, 'false', 'standard-4'),
(95, 1005, 10, 'false', 'standard-5'),
(96, 1006, 10, 'false', 'lux-1'),
(97, 1007, 10, 'false', 'lux-2'),
(98, 1008, 10, 'false', 'business-1'),
(99, 1009, 10, 'false', 'business-2'),
(100, 1010, 10, 'false', 'business-3'),
(101, 1101, 11, 'false', 'standard-1'),
(102, 1102, 11, 'false', 'standard-2'),
(103, 1103, 11, 'false', 'standard-3'),
(104, 1104, 11, 'false', 'standard-4'),
(105, 1105, 11, 'false', 'standard-5'),
(106, 1106, 11, 'false', 'lux-1'),
(107, 1107, 11, 'false', 'lux-2'),
(108, 1108, 11, 'false', 'business-1'),
(109, 1109, 11, 'false', 'business-2'),
(110, 1110, 11, 'false', 'business-3'),
(111, 1201, 12, 'false', 'standard-1'),
(112, 1202, 12, 'false', 'standard-2'),
(113, 1203, 12, 'false', 'standard-3'),
(114, 1204, 12, 'false', 'standard-4'),
(115, 1205, 12, 'false', 'standard-5'),
(116, 1206, 12, 'false', 'lux-1'),
(117, 1207, 12, 'false', 'lux-2'),
(118, 1208, 12, 'false', 'business-1'),
(119, 1209, 12, 'false', 'business-2'),
(120, 1210, 12, 'false', 'business-3'),
(121, 1301, 13, 'true', 'standard-1'),
(122, 1302, 13, 'true', 'standard-2'),
(123, 1303, 13, 'true', 'standard-3'),
(124, 1304, 13, 'true', 'standard-4'),
(125, 1305, 13, 'true', 'standard-5'),
(126, 1306, 13, 'true', 'lux-1'),
(127, 1307, 13, 'true', 'lux-2'),
(128, 1308, 13, 'true', 'business-1'),
(129, 1309, 13, 'true', 'business-2'),
(130, 1310, 13, 'true', 'business-3'),
(131, 1401, 14, 'false', 'standard-1'),
(132, 1402, 14, 'false', 'standard-2'),
(133, 1403, 14, 'false', 'standard-3'),
(134, 1404, 14, 'false', 'standard-4'),
(135, 1405, 14, 'false', 'standard-5'),
(136, 1406, 14, 'false', 'lux-1'),
(137, 1407, 14, 'false', 'lux-2'),
(138, 1408, 14, 'false', 'business-1'),
(139, 1409, 14, 'false', 'business-2'),
(140, 1410, 14, 'false', 'business-3'),
(141, 1501, 15, 'false', 'standard-1'),
(142, 1502, 15, 'false', 'standard-2'),
(143, 1503, 15, 'false', 'standard-3'),
(144, 1504, 15, 'false', 'standard-4'),
(145, 1505, 15, 'false', 'standard-5'),
(146, 1506, 15, 'false', 'lux-1'),
(147, 1507, 15, 'false', 'lux-2'),
(148, 1508, 15, 'false', 'business-1'),
(149, 1509, 15, 'false', 'business-2'),
(150, 1510, 15, 'false', 'business-3'),
(151, 1601, 16, 'true', 'standard-1'),
(152, 1602, 16, 'true', 'standard-2'),
(153, 1603, 16, 'true', 'standard-3'),
(154, 1604, 16, 'true', 'standard-4'),
(155, 1605, 16, 'true', 'standard-5'),
(156, 1606, 16, 'true', 'lux-1'),
(157, 1607, 16, 'true', 'lux-2'),
(158, 1608, 16, 'true', 'business-1'),
(159, 1609, 16, 'true', 'business-2'),
(160, 1610, 16, 'true', 'business-3'),
(161, 1701, 17, 'false', 'standard-1'),
(162, 1702, 17, 'false', 'standard-2'),
(163, 1703, 17, 'false', 'standard-3'),
(164, 1704, 17, 'false', 'standard-4'),
(165, 1705, 17, 'false', 'standard-5'),
(166, 1706, 17, 'false', 'lux-1'),
(167, 1707, 17, 'false', 'lux-2'),
(168, 1708, 17, 'false', 'business-1'),
(169, 1709, 17, 'false', 'business-2'),
(170, 1710, 17, 'false', 'business-3'),
(171, 1801, 18, 'false', 'standard-1'),
(172, 1802, 18, 'false', 'standard-2'),
(173, 1803, 18, 'false', 'standard-3'),
(174, 1804, 18, 'false', 'standard-4'),
(175, 1805, 18, 'false', 'standard-5'),
(176, 1806, 18, 'false', 'lux-1'),
(177, 1807, 18, 'false', 'lux-2'),
(178, 1808, 18, 'false', 'business-1'),
(179, 1809, 18, 'false', 'business-2'),
(180, 1810, 18, 'false', 'business-3'),
(181, 1901, 19, 'false', 'standard-1'),
(182, 1902, 19, 'false', 'standard-2'),
(183, 1903, 19, 'false', 'standard-3'),
(184, 1904, 19, 'false', 'standard-4'),
(185, 1905, 19, 'false', 'standard-5'),
(186, 1906, 19, 'false', 'lux-1'),
(187, 1907, 19, 'false', 'lux-2'),
(188, 1908, 19, 'false', 'business-1'),
(189, 1909, 19, 'false', 'business-2'),
(190, 1910, 19, 'false', 'business-3'),
(191, 2001, 20, 'false', 'standard-1'),
(192, 2002, 20, 'false', 'standard-2'),
(193, 2003, 20, 'false', 'standard-3'),
(194, 2004, 20, 'false', 'standard-4'),
(195, 2005, 20, 'false', 'standard-5'),
(196, 2006, 20, 'false', 'lux-1'),
(197, 2007, 20, 'false', 'lux-2'),
(198, 2008, 20, 'false', 'business-1'),
(199, 2009, 20, 'false', 'business-2'),
(200, 2010, 20, 'false', 'business-3'),
(201, 2101, 21, 'false', 'standard-1'),
(202, 2102, 21, 'false', 'standard-2'),
(203, 2103, 21, 'false', 'standard-3'),
(204, 2104, 21, 'false', 'standard-4'),
(205, 2105, 21, 'false', 'standard-5'),
(206, 2106, 21, 'false', 'lux-1'),
(207, 2107, 21, 'false', 'lux-2'),
(208, 2108, 21, 'false', 'business-1'),
(209, 2109, 21, 'false', 'business-2'),
(210, 2110, 21, 'false', 'business-3'),
(211, 2201, 22, 'false', 'standard-1'),
(212, 2202, 22, 'false', 'standard-2'),
(213, 2203, 22, 'false', 'standard-3'),
(214, 2204, 22, 'false', 'standard-4'),
(215, 2205, 22, 'false', 'standard-5'),
(216, 2206, 22, 'false', 'lux-1'),
(217, 2207, 22, 'false', 'lux-2'),
(218, 2208, 22, 'false', 'business-1'),
(219, 2209, 22, 'false', 'business-2'),
(220, 2210, 22, 'false', 'business-3'),
(221, 2301, 23, 'false', 'standard-1'),
(222, 2302, 23, 'false', 'standard-2'),
(223, 2303, 23, 'false', 'standard-3'),
(224, 2304, 23, 'false', 'standard-4'),
(225, 2305, 23, 'false', 'standard-5'),
(226, 2306, 23, 'false', 'lux-1'),
(227, 2307, 23, 'false', 'lux-2'),
(228, 2308, 23, 'false', 'business-1'),
(229, 2309, 23, 'false', 'business-2'),
(230, 2310, 23, 'false', 'business-3'),
(231, 2401, 24, 'true', 'standard-1'),
(232, 2402, 24, 'true', 'standard-2'),
(233, 2403, 24, 'true', 'standard-3'),
(234, 2404, 24, 'true', 'standard-4'),
(235, 2405, 24, 'true', 'standard-5'),
(236, 2406, 24, 'true', 'lux-1'),
(237, 2407, 24, 'true', 'lux-2'),
(238, 2408, 24, 'true', 'business-1'),
(239, 2409, 24, 'true', 'business-2'),
(240, 2410, 24, 'true', 'business-3'),
(241, 2501, 25, 'false', 'standard-1'),
(242, 2502, 25, 'false', 'standard-2'),
(243, 2503, 25, 'false', 'standard-3'),
(244, 2504, 25, 'false', 'standard-4'),
(245, 2505, 25, 'false', 'standard-5'),
(246, 2506, 25, 'false', 'lux-1'),
(247, 2507, 25, 'false', 'lux-2'),
(248, 2508, 25, 'false', 'business-1'),
(249, 2509, 25, 'false', 'business-2'),
(250, 2510, 25, 'false', 'business-3');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
