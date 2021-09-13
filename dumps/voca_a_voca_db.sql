DROP DATABASE IF EXISTS voca_a_voca_db;
CREATE DATABASE voca_a_voca_db;
USE voca_a_voca_db;

CREATE TABLE users(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
name VARCHAR (200),
last_name VARCHAR (200),
mail VARCHAR (200),
password VARCHAR (200),
img VARCHAR(300),
birthday DATE,    
age INT
);

CREATE TABLE posts(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
user_id INT UNSIGNED,
description TEXT,
img VARCHAR(300),
created_at TIMESTAMP,
FOREIGN KEY (user_id) REFERENCES users (id)    
);

CREATE TABLE comments(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
user_id INT UNSIGNED,
post_id INT UNSIGNED,
content TEXT,
created_at TIMESTAMP,
FOREIGN KEY (user_id) REFERENCES users (id),
FOREIGN KEY (post_id) REFERENCES posts (id)
);

INSERT INTO users VALUES 
(default, "Santiago", "Ruiz", "sruiz@udesa.edu.ar", "hola123", "/img/Santi.png", "2001-08-13", "20");


