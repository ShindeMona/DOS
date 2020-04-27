const app = require('express')();
const mysql = require('mysql');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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
app.get('/', (req, res) => {
	res.json({
		success: true,
		message: 'Hello world'
	});
});

// insert a student into database
app.post('/user', (req, res) => {
       const id=req.body.id;
       const Name=req.body.Name;
       const Age=req.body.Age;
       const Department=req.body.Department;
       const Subject=req.body.Subject;
       const query = 'INSERT INTO students values(? ,? , ?, ?, ?)';

        connection.query(query, [id,Name,Age,Department,Subject], (err, results, fields) => {
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

// fetch all students
app.get('/user', (req, res) => {
	const query = 'SELECT * FROM students';
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
 
//fetch one student

app.get('/user/:id', (req, res) => {
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



app.delete('/user/:id', (req, res) => {
	const query = 'DELETE FROM students where id=?';
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
                        message: 'Deleted sucessfully',
    			result: results
    		});
    	}
    });
});

//Update



app.put('/user/:id', (req, res) => {
       const id=req.params.id;
       const Name=req.body.Name;
       const Age=req.body.Age;
       const Department=req.body.Department;
       const Subject=req.body.Subject;
       const query = 'UPDATE students SET Name= ?,Age= ?,Department= ?,Subject= ? WHERE id= ?';

        connection.query(query, [ Name,Age,Department,Subject,id], (err, results, fields) => {
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
