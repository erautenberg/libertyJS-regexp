/* Quantifiers: +, *, ? */

// quantifiers();

export function quantifiers() {
  console.log('\nQUANTIFIERS\n\n');

  // There are also other special characters used to quantify occurances other than a specified range
  //   + - one or more
  //   ? - zero or one
  //   * - zero or more

  var str1 = "no nums";
  var str2 = "12345";

  console.log(str1);
  oneOrMore(str1);
  zeroOrOne(str1);
  zeroOrMore(str1);

  // console.log(str2);
  // oneOrMore(str2);
  // zeroOrOne(str2);
  // zeroOrMore(str2);
}

function oneOrMore(str) {
  var plus = /\d+/g; // digit occurs at least once
  var plusMatch = str.match(plus);
  console.log(`${plus}:`, plusMatch);
}

function zeroOrOne(str) {
  var question = /\d?/g; // digit occurs no more than once
  var questionMatch = str.match(question);
  console.log(`${question}:`, questionMatch);
}

function zeroOrMore(str) {
  var star = /\d*/g; // digit does not occur or occurs infinitely many times
  var starMatch = str.match(star);
  console.log(`${star}:`, starMatch);
}