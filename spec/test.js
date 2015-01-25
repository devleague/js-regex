var regexExercise = require('../index');

describe('string replace', function() {
  it('finds one instance of cat', function() {
    var result = regexExercise.findCats("Kitty cat"); 
    result.should.equal(1);  
  });

  it('find all instances of cats', function() {
    var result = regexExercise.findCats("Cat cat all the cats");
    result.should.equal(2); 
  });
});
