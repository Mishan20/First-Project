-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 12, 2023 at 03:55 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `20it0497`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `role` varchar(10) NOT NULL,
  `nic` varchar(20) NOT NULL,
  `password` varchar(25) NOT NULL,
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone` int(15) NOT NULL,
  `studentid` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `role`, `nic`, `password`, `fname`, `lname`, `email`, `phone`, `studentid`) VALUES
(1, 'student', '200006401095', '123456789', 'Ishan', 'Senanayaka', 'Ishan@gmail.com', 766277163, '20IT0497'),
(2, 'student', '200006401098', '123456789', 'Deepthi', 'Wijebahu', 'deepthi@gmail.com', 774752524, '20IT0567'),
(3, 'teacher', '200006401089', '123456789', 'Nimali', 'Wijerathna', 'nimali@gmail.com', 766277543, '20IT0678'),
(4, 'student', '200006401087', '123456789', 'Kamal', 'Senarathna', 'kamal@gmail.com', 774752675, '20IT0965');

-- --------------------------------------------------------

--
-- Table structure for table `result`
--

CREATE TABLE `result` (
  `id` int(11) NOT NULL,
  `index_no` varchar(20) NOT NULL,
  `subject` varchar(30) NOT NULL,
  `result` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `result`
--

INSERT INTO `result` (`id`, `index_no`, `subject`, `result`) VALUES
(1, '20IT0497', 'Web Thechnology', 'A+'),
(2, '20IT0497', 'OOAD', 'A'),
(4, '20IT0497', 'WAD', 'A-'),
(6, '20IT0497', 'OOP', 'C+'),
(7, '20IT0497', 'Software Engeneering', 'A'),
(8, '20IT0497', 'English', 'B+'),
(9, '20IT0567', 'Web Thechnology', 'A'),
(10, '20IT0567', 'OOAD', 'A+'),
(11, '20IT0567', 'WAD', 'A-'),
(12, '20IT0567', 'OOP', 'B'),
(13, '20IT0567', 'Software Engeneering', 'B+'),
(14, '20IT0567', 'English', 'I-FE'),
(15, '20IT0678', 'Web Thechnology', 'A+'),
(16, '20IT0678', 'OOAD', 'A'),
(17, '20IT0678', 'WAD', 'A-'),
(18, '20IT0678', 'OOP', 'A+'),
(19, '20IT0678', 'Software Engeneering', 'A'),
(21, '20IT0678', 'English', 'B+'),
(22, '20IT0965', 'Web Thechnology', 'A+'),
(23, '20IT0965', 'OOAD', 'A'),
(24, '20IT0965', 'WAD', 'A-'),
(25, '20IT0965', 'OOP', 'C+'),
(26, '20IT0965', 'Software Engeneering', 'B'),
(27, '20IT0965', 'English', 'B+');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nic` (`nic`);

--
-- Indexes for table `result`
--
ALTER TABLE `result`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UC_Person` (`index_no`,`subject`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `result`
--
ALTER TABLE `result`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
