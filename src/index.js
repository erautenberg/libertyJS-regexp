export * from './1_create';
export * from './2_methods';
export * from './3_flags';
export * from './4_anchors';
export * from './5_setsranges';
export * from './6_characters';
export * from './7_escaping';
export * from './8_lengths';
export * from './9_quantifiers';
export * from './10_greedy';
export * from './11_groups';
export * from './12_or';
export * from './13_exercises';

populateCodeBlocks();

// These functions just create strings that can be used in the <code> blocks in the HTML
// and be formatted nicely with HighlightJS :)
function populateCodeBlocks() {
  renderCreate();
  renderMethods();
  renderFlags();
  renderAnchors();
  renderSets();
  renderCharacters();
  renderEscaping();
  renderLengths();
  renderQuantifiers();
  renderGreedyLazy();
  renderGroups();
  renderOrs();
  renderExercises()
}

function renderCreate() {
  // Creating a Regular Expression
  document.getElementById('create-long').innerHTML = `  var regLong = new RegExp("pattern", "g");`;
  document.getElementById('create-short').innerHTML = `  var regShort1 = /pattern/;
  var regShort2 = /pattern/g;`;
}

function renderMethods() {
  // Methods of RegEx and Strings
  document.getElementById('methods-explanation').innerHTML = `  regex.test(str);    // returns true or false if the regular expression finds matches in a string

  str.search(regex);  // returns the position of the first match (-1 if no match)

  str.match(regex);   // returns array of matches (null if no matches)

  str.split(regex);   // separates the string on a given delimiter

  str.replace(regex); // searches a string and replaces all instances of requested string with new string

  regex.exec(str);    // returns an array containing the match (element 0) and the groups generated (elements 1-9)`;

  document.getElementById('methods-test').innerHTML = `  var regex = /pattern/g;
  var str = "Let's find the pattern 'pattern' in this string.";

  var test = regex.test(str);
  var position = str.search(regex);
  var match = str.match(regex);
  var split = str.split(regex);
  var replace = str.replace(regex, "PATTERN");
  var exec = regex.exec(str);`;
}

function renderFlags() {
  document.getElementById('flags-explanation').innerHTML = `  i // case-insensitive (/pattern/ will return results for "pattern" or "PATTERN" or "pATteRn")
  g // global (search for all matches in a string instead of just one)
  m // multiline (searches across multiple lines even when the ^ or $, or start and end of text, characters are used)
  u // unicode support (important for characters encoded with more than 2 bytes--like emojis)
  y // enables sticky mode (the search returns only a match found at the .lastIndex attribute)`;

  document.getElementById('flags-test').innerHTML = `  var regNoCase = /pattern/i;        // search for 'pattern' regardless of case
  var regGlobal = /pattern/g;        // search for 'pattern' across entire string
  var regNoCaseGlobal = /pattern/ig; // search for 'pattern' regardless of case across entire string
  var regMulti = /pattern$/gm;       // search for ending in 'pattern' across all lines regardless of ^ and $ (see Anchors section)
  var regUnicode = /😄/u;            // search for characters with multiple code units
  var regSticky = /pattern/y;        // search for 'pattern' only at the location of .lastIndex
  regSticky.lastIndex = 67;

  var str = "Let's search for 'paTtERn' to see how many instances of PATTERN or pattern there are in this string 😄";
  var strMulti = \`pattern
    pattern\`;`;
}

function renderAnchors() {
  document.getElementById('anchors').innerHTML = `  var str1 = "First Second Third Fourth Fourth";
  var str2 = "Fourth Fourth Third Second First";
  var start = /^First/g; // check if "First" is at the beginning of the string
  var end = /Fourth$/g; // check if "Fourth" is at the end of the string`;
}

function renderSets() {
  document.getElementById('sets-set').innerHTML = `  var abc = /[abc]/g; // essentially a or b or c`;

  document.getElementById('sets-range').innerHTML = `  var def = /[d-f]/g; // d or e or f`;
}

