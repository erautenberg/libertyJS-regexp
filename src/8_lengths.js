/* Lengths */

// lengths();

export function lengths() {
  console.log('\nLENGTHS\n\n');

  // It's possible to set how many of a certain character code are expected

  var reg = /\d{1,2}-\d{1,2}-\d{4}/g; // a digit of length 1-2, a digit of length 1-2, and a digit of length 4

  var str = "Valid Dates: 06-08-2018, 6-8-2018, 06-8-2018, Invalid Date: 6-8-18";
  console.log(str);

  var match = str.match(reg);
  // console.log(`${reg}:`, match);
}