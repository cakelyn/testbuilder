/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
/*
var FILL_ME_IN = 'Fill this value in';

describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    };
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    };

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
*/

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }

  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }

  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert;


  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;

  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });


  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  var expect = chai.expect;

  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });

});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var discoverTest = [['6011', '6011123456789012'],
                      ['65', '6512345678901234'],
                      ['644', '6441234567890123'],
                      ['645', '6451234567890123'],
                      ['646', '6461234567890123'],
                      ['647', '6471234567890123'],
                      ['648', '6481234567890123'],
                      ['649', '6491234567890123']];

  var discoverCheck = function(len, prefix, cardNum) {
    var expect = chai.expect;

    it('has a prefix of ' + prefix + ' and a length of ' + len, function() {
      expect(detectNetwork(cardNum)).to.equal('Discover');
    });

    return;

  };

  for(var i = 0; i < discoverTest.length; i++) {
    discoverCheck(16, discoverTest[i][0], discoverTest[i][1]);
    discoverTest[i][1] += '123';
    discoverCheck(19, discoverTest[i][0], discoverTest[i][1]);
  }

});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var maestroTest = [['5018', '501812345678'],
                     ['5020', '502012345678'],
                     ['5038', '503812345678'],
                     ['6304', '630412345678']];

  // takes a Maestro length, prefix, and card number and tests
  var maestroCheck = function(i, prefix, cardNum) {
    var expect = chai.expect;

    it('has a prefix of ' + prefix + ' and a length of ' + i, function() {
      expect(detectNetwork(cardNum)).to.equal('Maestro');
    });

    return;

  };

  // cycles through each possible length for every prefix
  for (var i = 0; i < maestroTest.length; i++) {
    for (var j = 12; j < 20; j++) {
      maestroCheck(j, maestroTest[i][0], maestroTest[i][1]);
      maestroTest[i][1] += '1';
    }
  }

});

describe('China UnionPay', function() {
  var cardNum, cardSuffix = '1111111111';
  var chinaUPCheck = function(len, prefix, cardNum) {
    var expect = chai.expect;

    it('has a prefix of ' + prefix + ' and a length of ' + len, function() {
      expect(detectNetwork(cardNum)).to.equal('China UnionPay');
    });

    return;

  };

  for (var i = 16; i < 20; i++) {
    for (var j = 622612; j < 622926; j++) {
      cardNum = j.toString();
      cardNum += cardSuffix;
      chinaUPCheck(i, j, cardNum);
    }
    cardSuffix += '11';
    for (var k = 6282; k < 6289; k++) {
      cardNum = k.toString();
      cardNum += cardSuffix;
      chinaUPCheck(i, k, cardNum);
    }
    cardSuffix += '1';
    for (var l = 624; l < 627; l++) {
      cardNum = l.toString();
      cardNum+= cardSuffix;
      chinaUPCheck(i, l, cardNum);
    }
    cardSuffix = cardSuffix.slice(2);
  }

});

describe('should support Switch');
