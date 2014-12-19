var isNumber = require('../is_number');

describe('isNumber', function () {
  it('returns true if str is number', function () {
    var result = isNumber('1');
    expect(result).to.be.true;
  });
  it('returns false if str is not a number', function () {
    var result = isNumber('A');
    expect(result).to.be.false;
  });
  it('returns true if str is only numbers', function () {
    var result = isNumber('12321320');
    expect(result).to.be.true;
  });
  it('returns false if some chars are not numbers', function () {
    var result = isNumber('12321a320');
    expect(result).to.be.false;
  });
  it('returns true if str is `number` type', function () {
    var result = isNumber(1);
    expect(result).to.be.true;
  });
});