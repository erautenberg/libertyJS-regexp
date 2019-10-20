/* Creating a new RegEx */

export function createRegEx() {
  createRegExLong();
  createRegExShort();
  findPosition();
}

function createRegExLong() {
  // RegEx can be created using the JavaScript object "RegExp"

  // search for 'pattern' with the 'g' flag, or global
  var regLong = new RegExp("pattern", "g");
  console.log(`new RegExp("pattern", "g"):`, regLong);
}

function createRegExShort() {
  // RegEx can also be created using '/' to start and end the pattern,
  // similarly to how strings use quotes or backticks

  // search for 'pattern' without flags
  var regShort1 = /pattern/;
  console.log(`/pattern/:`, regShort1);

  // search for 'pattern' with the 'g' flag, or global
  var regShort2 = /pattern/g;
  console.log(`/pattern/g:`, regShort2);
}

function findPosition() {
  // Find the pattern in the following string
  var str = "Let's find the word 'pattern' in this string.";
  var regex = /pattern/g;

  // .search returns the position of the match (-1 if no match)
  var position = str.search(regex);
  console.log(`${str}:`, position);
}