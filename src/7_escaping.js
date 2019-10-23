/* Escaping Special Characters */

// special();

export function special() {
  console.log('\nESCAPING SPECIAL CHARACTERS\n\n');

  // As you probably noticed by now, RegEx uses special characters to declare specific behavior
  // If the pattern you are looking for actually contains a special character,
  // similarly to HTML, Javascript, etc., you will have to escape it using the backslash, '\'
  var reg = /[\.\?\!\(\)]/g;

  var str = "How many special characters ('.', '?', '!', '(', ')') are in this sentence?";
  var match = str.match(reg);

  console.log(str);
  console.log(`${reg}:`, match);
}