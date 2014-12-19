var isLetter = require('../is_letter');

describe('isLetter', function () {
  it('returns true if str is letter', function () {
    var result = isLetter('a');
    expect(result).to.be.true;
  });

  it('returns false if str is not letter', function () {
    var result = isLetter('1');
    expect(result).to.be.false;
  });

  it('returns true if string contains only letters', function () {
    var result = isLetter('SomeString');
    expect(result).to.be.true;
  });

  it('returns false if some chars are not letters', function () {
    var result = isLetter('123s');
    expect(result).to.be.false;
  });
});