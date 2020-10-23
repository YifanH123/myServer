const express = require('express');
const app = express();
var port = process.env.PORT || 8080;

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/welcome.html");
})

app.get('/calc', (req, res) => {
	res.sendFile(__dirname + "/calculator.html");
})

app.get('/math_links', (req, res) => {
	res.send(__dirname + "/math_links.html");
})

app.get('/button', (req, res) => {
	res.send('<button style="position:absolute; left: 50%; top: 50%">hi</button>');
})

app.get('/proxy', (req, res) => {
	res.sendFile(__dirname + "/proxy.html");
})

app.get('/war-ing_rules', (req, res) => {
	res.sendFile(__dirname + "/war-ing_rules.html");
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
})
