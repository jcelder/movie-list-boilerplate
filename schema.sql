CREATE DATABASE moviedatabase;

USE moviedatabase;

CREATE TABLE movielist (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title TEXT,
  year INT,
  runtime TEXT,
  metascore DECIMAL,
  imdbRating DECIMAL
);