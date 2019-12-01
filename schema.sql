

DROP DATABASE IF EXISTS `schema`;
CREATE DATABASE `schema`; 
USE `schema`;

SET NAMES utf8 ;
SET character_set_client = utf8mb4 ;




DROP TABLE IF EXISTS issues;
CREATE TABLE issues(
`id` int(11) NOT NULL auto_increment,
  `title` char(35) NOT NULL default '',
  `description` char(50) NOT NULL default '',
  `type` enum('Bug','Proposal','Task') NOT NULL default 'Bug',
  `priority` enum('Minor', 'Major', 'Critical')  NOT NULL default 'Minor',
  `status` enum('Open','Closed', 'In Progress') NOT NULL default 'Open',
  `assigned_to` char(35) NOT NULL default '',
  `created_by` char(35) NOT NULL default '',
  `created` datetime NOT NULL default CURRENT_TIMESTAMP,
  `updated` datetime NOT NULL default CURRENT_TIMESTAMP,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4080 DEFAULT CHARSET=utf8mb4;





DROP TABLE IF EXISTS users;
CREATE TABLE users(
`id` int(11) NOT NULL auto_increment,
  `first_name` char(35) NOT NULL default '',
  `last_name` char(35) NOT NULL default '',
  `password` nvarchar(20) NOT NULL default '',
  `email` char(35) NOT NULL default '',
  `date_joined` int(11) NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4080 DEFAULT CHARSET=utf8mb4;

INSERT INTO users(email, password) VALUES ('admin@bugme.com', 'password123');






