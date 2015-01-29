var cloudExercise = require('../cloud');
var contactExercise = require('../contact');
var linkExercise = require('../link');
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

  it('does not match using @ as shorthand for the word "at"', function() {
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
  //   var result = contactExercise.findPhoneNumbers('My number is (808) 555-1234');
  //   result.should.deep.equal(['(808) 555-1234'])
  // });
});

describe('links', function() {
  it('matches href links', function() {
    var result = linkExercise.findHRef('<a href="http://www.google.com">Google</a>');
    result.should.deep.equal(['http://www.google.com']);
  });

  it('does not matter if the url is in single quotes', function() {
    var result = linkExercise.findHRef("<a href='http://www.google.com'>Google</a>");
    result.should.deep.equal(['http://www.google.com']);
  });

  // CHALLENGE
  // it('replaces the url with another url', function() {
  //   var result = linkExercise.replaceLink('<a href="http://www.google.com">Google</a>', "http://www.facebook.com");
  //   result.should.equal('<a href="http://www.facebook.com">Google</a>');
  // });

  // REALLY REALLY HARD CHALLENGE
  // it('replaces the url with another url and maintains attributes', function() {
  //   var result = linkExercise.replaceLink('<a id="google" href="http://www.google.com" target="_blank">Google</a>', "http://www.facebook.com");
  //   result.should.equal('<a id="google" href="http://www.facebook.com" target="_blank">Google</a>');
  // });
});
