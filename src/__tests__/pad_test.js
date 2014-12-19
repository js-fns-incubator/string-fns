var pad = require('../pad');

describe('pad', function () {
  it('pads the string', function () {
    var result = pad('1', 3, '0');
    expect(result).to.be.eql('001');
  });
});