let app = require('express')();
let http = require('http').Server(app);
let port = process.env.PORT || 3000;

app.use('/css', express.static(path.join(__dirname, '/public/assets/css')));

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/views/index.html');
});

app.listen(port, () => {
    console.log('Listening on port '+port+'...');
});