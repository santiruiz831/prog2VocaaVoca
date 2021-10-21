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
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (user_id) REFERENCES users (id)    
);

CREATE TABLE comments(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
user_id INT UNSIGNED,
post_id INT UNSIGNED,
content TEXT,
created_at TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (user_id) REFERENCES users (id),
FOREIGN KEY (post_id) REFERENCES posts (id)
);

INSERT INTO users VALUES 
(default, "Santiago", "Ruiz", "sruiz@udesa.edu.ar", "hola123", "/images/Santi.png", "2001-08-13", "1126112001"),
(default, "Micaela", "Salas", "msalas@udesa.edu.ar", "chau1234", "/images/Mica.png",, "2001-09-15", "1126112001"),
(default, "Pehuen", "Romani", "promani@digitalhouse.edu.ar", "p1230", "/images/pehuen.png", "1985-09-12", "1126112001"),
(default, "Maca", "Amijo", "maca@digitalhouse.edu.ar", "maca0000", "/images/maca.png", "1995-09-12", "1126112001"),
(default, "Everaldo", "Guevara", "everaldo@digitalhouse.edu.ar", "eve1111", "/images/everaldo.png", "1984-08-11", "1126112001");

INSERT INTO posts VALUES
(default, 1 , "Los gatos son mejores que los perros", "/images/img1.jpeg", "2001-08-13", "2001-08-13" ),
(default, 2 , "Tenemos mucho que aprender de los perritos", "/images/img2.jpeg", "2001-08-13", "2001-08-13" ),
(default, 3 , "Mi perrito es lo mejor que hay", "/images/img3.jpeg", "2001-08-13", "2001-08-13" ),
(default, 4 , "Morfable el golden", "/images/img4.jpeg", "2001-08-13", "2001-08-13" ),
(default, 5 , "La importancia de hacer las cosas por nosotros mismos", "/images/img5.jpeg", "2001-08-13", "2001-08-13" ),
(default, 1 , "Gandi, un adelantado de la época", "/images/img6.jpeg", "2001-08-13", "2001-08-13" ),
(default, 2 , "Gran refelxión", "/images/img7.jpeg", "2001-08-13", "2001-08-13" ),
(default, 3 , "Cerati el mejor músico argentino de la historia", "/images/img8.jpeg", "2001-08-13", "2001-08-13" ),
(default, 4 , "La musica es un camino de ida", "/images/img9.jpeg", "2001-08-13", "2001-08-13" ),
(default, 5 , "No se si la música solucionará mis problemas, pero por lo menos me voy a olvidar de ellos", "/images/img10.jpeg", "2001-08-13", "2001-08-13" );

INSERT INTO comments VALUES
(default, 1, 1, "Que inspirador", "2021-09-15", "2021-09-15"),
(default, 2, 2, "Pobres perritos", "2021-09-15", "2021-09-15" ),
(default, 3, 3, "Aguante Voca a Voca", "2021-09-15", "2021-09-15"),
(default, 4, 4, "Quiero estudiar Neogios Digitales, con quien puedo hablar?", "2021-09-15", "2021-09-15");