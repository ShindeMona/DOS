## PART1 : DOCKER FILE<br/>

### Introduction: <br/>
Performing insert ,delete ,update ,display operation on mysql database<br />
through HTML.<br />
-Requires installation docker,mysql,node,npm<br />
my code is working on terminal when but not properly working on docker because connection between is not happen with database. <br />
-Accept data from HTML from GETdata.html <br />
GETdata.html -> index.js -> test (mysql database)<br />

## HOW TO BULID AND RUN<br/>
docker build -t myfinalimage .  <br/>
docker run -p 8080:8080 myfinalimage   <br />
//myfinalimage is name of image
