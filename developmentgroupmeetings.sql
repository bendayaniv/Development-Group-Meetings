-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 12, 2019 at 12:01 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `developmentgroupmeetings`
--
CREATE DATABASE IF NOT EXISTS `developmentgroupmeetings` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `developmentgroupmeetings`;

-- --------------------------------------------------------

--
-- Table structure for table `developmentgroup`
--

CREATE TABLE `developmentgroup` (
  `groupID` int(11) NOT NULL,
  `groupName` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `developmentgroup`
--

INSERT INTO `developmentgroup` (`groupID`, `groupName`) VALUES
(1, 'UI'),
(2, 'React'),
(3, 'Mobile Development');

-- --------------------------------------------------------

--
-- Table structure for table `groupsmeetings`
--

CREATE TABLE `groupsmeetings` (
  `meetingID` int(11) NOT NULL,
  `groupID` int(11) NOT NULL,
  `startMeeting` varchar(100) NOT NULL,
  `endMeeting` varchar(100) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `room` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `groupsmeetings`
--

INSERT INTO `groupsmeetings` (`meetingID`, `groupID`, `startMeeting`, `endMeeting`, `description`, `room`) VALUES
(4, 3, '0000-00-00', 'asd', 'asd', 'asd'),
(5, 1, '2019-09-21', '2019-09-27T13:01', 'asd', ''),
(6, 2, '2019-09-21', '2019-09-27T13:01', 'asd', ''),
(7, 1, '2019-09-05', '2019-09-21T02:02', 'asd', 'asd'),
(8, 3, '0000-00-00', '', '', ''),
(9, 1, '2019-09-13T13:10', '2019-09-21T04:04', 'A', 'A'),
(10, 1, '2019-09-07T13:01', '2019-09-13T02:00', 'asd', 'asd'),
(11, 2, '', '', 'asd', 'asd'),
(12, 3, 'sd', 'fsdf', 'sdfs', 'df'),
(13, 2, '', '', 'a', 'a');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `developmentgroup`
--
ALTER TABLE `developmentgroup`
  ADD PRIMARY KEY (`groupID`);

--
-- Indexes for table `groupsmeetings`
--
ALTER TABLE `groupsmeetings`
  ADD PRIMARY KEY (`meetingID`),
  ADD KEY `groupID` (`groupID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `developmentgroup`
--
ALTER TABLE `developmentgroup`
  MODIFY `groupID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `groupsmeetings`
--
ALTER TABLE `groupsmeetings`
  MODIFY `meetingID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `groupsmeetings`
--
ALTER TABLE `groupsmeetings`
  ADD CONSTRAINT `groupsmeetings_ibfk_1` FOREIGN KEY (`groupID`) REFERENCES `developmentgroup` (`groupID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
