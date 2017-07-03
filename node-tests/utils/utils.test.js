const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    let res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
    // if (res !== 44) {
    //     throw new Error(`Expected 44, but got ${res}`);
    // }
});

it('should square a number', (done) => {
    utils.square(4, (square) => {
        expect(square).toBe(16).toBeA('number');
        done();
    });
    // if (res !== 16) {
    //     throw new Error(`Expected 16, but got ${res}`);
    // }
});

// it('should expect some values', () => {
//     // expect(12).toNotBe(12)M
//     // expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
//     // expect([2, 3, 4]).toExclude(1);
//     expect({
//         name: 'Andrew',
//         age: 25,
//         location: 'Philadelphia'
//     }).toExclude({
//         age: 23
//     });
// });

it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should verify first and last names are set', () => {
    let user = {
        age: 22
    };
    let res = utils.setName(user, 'Domagoj Majcenic');

    expect(res).toInclude({
        firstName: 'Domagoj',
        lastName: 'Majcenic'
    });
});
