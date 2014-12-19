var camelize = require('../camelize');

describe('camelize', function () {
  it('should camelize the string', function () {
    var result = camelize('some-dashed-string');
    expect(result).to.be.eql('someDashedString');
  });
});