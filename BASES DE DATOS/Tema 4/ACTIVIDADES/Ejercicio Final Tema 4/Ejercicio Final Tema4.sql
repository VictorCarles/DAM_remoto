CREATE DATABASE Departamentos CHARACTER SET UTF8;
SET storage_engine=INNODB;
USE Departamentos;

CREATE TABLE Centros
(NUM_CENTRO INT(3) NOT NULL,
nombre VARCHAR(50) NOT NULL,
direccion VARCHAR(40) NOT NULL,
localidad VARCHAR(40) NOT NULL,
provincia VARCHAR(30) NOT NULL,
PRIMARY KEY(NUM_CENTRO));

CREATE TABLE Departamentos
(NUM_DPTO INT(3) NOT NULL,
nombre VARCHAR(50) NOT NULL,
presupuesto DECIMAL(10,2) NOT NULL,
NUM_CENTRO INT(3) NOT NULL,
PRIMARY KEY(NUM_DPTO),
FOREIGN KEY(NUM_CENTRO) REFERENCES Centros(NUM_CENTRO));

CREATE TABLE Empleados
(NUM_EMP INT(3) NOT NULL,
nombre VARCHAR(50) NOT NULL,
fecha_nacimiento DATE NOT NULL,
fecha_ingreso DATE NOT NULL,
telf_emp INT(8) NOT NULL,
salario DECIMAL(10,2) NOT NULL,
comision DECIMAL(10,2) NOT NULL,
num_hijos INT(1) NOT NULL,
tipo ENUM('fijo','eventual')NOT NULL,
NUM_DPTO INT(3) NOT NULL,
PRIMARY KEY(NUM_EMP),
FOREIGN KEY(NUM_DPTO) REFERENCES Departamentos(NUM_DPTO));
