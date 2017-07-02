const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo App v1.0'
    });
});

// GET /users
// Give users a name property and an age property

usersArray = [
    {
        name: 'Domagoj',
        age: 22
    },
    {
        name: 'Bill',
        age: 55
    },
    {
        name: 'Angus',
        age: 62
    }
]

app.get('/users', (req, res) => {
    res.status(200).send(usersArray);
});


app.listen(3000);

module.exports.app = app;
