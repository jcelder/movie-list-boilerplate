CREATE DATABASE moviedatabase;

USE moviedatabase;

CREATE TABLE movielist (
  id INT PRIMARY KEY AUTO_INCREMENT,
  Title TEXT,
  Runtime TEXT,
  Metascore DECIMAL,
  imdbRating DECIMAL,
  Watched BOOLEAN
);