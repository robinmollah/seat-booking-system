if(process.env.NODE_ENV !== 'production'){
	require('dotenv').config()
}
const port = process.env.PORT | 3002;
const express = require('express')
const userController = require("./src/db/controllers/users");
const sectionsController = require("./src/db/controllers/sections");
const app = express()
const api = require("./routes/api");

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res) => {
	res.render('login', {title: "Login"});
})

app.get('/signup', (req, res) => {
	res.render("signup", {});
})

app.get('/login', (req, res) => {
	sectionsController.get((data, err) => {
		res.render('index', {title: "Dashboard", sections: data, admin: false});
	})
})

app.get('/api/login', (req, res) => {
	userController.login(req.query.email, req.query.password, function(data, err)  {
		console.log(data[0].email, err);
		if(err){
			res.send(JSON.stringify(err.sqlMessage));
		} else {
			if(req.query.password == data[0].password){
				res.json({
					success: true,
					message: "You have successfully logged in"
				});
			} else {
				res.status(403).send("Wrong username or password");
			}
		}
	});
});

app.post('/api/signup', (req, res) => {
	userController.signup(req.body, (data, err) => {
		if(err){
			res.send(JSON.stringify(err))
			return;
		}
		res.send({
			success: true
		});
	});
})

app.use('/api', api);

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
	console.log('Version: 0.1.2');
})

