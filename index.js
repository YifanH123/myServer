const express = require('express');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8080;
var num_in_room = {1:0, 2:0, 3:0, 4:0};

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/welcome.html");
})

app.get('/calc', (req, res) => {
	res.sendFile(__dirname + "/calculator.html");
})

app.get('/math_links', (req, res) => {
	res.sendFile(__dirname + "/math_links.html");
})

app.get('/button', (req, res) => {
	res.send('<button style="position:absolute; left: 50%; top: 50%">hi</button>');
})

app.get('/mage_game', (req, res) => {
	res.sendFile(__dirname + "/mage-game.html");
})

app.get('/pong', (req, res) => {
	res.sendFile(__dirname + "/pong.html");
})

app.get('/pong_homepage', (req, res) => {
	res.sendFile(__dirname + "/homepage_pong.html");
})

io.on('connection', (socket) => {
	console.log('a user connected');
	socket.on("move", function(object) {
		socket.to(socket.room).emit("move", {pos_x:object.pos_x, id_num:socket.playernumber});
	});
	socket.on("joinroom", function(object) {
		console.log(num_in_room[object.room]);
		if (num_in_room[object.room] < 2) {
			num_in_room[object.room] ++;
			socket.join(object.room);
			socket.room = object.room;
			if (num_in_room[object.room] === 1) {
				socket.playernumber = "p1";
				console.log(socket.room);
				socket.to(socket.room).emit("setplayer", {player:"p1"});
			}
			if (num_in_room[object.room] === 2) {
				socket.playernumber = "p2";
				console.log(socket.room);
				socket.to(socket.room).emit("setplayer", {player:"p2"});
			}
		}
		else {
			socket.emit("full");
		}
	});
});

http.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
})
