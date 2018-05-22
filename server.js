import express from 'express';
//console.log('express works!');
let app = express();

//app.get('/', (req, res) => res.send('hello express 2!'));
app.use(express.static('public'));

app.listen(3000);
