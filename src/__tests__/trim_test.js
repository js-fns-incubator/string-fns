var trim = require('../trim');

describe('trim', function () {
  it('trims the string', function () {
    var result = trim(' \n myString \t \t');
    expect(result).to.be.eql('myString');
  });
});