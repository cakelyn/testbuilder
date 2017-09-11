// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {

  // Detects the Diner's Club network
  // always starts with a 38 or 39 and is 14 digits long
  if (cardNumber.length === 14) {
    if (cardNumber.indexOf('38') === 0 ||
        cardNumber.indexOf('39') === 0) {
      return "Diner's Club";
    }

  // Detects American Express
  // always starts with 34 or 37 and is 15 digits long
  } else if (cardNumber.length === 15) {
    if (cardNumber.indexOf('34') === 0 ||
        cardNumber.indexOf('37') === 0) {
      return "American Express";
    }

  // Detects MasterCard
  // always has a prefix of 51, 52, 53, 54, or 55 and a length of 16
  } else if (cardNumber.length === 16 &&
            (cardNumber.indexOf('51') === 0 ||
             cardNumber.indexOf('52') === 0 ||
             cardNumber.indexOf('53') === 0 ||
             cardNumber.indexOf('54') === 0 ||
             cardNumber.indexOf('55') === 0)) {
    return "MasterCard";

  // Detects Discover
  // always has a prefix of 6011 and a length of 16 or 19
  } else if (cardNumber.length === 16 ||
              cardNumber.length === 19) {
    if (cardNumber.indexOf('6011') === 0 ||
        cardNumber.indexOf('65') === 0) {
      return "Discover";
    }

    for (var i = 644; i < 650; i++) {
      if (cardNumber.indexOf(i.toString()) === 0) {
        return "Discover";
      }
    }
  }

  // Detects Maestro
  // always has a prefix of 5018, 5020, 5038, or 6304 and a length of 12 - 19
  for(var j = 12; j < 20; j++) {
    if(cardNumber.length === j) {
      if(cardNumber.indexOf('5018') === 0 ||
         cardNumber.indexOf('5020') === 0 ||
         cardNumber.indexOf('5038') === 0 ||
         cardNumber.indexOf('6304') === 0) {
        return "Maestro";
      }
    }
  }

  // Detects China UnionPay
  // always has a prefix of 622126-622925, 624-626, or 6282-6288
  // and a length of 16-19
  for (var k = 16; k < 20; k++) {
    if(cardNumber.length === k && cardNumber.indexOf('622') === 0) {
      for (var l = 622126; l < 622926; l++) {
        if(cardNumber.indexOf(l.toString()) === 0) {
          return "China UnionPay";
        }
      }
    } else if (cardNumber.length === k && cardNumber.indexOf('628') === 0) {
      for (var m = 6282; m < 6289; m++) {
        if (cardNumber.indexOf(m.toString()) === 0) {
          return "China UnionPay";
        }
      }
    } else {
      for (var n = 624; n < 627; n++) {
        if (cardNumber.indexOf(n.toString()) === 0) {
          return "China UnionPay";
        }
      }
    }
  }


  // Detects Switch
  // always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759
  // and a length of 16, 18, or 19
  if ((cardNumber.indexOf('4903') === 0 ||
       cardNumber.indexOf('4905') === 0 ||
       cardNumber.indexOf('4911') === 0 ||
       cardNumber.indexOf('4936') === 0 ||
       cardNumber.indexOf('564182') === 0 ||
       cardNumber.indexOf('633110') === 0 ||
       cardNumber.indexOf('6333') === 0 ||
       cardNumber.indexOf('6759') === 0) &&
      (cardNumber.length === 16 ||
       cardNumber.length === 18 ||
       cardNumber.length === 19)) {
    return "Switch";
  }


  // Detects Visa
  // always has a prefix of 4 and a length of 13, 16, or 19
  if ((cardNumber.length === 13 ||
              cardNumber.length === 16 ||
              cardNumber.length === 19) &&
              cardNumber.indexOf('4') === 0) {
    return "Visa";
  }

  return "No network detected";

};

console.log(detectNetwork('6282123456789012111'));