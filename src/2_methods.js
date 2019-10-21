/* Methods of RegEx and Strings */

export function methods() {
  // There are 6 Javascript methods we will be using throughout this workshop:
  //   regex.test - returns true or false if the regular expression finds matches in a string
  //   str.search - returns the position of the first match (-1 if no match)
  //   str.match - returns array of matches (null if no matches)
  //   str.split - separates the string on a given delimiter
  //   str.replace - searches a string and replaces all instances of requested string with new string
  //   regex.exec - returns an array containing the match (element 0) and the groups generated (elements 1-9)

  var regex = /pattern/g;

  var str = "Let's find the pattern 'pattern' in this string.";
  console.log(str);

  // method_test(regex, str);
  // method_search(regex, str);
  // method_match(regex, str);
  // method_split(regex, str);
  // method_replace(regex, str);
  // method_exec(regex, str);
}

function method_test(regex, str) {
  var test = regex.test(str);
  console.log(`regex.test(str):`, test);
}

function method_search(regex, str) {
  var position = str.search(regex);
  console.log(`str.search(regex):`, position);
}

function method_match(regex, str) {
  var match = str.match(regex);
  console.log(`str.match(regex):`, match);
}

function method_split(regex, str) {
  var split = str.split(regex);
  console.log(`str.split(regex):`, split);
}

function method_replace(regex, str) {
  var replace = str.replace(regex, "PATTERN");
  console.log(`str.replace(regex, "PATTERN"):`, replace);
}

function method_exec(regex, str) {
  var exec = regex.exec(str);
  console.log(`regex.exec(str):`, exec);
}