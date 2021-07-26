if(process.env.NODE_ENV !== 'production'){
	require('dotenv').config()
}
const port = process.env.PORT | 3002;
const express = require('express')
const app = express()

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res) => {
	res.render("index", {title: "Dashboard"})
})

app.get('/signup', (req, res) => {
	res.render("signup", {});
})

app.get('/login', (req, res) => {
	res.render('login', {});
})

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
	console.log('Version: 0.1.2');
})

