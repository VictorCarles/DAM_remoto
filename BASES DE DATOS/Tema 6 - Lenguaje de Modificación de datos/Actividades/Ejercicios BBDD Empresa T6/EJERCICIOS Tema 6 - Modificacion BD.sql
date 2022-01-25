/* */

-- EJERCICIO 1.
USE empresa;
DESC repventas;
INSERT INTO repventas (Numempl,Nombre,Edad,Oficinarep,Contrato,Director,Ventas) 
VALUES (12,'HENRY JACOBSEN', 36,13,'1990-07-25',108,0);


-- EJERCICIO 2.
DESC clientes;
INSERT INTO clientes VALUES (2127,'INTERCORP',12,15000);

DESC pedidos;
INSERT INTO pedidos VALUES (113070,'2022-01-25',2127,108,'ACI',41004,20,2340);


-- EJERCICIO 3.
CREATE TABLE anpedidos (numped INT, fechaped DATE, importe DECIMAL(10,0));
INSERT INTO anpedidos SELECT Numpedido,Fechapedido,Importe FROM pedidos WHERE Fechapedido<'1980-1-1';


-- EJERCICIO 4.
DELETE FROM repventas WHERE Numempl=12;
DELETE FROM pedidos WHERE Clie=2127;
DELETE FROM pedidos WHERE Fechapedido='1989-11-15';


-- EJERCICIO 5.
UPDATE clientes SET Repclie=109, Limitecredito=60000 WHERE Numclie=2127;
UPDATE repventas SET Cuota=10000 WHERE Cuota=NULL;


-- EJERCICIO 6.
USE educa;
DESC curso;
UPDATE curso SET Cred = 3 AND Ctarifa= Ctarifa + Ctarifa*0.10 AND Cdescp='EL LENGUAJE DB2' WHERE Cno LIKE 'C3%';

