/* Capturing Groups */

groups();

export function groups() {
  console.log('\nGROUPS\n\n');

  // capturing();
  noncapturing();
}

function capturing() {
  var regex = /(\w+), (\w+)/g; // this will look for a string that follows the "word, word" format
  var str = "LastName, FirstName"; // let's make this FirstName LastName
  console.log(str);

  // use .exec to view the array of groups (element 0 is the match, 1-N are the groups)
  var groups = regex.exec(str);
  // console.log(`${regex}:`, groups);

  // The matches can be referred to as $1, $2, etc.
  // where the number corresponds to the order in which the group matches were found
  // The entire match can be referenced with $&
  var repl = "$2 $1";
  var str2 = str.replace(regex, repl);
  // console.log(`${repl}:`, str2);
}

function noncapturing() {
    // this will allow you to apply ranges and quanitfiers to a group without actually saving it
    var regex = /(?:ha){1,2}/g;
    var str = "haha";
    console.log(str);

    var nogroups = regex.exec(str);
    console.log(`${regex}:`, nogroups);
}