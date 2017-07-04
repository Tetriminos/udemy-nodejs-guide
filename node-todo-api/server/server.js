let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user')

let app = express();

app.use(bodyParser.json());

// this is different than the video
let port = 3000;

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc).status(200);
    }, (e) => {
        res.send(e);
    });
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});
