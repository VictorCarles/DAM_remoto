## Uso de where. Cursos con nombre >= RACIONALISMO
SELECT * FROM curso WHERE cnombre > "Racionalismo";

## Uso de where. oficinas con ventas > objetivo
SELECT * FROM oficinas WHERE ventas>objetivo;

## Uso de where. Nombre, ventas y cuota del representante 105
SELECT Nombre, ventas, cuota, FROM repventas WHERE numempl=105;

## Uso de order by. Oficinas ordenadas por region y luego por ciudad
SELECT ciudad, region, ventas FROM oficinas ORDER BY region,ciudad DESC;

## Consultas OFICINAS, ciudad, region y cuanto queda para llegar al objetivo.
SELECT ciudad, region, objetivo-ventas AS restante FROM oficinas ORDER BY 3;
-- Si pongo ORDER BY 1, te ordenaria en base al prumero de los parametros (ciudad), y sería
-- en orden alfabetico. ORDER BY 3, te lo ordenara por el tercer parametro, al ser número 
-- simplemente te lo ordenara de menor a mayor.

## Valor de cada producto en almacen actualmente
SELECT descripcion,precio*existencias AS VALOR_ALMACEN FROM productos;
-- Siempre que hacemos una operación, tenemos que poner un alias (AS alias)

## Simulacion subida del 5% la cuota de mia representantes
SELECT nombre,cuota, cuota*1.05 AS NUEVA_CUOTA FROM repventas;

## Empleados contratados durante 1988
SELECT nombre FROM repventas WHERE contrato > '1988-01-01' AND contrato<'1998-31-12';
SELECT nombre FROM repventas WHERE contrato BETWEEN '1988-01-01' AND '1988-31-12';

## CURSOS con tarefa 50, 100, o 200
SELECT cnombre,cdesp FROM curso WHERE ctarifa IN (50,100,200);
## CURSOS con descripcion que comienzan con 'para'
SELECT cnombre,cdesp FROM curso WHERE cdesp LIKE "Para %";
SELECT cnombre,cdesp FROM curso WHERE cdesp NOT LIKE "Para %";

## Querer unir dos consutas de SELECTS en una
SELECT esueldo SUELDOS FROM personal UNION SELECT fsueldo FROM claustro;

## En caso de querer unir varios SELECTS sin poner UNION entre cada uno
SELECT esueldo SUELDOS FROM personal UNION ALL SELECT fsueldo FROM claustro;

## Los productos que valgan mas de 2000 euros, y los productos que valgan lo que valgan, se han comprado en pedidos de mas de 3000€
SELECT idfab, idproducto FROM productos WHERE precio >2000 UNION
SELECT DISTINCT fab, producto FROM pedidos WHERE IMPORTE >3000;