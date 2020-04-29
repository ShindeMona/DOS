DROP DATABASE test;
CREATE DATABASE test;
USE test;
CREATE TABLE students(id INT PRIMARY KEY,Name VARCHAR(30),Age INT,Department VARCHAR(30),Subject VARCHAR(30));

INSERT INTO students VALUES(1,'monali',22,'Comp.Sci','ADS,PDM,DOS,FM2,PROJ');
INSERT INTO students VALUES(2,'Komal',22,'Comp.Sci','ADS,OR,DOS,FM2,PROJ');
INSERT INTO students VALUES(3,'Vishal',22,'Comp.Sci','ML,PDM,DOS,FM2,PROJ');

SELECT * FROM students;
