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
(default, "Micaela", "Salas", "msalas@udesa.edu.ar", "1234", "/img/Mica,png", "2001-09-15", "20"),
(default, "Pehuen", "Romani", "promani@digitalhouse.edu.ar", "1230", "/img/pehuen.png", "1985-09-12", "36"),
(default, "Maca", "Amijo", "maca@digitalhouse.edu.ar", "0000", "/img/maca.png", "1995-09-12", "26"),
(default, "Everaldo", "Guevara", "everaldo@digitalhouse.edu.ar", "1111", "/img/everaldo.png", "1984-08-11", "37");

INSERT INTO posts VALUES
(default, default , "Los gatos son mejores que los perros", "/images/img1.jpeg", "2001-08-13" ),
(default, default , "Tenemos mucho que aprender de los perritos", "/images/img1.jpeg", "2001-08-13" ),
(default, default , "Mi perrito es lo mejor que hay", "/images/img1.jpeg", "2001-08-13" ),
(default, default , "Morfable el golden", "/images/img1.jpeg", "2001-08-13" ),
(default, default , "La importancia de hacer las cosas por nosotros mismos", "/images/img1.jpeg", "2001-08-13" ),
(default, default , "Gandi, un adelantado de la época", "/images/img1.jpeg", "2001-08-13" ),
(default, default , "Gran refelxión", "/images/img1.jpeg", "2001-08-13" ),
(default, default , "Cerati el mejor músico argentino de la historia", "/images/img1.jpeg", "2001-08-13" ),
(default, default , "La musica es un camino de ida", "/images/img1.jpeg", "2001-08-13" ),
(default, default , "No se si la música solucionará mis problemas, pero por lo menos me voy a olvidar de ellos", "/images/img1.jpeg", "2001-08-13" );

INSERT INTO comments VALUES
(default, default, 1, "Que inspirador", "2021-09-15"),
(default, default, 2, "Pobres perritos", "2021-09-15" ),
(default, default, 3, "Aguante Voca a Voca", "2021-09-15"),
(default, default, 4, "Quiero estudiar Neogios Digitales, con quien puedo hablar?", "2021-09-15");


