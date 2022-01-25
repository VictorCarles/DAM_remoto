/*EJEMPLO USOS ALTER TABLE change, modify, rename, add*/

ALTER TABLE emp ADD c_id INTEGER;
ALTER TABLE emp MODIFY mgr NUMERIC;
ALTER TABLE emp CHANGE mgr mgr1 NUMERIC; /* El tipo NUMERIC, se verá como DECIMAL(10,0)*/
ALTER TABLE emp RENAME AS empleaditos;
ALTER TABLE empleaditos RENAME AS emp;

/*PARA CAMBIAR LA PROPIEDAD DE UNA COLUMNA, USAMOS MODIFY*/
ALTER TABLE salgrade MODIFY grade DECIMAL(10,0) NOT NULL;

ALTER TABLE salgrade ADD CONSTRAINT pk_grade PRIMARY KEY (grade); /*Convertimos el camp grade en primary Key*/

/*VAMOS A PONER UNA FOREIGN KEY QUE VAYA DESDE sal HASTA grade*/
ALTER TABLE emp ADD CONSTRAINT fk_sal_grade FOREIGN KEY(sal) REFERENCES salgrade(grade);

ALTER TABLE emp ADD THRIFPLAN NUMERIC(7,2), ADD leancode CHAR(1);

/*CREATE INDEX emp_index ON emp(ename)*/
ALTER TABLE emp ADD INDEX emp_index(ename);

/*uso de DROP TABLE*/
CREATE TABLE T11(
pk NUMERIC PRIMARY KEY,
FK NUMERIC,
C1 NUMERIC,
C2 NUMERIC);

ALTER TABLE T11 DROP PRIMARY KEY;
ALTER TABLE T11 DROP c1;
ALTER TABLE T11 DROP c2;
ALTER TABLE emp DROP INDEX emp_index;
DROP TABLE T11;


/* INSERT */
DESC dept; /*DESC: DESCRIPTION, te muestra los campos e la tablas*/
INSERT INTO dept VALUES (51, 'PRODUCCION', 'SAN FRANCISCO');

DESC salgrade; 
INSERT INTO salgrade VALUES (30000, 20000, 35000),(20000,10000,25000);

DESC emp;
ALTER TABLE emp DROP CONSTRAINT fk_sal_grade;
INSERT INTO emp (empno, ename, job,sal,comn,deptno) VALUES
(7890,'JINKS','Clerk',30000,NULL,51);

INSERT INTO bonus SELECT ename,job,sal,comn FROM emp WHERE deptno=51;


/*DELETE */
DELETE FROM bonus WHERE job='Clerk';
DELETE FROM bonus;


/* UPDATE */
UPDATE emp SET job='Assistant' WHERE job='Clerk';
INSERT INTO emp (empno,ename,job,sal,comn,deptno) VALUES (999,'jones','Trainner',47000,66,51);
INSERT INTO dept VALUES (20,'CALIDAD','BOSTON');
UPDATE emp SET deptno='20' WHERE empno=999;
UPDATE emp SET job='Manager', sal=sal*2, ename='Jhonny' WHERE ename='jones';










