const {SHA256} = require('crypto-js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

let password = '123abcd!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

let hashedPassword = '$2a$10$lf57q1PZD5PdhinKTshK5ukXO3HM5dvH52GxWrDqUlmqfgWhr64IS';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});

// let data = {
//     id: 10
// };
//
// let token = jwt.sign(data, '123abcd');
// console.log(token);
//
// let decoded = jwt.verify(token, '123abcd');
// console.log(decoded);
// let message = 'I am user number 3';
// let hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// let data = {
//     id: 4
// };
//
// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. FU!');
// }