function renderCharacters() {
  document.getElementById('characters-explanation').innerHTML = `  \\d // any digit character (0-9)
  \\w // any alphanumeric character (a-z, A-Z, 0-9, and some symbols)
  \\s // any whitespace character (space, tab, etc.)
  \\D // any NON-digit character
  \\W // any NON-alphanumeric character
  \\S // any NON-whitespace character
  .  // any character that isn't a newline (\\n)`;

  document.getElementById('characters-test').innerHTML = `  var str = "This contains all 6 types of characters.";

  var nums = /\\d/g;     // search for any digits
  var words = /\\w/g;    // search for any word characters
  var space = /\\s/g;    // search for whitespaces
  var nonNums = /\\D/g;  // search for non digits
  var nonWords = /\\W/g; // search for non word characters
  var nonSpace = /\\S/g; // search for non white spaces
  var all = /./g;       // search for any non newline character`;

  document.getElementById('characters-boundary').innerHTML = `  \\b // any word boundary
  \\B // any NON-word boundary`;

  document.getElementById('characters-boundary-test').innerHTML = `  var boundaryStr = "Java has a boundary, but JavaScript does not";

  var boundary = /\\bJava\\b/g;
  var nonBoundary = /Java\\B/g;`;
}

function renderEscaping() {
  document.getElementById('escaping').innerHTML = `  var reg = /[\\.\\?\\!\\(\\)]/g;`;
}

function renderLengths() {
  document.getElementById('lengths').innerHTML = `  var str = "Valid Dates: 06-08-2018, 6-8-2018, 06-8-2018, Invalid Date: 6-8-18";
  // a digit of length 1-2, a digit of length 1-2, and a digit of length 4
  var reg = /\\d{1,2}-\\d{1,2}-\\d{4}/g`;
}

function renderQuantifiers() {
  document.getElementById('quantifiers-explanation').innerHTML = `  + // one or more
  ? // zero or one
  * // zero or more`;

  document.getElementById('quantifiers-test').innerHTML = `  var str1 = "no nums";
  var str2 = "12345";

  var plus = /\\d+/g;     // digit occurs at least once
  var question = /\\d?/g; // digit occurs no more than once
  var star = /\\d*/g;     // digit does not occur or occurs infinitely many times`;
}

function renderGreedyLazy() {
  document.getElementById('greedy').innerHTML = `  // try to search for all "..." in order to replace with '...' the greedy way
  var regGreedy = /".+"/g;
  var str = 'This demo is about "Regular Expressions" in "JavaScript"';`;

  document.getElementById('lazy').innerHTML = `  // try to search for all "..." the lazy way
  var regLazy = /".+?"/g;
  var str = 'This demo is about "Regular Expressions" in "JavaScript"';`;
}

function renderGroups() {
  document.getElementById('groups-test').innerHTML = `  var reg = /(\\w+), (\\w+)/g; // this will look for a string that follows the "word, word" format
  var str = "LastName, FirstName"; // let's make this FirstName LastName`;

  document.getElementById('groups-replace').innerHTML = `  var repl = "$2 $1";
  var str2 = str.replace(reg, repl);`;

  document.getElementById('groups-noncapture').innerHTML = `  // this will allow you to apply ranges and quanitfiers to a group without actually saving it
  var regex = /(?:ha){1,2}/g;
  var str = "haha";`
}

function renderOrs() {
  document.getElementById('ors-explanation').innerHTML = `  (a|b) // essentially the same as [ab], but allows you access to the group
  a|b   // also means a or b, but does not allow you access to the group`;

  document.getElementById('ors-test').innerHTML = `  var reg1 = /gr(a|e)y/g; // gray or grey (and the same as /gr[ae]y/g)
  var reg2 = /gra|ey/g; // gra or ey
  var str = "Do you prefer gray or grey?";`;
}

function renderExercises() {
  document.getElementById('exercises-1').innerHTML = `  var valid = "th1s_1s_my_name";
  var invalid = "0this-i$nt";`;

  document.getElementById('exercises-2').innerHTML = `  var str = "Mr. Harry Potter, Ms. Hermione Granger, Mr. Ronald Weasley, Lord Voldemort, Mrs. Molly Weasley";`;

  document.getElementById('exercises-3').innerHTML = `  var str = "Mr. Harry Potter, Ms. Hermione Granger, Mr. Ronald Weasley, Lord Voldemort, Mrs. Molly Weasley";`;

  document.getElementById('exercises-4').innerHTML = `  const topic = "Puppies";
  var test1 = \`YouTube \${topic}\`;
  var test2 = \`Search YouTube for \${topic}\`;
  var test3 = \`Search for \${topic} on YouTube\`;
  var test4 = \`Find \${topic} on YouTube\`;`;
}