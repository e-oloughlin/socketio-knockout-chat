const path = require('path');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;

app.use('/css', express.static(path.join(__dirname, '/public/assets/css')));
app.use('/js', express.static(path.join(__dirname, '/public/assets/js')));

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/views/index.html');
});

app.listen(port, () => {
    console.log('Listening on port '+port+'...');
});