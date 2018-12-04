const expect = require('chai').expect;
const server = require('../index');

describe('test', () => {
    it('should return a string', () => {
        expect('Continuous Integration with Travis.').to.equal('Continuous Integration with Travis.');
    });
});