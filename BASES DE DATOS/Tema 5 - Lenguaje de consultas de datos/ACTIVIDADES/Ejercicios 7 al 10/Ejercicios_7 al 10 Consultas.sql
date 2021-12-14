## Ejercicio 7
-- 
SELECT * FROM curso WHERE cnombre LIKE "INTROD%";

## Ejercicio 8
SELECT * FROM curso WHERE cnombre LIKE "%SC%";

## Ejercicio 9
SELECT * FROM curso WHERE cnombre NOT LIKE '_A%' AND cnombre NOT LIKE '_E%'
AND cnombre NOT LIKE '_I%' AND cnombre NOT LIKE '_O%' AND cnombre NOT LIKE '_U%';

## Ejercicio 10
SELECT cnombre AS CURSOS, ctarifa+25 AS TARIFA_ACTUAL FROM curso WHERE cdept LIKE 'CIS';
SELECT cnombre AS CURSOS, ctarifa+25 AS TARIFA_ACTUAL FROM curso WHERE cdept LIKE 'CIS' ORDER BY TARIFA_ACTUAL DESC;



