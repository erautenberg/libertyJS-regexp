/* Character Groups */

// characters();

export function characters() {
  console.log('\nCHARACTER SETS\n\n');

  // There are many different character codes that can be used as shorthands for groupings of characters
  //   \d - any digit character (0-9)
  //   \w - any alphanumeric character (a-z, A-Z, 0-9, and some symbols)
  //   \s - any whitespace character (space, tab, etc.)
  //   \D - any NON-digit character
  //   \W - any NON-alphanumeric character
  //   \S - any NON-whitespace character
  //   . - any character that isn't a newline (\n)

  var str = "This contains all 6 types of characters.";
  console.log(str);

  // char_nums(str);
  // char_words(str);
  // char_space(str);
  // char_noNums(str);
  // char_noWords(str);
  // char_noSpace(str);
  // char_all(str);
  // char_boundary(str);
}

function char_nums(str) {
  var nums = /\d/g; // search for any digits
  var numsMatch = str.match(nums);
  console.log(`${nums}:`, numsMatch);
}

function char_words(str) {
  var words = /\w/g;  // search for any word characters
  var wordsMatch = str.match(words);
  console.log(`${words}:`, wordsMatch);
}

function char_space(str) {
  var space = /\s/g; // search for whitespaces
  var spaceMatch = str.match(space);
  console.log(`${space}:`, spaceMatch);
}

function char_noNums(str) {
  var nonNums = /\D/g; // search for non digits
  var nonNumsMatch = str.match(nonNums);
  console.log(`${nonNums}:`, nonNumsMatch);
}

function char_noWords(str) {
  var nonWords = /\W/g; // search for non word characters
  var nonWordsMatch = str.match(nonWords);
  console.log(`${nonWords}:`, nonWordsMatch);
}

function char_noSpace(str) {
  var nonSpace = /\S/g; // search for non white spaces
  var nonSpaceMatch = str.match(nonSpace);
  console.log(`${nonSpace}:`, nonSpaceMatch);
}

function char_all(str) {
  var all = /./g; // search for any non newline character
  var allMatch = str.match(all);
  console.log(`${all}:`, allMatch);
}

function char_boundary() {
  // There is one more character class called a "word boundary"

  var boundaryStr = "Java has a boundary, but JavaScript does not";
  console.log(boundaryStr);

  var boundary = /\bJava\b/g;
  var boundaryMatch = boundaryStr.search(boundary);
  console.log(`${boundary}:`, boundaryMatch);

  // It also has a reverse
  var nonBoundary = /Java\B/g;
  var nonBoundaryMatch = boundaryStr.search(nonBoundary);
  console.log(`${nonBoundary}:`, nonBoundaryMatch);
}