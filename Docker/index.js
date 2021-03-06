const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
var http = require('http');
var fs = require("fs");
 
http.createServer(function(request, response) {
}).listen(3000);
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
app.use(express.static('../library'));
app.set('view engine','pug');
const connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password: 'ddn',
	database: 'test'
});

connection.connect((err) => {
	if (err) {
		console.error('error connecting mysql: ');
	} else {
		console.log('mysql connection successful');
		}
	
});

// home page

  app.get('/user',function(req,res){
   fs.readFile("GETdata.html", function (err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
   });
});

// insert a student into database done
app.post('/userinsert', (req, res) => {
       
       console.log(req.body);
       var query = "INSERT INTO students VALUES('"+req.body.id+"','"+req.body.name+"','"+req.body.age+"','"+req.body.department +"','"+ req.body.subject+"')";
        connection.query(query, (err, results, fields) => {
                if (err) {
                        console.error(err);
                        res.json({
                                success: false,
                                message: 'Error occured'
                        });
                } else {
                
                        res.json({
                                success: true,
                                message: results
                        });
                }
        });
});

// fetch all students done
app.get('/usershow', (req, res) => {
	const query = 'SELECT * FROM students';
    connection.query(query, (err, results, fields) => {
    	if (err) {
    		console.error(err);
    		res.json({
    			success: false,
    			message: 'Error occured'
    		});
    	} else {
    		//res.send(results);         
     	res.json({
    			success: true,
                        message: 'Got record',
    			result: results
    		});
    	}
    });
});
 
//fetch one student

app.get('/userid', (req, res) => {
	const query = 'SELECT * FROM students where id= ?';
    connection.query(query,[req.params.id], (err, results, fields) => {
    	if (err) {
    		console.error(err);
    		res.json({
    			success: false,
    			message: 'Error occured'
    		});
    	} else {
    		res.json({
    			success: true,
                        message: 'Got record',
    			result: results
    		});
    	}
    });
});

//delete user

app.post('/useriddelete', (req, res) => {
        console.log(req.body);
	const query = "DELETE FROM students where id='"+req.body.id+"'";
    connection.query(query, (err, results, fields) => {
    	if (err) {
    		console.error(err);
    		res.json({
    			success: false,
    			message: 'Error occured'
    		});
    	} else {
    		res.json({
    			success: true,
                        message: 'Deleted sucessfully',
    			result: results
    		});
    	}
    });
});

//Update

app.post('/useridupdate', (req, res) => {
        console.log(req.body);
 
        const query = "UPDATE students SET Name= '"+req.body.name+"',Age='"+req.body.age+"',Department='"+req.body.department +"',Subject='"+req.body.subject+"' WHERE id= '"+req.body.id+"'";

        connection.query(query, (err, results, fields) => {
                if (err) {
                        console.error(err);
                        res.json({
                                success: false,
                                message: 'Error occured'
                        });
                } else {
                res.send(results);
                }
        });
});


app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
