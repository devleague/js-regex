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

  it('only finds cloud surrounded by a word boundary', function() {
    var result = regexExercise.findCloud('<a href="http://www.cloud.com">A cloud url</a>');
    result.should.equal(1);
  });

  it('finds instances of cloud when it is capitalized', function() {
    var result = regexExercise.findCloud('Cloud from Final Fantasy VII');
    result.should.equal(1);
  });

  it('replaces the cloud with something else', function() {
    var result = regexExercise.replaceCloud('The cloud is in the cloud', 'box');
    result.should.equal('The box is in the box');
  });

  it('replaces the cloud with another string (maintains case)', function() {
    var result = regexExercise.replaceCloud('Cloud is in the cloud', 'box');
    result.should.equal('Box is in the box');
  });

  // CHALLENGE
  // it('can replace any string with any other string', function() {
  //   var result = regexExercise.replaceWith('developers developers developers', 'developers', 'designers');
  //   result.should.equal('designers designers designers');
  // });
});

describe('emails', function() {
  it('fetches an email', function() {
    var result = regexExercise.findEmails('My email is test@test.com');
    result.should.equal(["test@test.com"]);
  });

  it('fetches all emails', function() {
    var result = regexExercise.findEmails('Please contact us at test@test.com, test1@test.com');
    result.should.equal(['test@test.com', 'test1@test.com']);
  });

  it('does not match using @ as shorthand', function() {
    var result = regexExercise.findEmails('Meet me @ Waikiki');
    result.should.equal([]);
  });

  it('does not fetch Twitter handles', function() {
    var result = regexExercise.findEmails('Follow @brendaneich on Twitter');
    result.should.equal([]);
  });
});

describe('phone numbers', function() {
  it('fetches a simple phone number', function() {
    var result = regexExercise.findPhoneNumbers('My number is 8085551234');
    result.should.equal(['8085551234']);
  });

  it('fetches a phone number with dashes', function() {
    var result = regexExercise.findPhoneNumbers('My number is 808-555-1234');
    result.should.equal(['808-555-1234']);
  });

  // CHALLENGE
  // it('fetches a phone number with the area code in parens', function() {
  //   var result = regexExercise.findPhoneNumbers('My number is (808) 555-1234');
  //   result.should.equal(['(808) 555-1234'])
  // });
});

describe('links', function() {
  it('matches href links', function() {
    var result = regexExercise.findLinks('<a href="http://www.google.com">Google</a>');
    result.should.equal(['http://www.google.com']);
  });

  it('does not matter if the url is in single quotes', function() {
    var result = regexExercise.findLinks("<a href='http://www.google.com'>Google</a>");
    result.should.equal(['http://www.google.com']);
  });

  // CHALLENGE
  // it('replaces the url with another url', function() {
  //   var result = regexExercise.replaceLinks('<a href="http://www.google.com">Google</a>', "http://www.facebook.com");
  //   result.should.equal('<a href="http://www.facebook.com">Google</a>');
  // });

  // REALLY REALLY HARD CHALLENGE
  // it('replaces the url with another url and maintains attributes', function() {
  //   var result = regexExercise.replaceLinks('<a id="google" href="http://www.google.com" target="_blank">Google</a>', "http://www.facebook.com");
  //   result.should.equal('<a id="google" href="http://www.facebook.com" target="_blank">Google</a>');
  // });
});