var cloudExercise = require('../cloud');
var emailExercise = require('../contact');
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

describe('emails', function() {
  it('fetches an email', function() {
    var result = contactExercise.findEmails('My email is test@test.com');
    result.should.deep.equal(["test@test.com"]);
  });

  it('fetches all emails', function() {
    var result = contactExercise.findEmails('Please contact us at test@test.com, test1@test.com');
    result.should.deep.equal(['test@test.com', 'test1@test.com']);
  });

  it('does not match using @ as shorthand', function() {
    var result = contactExercise.findEmails('Meet me @ Waikiki');
    result.should.deep.equal([]);
  });

  it('does not fetch Twitter handles', function() {
    var result = contactExercise.findEmails('Follow @brendaneich on Twitter');
    result.should.deep.equal([]);
  });
});

describe('phone numbers', function() {
  it('fetches a simple phone number', function() {
    var result = contactExercise.findPhoneNumbers('My number is 8085551234');
    result.should.deep.equal(['8085551234']);
  });

  it('fetches a phone number with dashes', function() {
    var result = contactExercise.findPhoneNumbers('My number is 808-555-1234');
    result.should.deep.equal(['808-555-1234']);
  });

  // CHALLENGE
  // it('fetches a phone number with the area code in parens', function() {
  //   var result = regexExercise.findPhoneNumbers('My number is (808) 555-1234');
  //   result.should.equal(['(808) 555-1234'])
  // });
});
