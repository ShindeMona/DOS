PART1 : DOCKER FILE<br/>

Introduction:
Performing insert ,delete ,update ,display operation on mysql database<br />
through HTML.<br />
-Requires installation docker,mysql,node<br />
#still Working<br />
my code is working on terminalwhen but not properly working on docker . <br />
-Accept data from HTML from GETdata.html <br />
GETdata.html -> index.js -> test (mysql database)<br />

HOW TO BULID AND RUN<br/>
docker build -t myfinalimage .  <br/>
docker run -p 8080:8080 myfinalimage   <br />
//myfinalimage is name of image
