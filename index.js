const path = require('path');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;

app.use('/css', express.static(path.join(__dirname, '/public/assets/css')));
app.use('/js', express.static(path.join(__dirname, '/public/assets/js')));

app.set('view engine', 'pug')

// Start socket.io
require('./socket/index').listen(http);

app.get('/', (req, res) => {
    res.render('index');
});

http.listen(port, () => {
    console.log('Listening on port '+port+'...');
});