/* Flags */

// flags();

export function flags() {
  console.log('\nFLAGS\n\n');

  // There are 5 Javascript-specific flags  ->  i, g, m, u, and y
  //   i - case-insensitive (/pattern/ will return results for "pattern" or "PATTERN" or "pATteRn")
  //   g - global (search for all matches in a string instead of just one)
  //   m - multiline (searches across multiple lines even when the ^ or $, or start and end of text, characters are used)
  //   u - unicode support (important for characters encoded with more than 2 bytes--like emojis)
  //   y - enables sticky mode (the search returns only a match found at the .lastIndex attribute)

  var str = "Let's search for 'paTtERn' to see how many instances of PATTERN or pattern there are in this string 😄";

  var strMulti = `pattern
  pattern`;

  console.log(str);
  console.log(strMulti);

  // flag_noCase(str);
  // flag_global(str);
  // flag_noCaseGlobal(str);
  // flag_multi(strMulti);
  // flag_unicode(str);
  // flag_sticky(str);
}

function flag_noCase(str) {
  var regNoCase = /pattern/i; // search for 'pattern' regardless of case
  var matchNoCase = str.match(regNoCase);
  console.log('/pattern/i:', matchNoCase);
}

function flag_global(str) {
  var regGlobal = /pattern/g; // search for 'pattern' across entire string
  var matchGlobal = str.match(regGlobal);
  console.log('/pattern/g:', matchGlobal);
}

function flag_noCaseGlobal(str) {
  var regNoCaseGlobal = /pattern/ig; // search for 'pattern' regardless of case across entire string
  var matchNoCaseGlobal = str.match(regNoCaseGlobal);
  console.log('/pattern/ig:', matchNoCaseGlobal);
}

function flag_multi(strMulti) {
  var regMulti = /pattern$/gm; // search for ending in 'pattern' across all lines regardless of ^ and $ (see Anchors section)
  var matchMulti = strMulti.match(regMulti);
  console.log('/pattern$/gm:', matchMulti);
}

function flag_unicode(str) {
  var regUnicode = /😄/u; // search for characters with multiple code units
  var matchUnicode = str.match(regUnicode);
  console.log('/😄/u:', matchUnicode);
}

function flag_sticky(str) {
  var regSticky = /pattern/iy; // search for 'pattern' only at the location of .lastIndex
  regSticky.lastIndex = 67;   // position 67 of the str is "pattern there are in this string 😄"
  var matchSticky = str.match(regSticky);
  console.log('/pattern/iy, 67:', matchSticky);
}