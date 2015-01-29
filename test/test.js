var cloudExercise = require('../cloud');
var chai = require('chai');
    chai.should();

describe('the cloud', function() {
  it('finds one instance of cloud', function() {
    var result = cloudExercise.findCloud('Push things to the cloud');
    result.should.equal(1);
  });

  it('finds all instances of cloud', function() {
    var result = cloudExercise.findCloud('The cloud is in the cloud');
    result.should.equal(2);
  });

  it('only finds cloud surrounded by a word boundary', function() {
    var result = cloudExercise.findCloud('A lone cloud on a cloudy day');
    result.should.equal(1);
  });

  it('finds instances of cloud when it is capitalized', function() {
    var result = cloudExercise.findCloud('Cloud from Final Fantasy VII');
    result.should.equal(1);
  });

  it('replaces all instances of cloud with another string', function() {
    var result = cloudExercise.replaceCloud('The cloud is in the cloud', 'box');
    result.should.equal('The box is in the box');
  });

  it('replaces all instances of cloud with another string (maintains capitalization)', function() {
    var result = cloudExercise.replaceCloud('Cloud is in the cloud', 'box');
    result.should.equal('Box is in the box');
  });

  // CHALLENGE
  // it('can replace any string with another string', function() {
  //   var result = cloudExercise.replaceWords('developers developers developers', 'developers', 'designers');
  //   result.should.equal('designers designers designers');
  // });

  // it('can replace any string with another string (maintains capitalization)', function() {
  //   var result = cloudExercise.replaceWords('Developers developers Developers', 'developers', 'designers');
  //   result.should.equal('Designers designers Designers');
  // });
});
