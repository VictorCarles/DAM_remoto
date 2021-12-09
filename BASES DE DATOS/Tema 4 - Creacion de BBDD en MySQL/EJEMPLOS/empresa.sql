CREATE DATABASE empresa CHARACTER SET UTF8;

USE empresa;

CREATE TABLE clientes
(Numclie INTEGER NOT NULL,
Empresa CHAR (20),
Repclie INT,
limitecredito NUMERIC, 
PRIMARY KEY (Numclie));

CREATE TABLE repventas (Numempl INTEGER NOT NULL, 
Nombre CHAR(15) NOT NULL,
Edad INTEGER,
oficinarep INTEGER,
titulo CHAR(10),
contrato DATE NOT NULL,
Director INTEGER,
cuota NUMERIC,
ventas NUMERIC NOT NULL, 
PRIMARY KEY (Numempl),
FOREIGN KEY (Director) REFERENCES repventas(Numempl)
ON DELETE SET NULL);

ALTER TABLE clientes ADD CONSTRAINT c1 FOREIGN KEY
(Repclie) REFERENCES repventas (Numempl) ON DELETE SET NULL;

CREATE TABLE oficinas 
(oficina INTEGER NOT NULL,
Ciudad CHAR(15) NOT NULL,
Region CHAR(10) NOT NULL,
Dir INTEGER,
Objetivo NUMERIC,
Ventas NUMERIC NOT NULL,
PRIMARY KEY (oficina),
FOREIGN KEY (Dir) REFERENCES repventas (Numempl)
ON DELETE SET NULL);

ALTER TABLE repventas ADD CONSTRAINT fk_oficina FOREIGN KEY 
(oficinarep) REFERENCES oficinas (oficina) ON DELETE SET NULL;





