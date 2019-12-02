

-- MySQL dump 10.11
--
-- to install this database, from a terminal, type:
-- mysql -u USERNAME -p -h SERVERNAME schema < schema.sql
--
-- Host: localhost    Database: world
-- ------------------------------------------------------
-- Server version   5.0.45-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP DATABASE IF EXISTS `schema`;
CREATE DATABASE `schema`; 
USE `schema`;

SET NAMES utf8 ;
SET character_set_client = utf8mb4 ;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS users;
CREATE TABLE users(
`id` int(11) NOT NULL auto_increment,
  `first_name` char(35) NOT NULL default '',
  `last_name` char(35) NOT NULL default '',
  `password` nvarchar(20) NOT NULL default '',
  `email` VARCHAR(35) NOT NULL default '',
  `date_joined` int(11) NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4080 DEFAULT CHARSET=utf8mb4;

INSERT INTO users(email, password) VALUES ('admin@bugme.com','password123');

DROP TABLE IF EXISTS issues;
CREATE TABLE issues(
`id` int(11) NOT NULL auto_increment,
  `title` char(35) NOT NULL default '',
  `description` char(50) NOT NULL default '',
  `issue_type` enum('Bug','Proposal','Task') NOT NULL default 'Bug',
  `priority` enum('Minor', 'Major', 'Critical')  NOT NULL default 'Minor',
  `status` enum('Open','Closed', 'In Progress') NOT NULL default 'Open',
  `assigned_to` char(35) NOT NULL default '',
  `created_by` char(35) NOT NULL default '',
  `created` datetime NOT NULL default CURRENT_TIMESTAMP,
  `updated` datetime NOT NULL default CURRENT_TIMESTAMP,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4080 DEFAULT CHARSET=utf8mb4;

INSERT INTO issues (id, title, issue_type, status, assigned_to,created ) VALUES 
(100, "XSS Vulberability in Add User Form", 'Bug', 'Open', 'Tom Brady','2019-11-01 14:31:11'),
(23, "Location Service isn't working", 'Bug', 'Open', 'Jan Brady', '2019-10-15 14:31:11' ),
(16, "Setup Logger", 'Proposal', 'Closed', 'Marsha Brady', '2019-08-10 14:31:11' ),
(50, "Create API Documentation", 'Proposal', 'In Progress', 'Mike Brady',' 2019-10-29 14:31:11 '),
(24, "XSS Vulberability in Add User Form", 'Bug', 'Open', 'Tom Brady', '2019-11-01 14:31:11' );










