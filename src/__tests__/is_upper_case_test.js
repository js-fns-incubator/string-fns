var isUpperCase = require('../is_upper_case');

describe('isUpperCase', function () {
  it('returns true is str is in upperCase', function () {
    var result = isUpperCase('A');
    expect(result).to.be.true;
  });
  it('returns false is str is in lowerCase', function () {
    var result = isUpperCase('a');
    expect(result).to.be.false;
  });
  it('returns true if str is made of uppercase letter ', function () {
    var result = isUpperCase('AZAZA');
    expect(result).to.be.true;
  });
  it('returns false if str have non uppercase letter', function () {
    var result = isUpperCase('AZAZAs');
    expect(result).to.be.false;
  });
  it('returns false if str is not a letter', function () {
    var result = isUpperCase('1');
    expect(result).to.be.false;
  });
  it('returns false if str is not only uppercase letters', function () {
    var result = isUpperCase('TEST_STRING');
    expect(result).to.be.false;
  });
});