##PART1 : DOCKER FILE<br/>

Introduction:
Performing insert ,delete ,update ,display operation on mysql database
through HTML.
-Requires installation docker,mysql,node
#still Working
my code is working on terminalwhen but not properly working on docker .
-Accept data from HTML from GETdata.html
GETdata.html -> index.js -> test (mysql database)

##HOW TO BULID AND RUN<br/>
docker build -t myfinalimage .  <br/>
docker run -p 8080:8080 myfinalimage   <br />
//myfinalimage is name of image
