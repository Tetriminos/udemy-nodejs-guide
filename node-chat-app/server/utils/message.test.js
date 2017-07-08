let expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        // store res in variable
        // assert from match
        // assert text match
        // assert createdAt is number
        let from = 'Andrew';
        let text = 'My dog burned to a crisp in the fire yesterday, atleast he looks sick af now, shits lit yo';

        let message = generateMessage(from, text);

        expect(message).toInclude({from, text});
        // the below is fine, but the above is cooler
        // expect(message.from).toBe(from);
        // expect(message.text).toBe(text);
        expect(message.createdAt).toBeA('number');
    });
});

/*
from,
url: `https://www.google.com/maps?q=${latitude},${longitude}`,
createdAt: new Date().getTime()
*/

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        let from = 'Andrew';
        let lat = 1204;
        let long = -17.34;
        let location = generateLocationMessage(from, lat, long);

        expect(location.from).toBe(from);
        expect(location.url).toBe(`https://www.google.com/maps?q=${lat},${long}`);
        expect(location.createdAt).toBeA('number');
    });
});
