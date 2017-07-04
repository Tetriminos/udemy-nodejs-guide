const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '595bd48ba4bd175c1c0a152d';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

Todo.find({
    _id: id
}).then((todos) => {
    if (todos.length === 0) {
        return console.log('Id not found');
    }
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo by Id', todo);
}).catch((e) => console.log(e));

User.findById(id).then((user) => {
    if (!user) {
        return console.log('Id not found');
    }
    console.log('User by Id', user);
});
