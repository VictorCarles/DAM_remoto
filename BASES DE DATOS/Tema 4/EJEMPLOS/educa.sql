CREATE DATABASE educa CHARACTER SET UTF8;

-- SHOW CHARACTER SET;

-- SET DEFAULT_STORAGE_ENGINE=INNODB;

USE educa;

CREATE TABLE departamento
(Dept CHAR(4) NOT NULL,
Dedif CHAR(2) NOT NULL,
Ddespacho INTEGER NOT NULL,
Dchfno CHAR(3),
PRIMARY KEY(Dept));

CREATE TABLE curso
(Cno CHAR(3) NOT NULL,
Cnombre CHAR(22) NOT NULL,
Cdescp CHAR(25) NOT NULL,
Cred INTEGER NOT NULL,
Ctarifa NUMERIC NOT NULL,
Cdept CHAR(4) NOT NULL,
PRIMARY KEY (Cno),
FOREIGN KEY (Cdept) REFERENCES departamento(Dept));

INSERT INTO departamento VALUES ('theo','hu',200,'10');
INSERT INTO curso 
VALUES ('TEE','HEDONISMO','PARA SANOS',3,0,'THEO');

CREATE TABLE claustro
(Fno CHAR(3) NOT NULL,
Fnombre CHAR(15) NOT NULL,
Fdomi CHAR(20) NOT NULL,
Ffcanti DATE NOT NULL,
Fnumdep INT,
Fsueldo DECIMAL NOT NULL,
Fdept CHAR(4) NOT NULL,
PRIMARY KEY (Fno),
FOREIGN KEY (Fdept) REFERENCES departamento(Dept));

DROP TABLE claustro;
DROP DATABASE educa;

