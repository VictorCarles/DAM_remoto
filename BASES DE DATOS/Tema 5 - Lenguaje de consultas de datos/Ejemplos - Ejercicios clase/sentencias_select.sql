## Datos de todos los clientes
SELECT * FROM clientes;

## Datos de todos los clientes colcados a fichero
SELECT * INTO OUTFILE 'C:\\Users\\vicadi\\Desktop\\DAM\\BASES DE DATOS\\Tema 5 - Lenguaje de consultas de datos\\victor\\CLIENTES.TXT' FROM clientes;


## Algunos campos de los clientes
SELECT empresa, limitecredito FROM clientes;

## Uso de alias
SELECT empresa AS Compañía,  limitecredito AS Credito_especial FROM clientes;
