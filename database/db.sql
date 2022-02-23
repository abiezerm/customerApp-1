CREATE DATABASE companyCRUD;

USE companyCRUD;

CREATE TABLE customer (
id int(11) NOT NULL auto_increment PRIMARY KEY,
name varchar(50) NOT NULL,
direction varchar(100) NOT NULL
);

SHOW TABLES;


DESCRIBE customer;