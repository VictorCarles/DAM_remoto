CREATE DATABASE P1;
USE P1;

CREATE TABLE IF NOT EXISTS empleo(
nombre CHAR(25) NOT NULL,
edad NUMERIC,
alojamiento CHAR(15),
PRIMARY KEY (edad,alojamiento)
);

CREATE TABLE IF NOT EXISTS problema(
ciudad CHAR(15) NOT NULL,
fechamuestra DATETIME NOT NULL,
mediodia NUMERIC(3,1),
medianoche NUMERIC,
PRIMARY KEY(medianoche,ciudad),
CONSTRAINT fk_externa FOREIGN KEY(medianoche,ciudad) REFERENCES empleo(edad,alojamiento) );

