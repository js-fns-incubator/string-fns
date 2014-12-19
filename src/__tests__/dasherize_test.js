var dasherize = require('../dasherize');

describe('dasherize', function() {
  it('simply converts', function() {
    var result = dasherize('SimpleString')
    expect(result).to.be.eql('simple-string');
  });

  it('converts `__` to single `-`', function() {
    var result = dasherize('SimpleString__with_extra')
    expect(result).to.be.eql('simple-string-with-extra');
  });

  it('converts only first uppercase latter in sequence', function() {
    var result = dasherize('LettersABC')
    expect(result).to.be.eql('letters-abc');
  });

  it('ULTIMATE challenge', function() {
    var result = dasherize('MassiveWordWITH-a-lotOf___Strange-chars!')
    expect(result).to.be.eql('massive-word-with-a-lot-of-strange-chars!');
  });

  it('return empty string for input empty string', function() {
    var result = dasherize('')
    expect(result).to.be.eql('');
  });

  it('return single dash for multiply dash chars', function() {
    var result = dasherize('-__-')
    expect(result).to.be.eql('-');
  });

  it('respects numbers', function() {
    var result = dasherize('DontForgetAboutNumbers123')
    expect(result).to.be.eql('dont-forget-about-numbers-123');
  });

  it('respects numbers in the begginging', function() {
    var result = dasherize('123I----LoveNumbers')
    expect(result).to.be.eql('123-i-love-numbers');
  });

  it('respects @radanskoric', function() {
    var result = dasherize('SomeShittyString_____hereAndHere')
    expect(result).to.be.eql('some-shitty-string-here-and-here');
  });

});

