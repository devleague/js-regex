var regexExercise = require('../index');
require('chai').should();

describe('the cloud', function() {
  it('finds one instance of cloud', function() {
    var result = regexExercise.findCloud('Push things to the cloud');
    result.should.equal(1);
  });

  it('finds all instances of cloud', function() {
    var result = regexExercise.findCloud('The cloud is in the cloud');
    result.should.equal(2);
  });

  it('finds instances of cloud when it is capitalized', function() {
    var result = regexExercise.findCloud('Cloud from Final Fantasy VII');
    result.should.equal(1);
  });

  it('replaces the cloud with something else', function() {
    var result = regexExercise.replaceCloud('The cloud is in the cloud', 'box');
    result.should.equal('The box is in the box');
  });

  // CHALLENGE
  // it('replaces the cloud with another string (maintains case)', function() {
  //   var result = regexExercise.replaceCloud('Cloud is in the cloud', 'box');
  //   result.should.equal('Box is in the box');
  // });
});

describe('emails', function() {
  it('fetches an email', function() {
    var result = regexExercise.findEmails('My email is test@test.com');
    result.should.equal(["test@test.com"]);
  });

  it('fetches all emails', function() {
    var result = regexExercise.findEmails('test@test.com, test1@test.com');
    result.should.equal(['test@test.com', 'test1@test.com']);
  });
});

describe('phone numbers', function() {
  it('can fetch a simple phone number', function() {
    var result = regexExercise.findPhoneNumbers('My number is 8085551234');
    result.should.equal(['8085551234']);
  });

  it('can fetch a more complicated phone number', function() {
    var result = regexExercise.findPhoneNumbers('My number is 808-555-1234');
    result.should.equal(['808-555-1234']);
  });
});

describe('links', function() {

});