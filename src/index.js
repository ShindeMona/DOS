
const app = require('express')();
const mysql = require('mysql');
const bodyParser = require('body-parser');

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
	const student = req.body;
	const query = 'INSERT INTO students values(?, ?, ?, ?, ?)';

	connection.query(query, [student.ID, student.Name,student.Age,student.Department,student.Subject], (err, results, fields) => {
		if (err) {
			console.error(err);
			res.json({
				success: false,
				message: 'Error occured'
			});
		} else {
			res.json({
				success: true,
				message: 'Successfully added student'
			});
		}
	});
});

// fetch all students
app.post('/all', (req, res) => {
	const query = 'SELECT * FROM students';
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
    			result: results
    		});
    	}
    });
});
 app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
