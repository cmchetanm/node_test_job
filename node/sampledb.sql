-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 02, 2018 at 09:28 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sampledb`
--

-- --------------------------------------------------------

--
-- Table structure for table `Locks`
--

CREATE TABLE `Locks` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `macId` char(36) CHARACTER SET latin1 COLLATE latin1_bin DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Locks`
--

INSERT INTO `Locks` (`id`, `userId`, `macId`, `name`, `createdAt`, `updatedAt`) VALUES
(2, 11, '5e683bc0-ae31-11e8-8fe6-a32192a8779e', 'lock1', '2018-09-01 21:52:49', '2018-09-01 21:52:49'),
(3, 6, '5a9bfea0-ae8b-11e8-bf9e-dbdad2f56639', 'lock2', '2018-09-02 08:36:57', '2018-09-02 19:10:46'),
(4, 6, 'ebbe6210-ae8b-11e8-bf9e-dbdad2f56639', 'lock3', '2018-09-02 08:41:01', '2018-09-02 08:41:01'),
(5, 6, '73cd02b0-ae8c-11e8-bf9e-dbdad2f56639', 'lock4', '2018-09-02 08:44:49', '2018-09-02 08:44:49'),
(6, 6, '74d814a0-ae8d-11e8-bf9e-dbdad2f56639', 'lock5', '2018-09-02 08:52:00', '2018-09-02 08:52:00');

-- --------------------------------------------------------

--
-- Table structure for table `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20180901120145-create-user.js'),
('20180901121657-create-lock.js');

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `birthdate` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `name`, `username`, `password`, `birthdate`, `createdAt`, `updatedAt`) VALUES
(6, 'Anil', 'anil123', '$2a$10$1mIK/iXyJQWaeuTzhjZfhO0wDl4G8JTMKBJ2.JnDqCfSvLLWYl7ty', '1990-08-07 18:30:00', '2018-09-01 20:46:34', '2018-09-02 19:11:23'),
(11, 'Anil kumar', 'anil1234', '$2a$10$Jg/o1HwjCTOS93HPuWNWB.hZDlvUxF8Io8qBNnC/V.yS/y0DYCw9e', '1990-08-07 18:30:00', '2018-09-01 21:11:05', '2018-09-01 21:13:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Locks`
--
ALTER TABLE `Locks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Locks`
--
ALTER TABLE `Locks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `Locks`
--
ALTER TABLE `Locks`
  ADD CONSTRAINT `Locks_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
