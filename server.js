import express from 'express';
import {MongoClient} from 'mongodb';
let app = express();

//app.get('/', (req, res) => res.send('hello express 2!'));
app.use(express.static('public'));

var MONGO_URL='mongodb://dansab:batran11@ds131800.mlab.com:31800/rgrjs';

let db;

MongoClient.connect(MONGO_URL, (err, database) => {
    if(err) throw err;

    db=database;
    app.listen(3000, () => console.log('listening on port 3000'));
}); 

app.get("/data/links", (req, res) => {
    db.collection("links").find({}).toArray((err, links) => {
        if(err) throw err;

        res.json(links);
    });
});