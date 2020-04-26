create database test;
use test;
CREATE TABLE students (
  ID int(11) NOT NULL,
  Name varchar(255) DEFAULT NULL,
   Age int(11),
   Department varchar(255),
    Subject varchar(255)
  
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


INSERT INTO students VALUES (101,'Monali Shinde',22,'Com.Sci','ADS,PDM,DOS,FM2,PRO');

INSERT INTO students VALUES (102,'Monali Shinde',22,'Com.Sci','ADS,PDM,DOS,FM2,PRO');
INSERT INTO students VALUES (103,'Vihan Shinde',22,'Com.Sci','ADS,OR,DOS,FM2,PRO');
INSERT INTO students VALUES (104,'Navin Shinde',22,'Com.Sci','ADS,OR,DOS,FM2,PRO');
INSERT INTO students VALUES (105,'Komal Shinde',22,'Com.Sci','ADS,ML,DOS,FM2,PRO');
INSERT INTO students VALUES (106,'devraj nimbalkar',22,'Com.Sci','ADS,DML,DOS,FM2,PRO');
INSERT INTO students VALUES (107,'Vidya Nimbalkar',22,'Com.Sci','ADS,PDM,DOS,FM2,PRO');
INSERT INTO students VALUES (108,'Varsha Bhange',22,'Com.Sci','ADS,PDM,DOS,FM2,PRO');
INSERT INTO students VALUES (110,'Monali Thakur',22,'Com.Sci','ADS,PDM,DOS,FM2,PRO');
UNLOCK TABLES;
