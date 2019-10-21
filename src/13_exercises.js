export function exercise1() {
  console.log('\nPROMPT 1');

  // We know the ENTIRE username must match the requirements, so let's start there:
  var username = /^$/;

  // We also know case does not matter
  username = /^$/i;

  // We know what characters are valid
  username = /^[a-z_][a-z0-9_]$/i

  // We know it needs between 3 and 16 characters
  username = /^[a-z_][a-z0-9_]{2,15}$/i

  var valid = "th1s_1s_my_name";
  var invalid = "0this-i$nt";

  var res1 = username.test(valid);
  var res2 = username.test(invalid);

  console.log(username);
  console.log(`${valid}:`, res1);
  console.log(`${invalid}:`, res2);
}

export function exercise2() {
  console.log('\nPROMPT 2');

  // We know the string needs to start with the title
  var names = /(Mr|Mrs|Ms|Dr)/g;

  // We know this must be followed by a period (don't forget to escape it!)
  names = /(Mr|Mrs|Ms|Dr)\./g;

  // Next we need a space, the first name, a space, and the last
  names = /(Mr|Mrs|Ms|Dr)\. ([a-zA-Z]+) ([a-zA-Z]+)/g;

  // This can actually be simplified
  names = /(Mr|Mrs|Ms|Dr)\. (([a-zA-Z]+) ?)+/g;

  var str = "Mr. Harry Potter, Ms. Hermione Granger, Mr. Ronald Weasley, Lord Voldemort, Mrs. Molly Weasley";

  var res = str.match(names);

  console.log(str);
  console.log(`${names}`, res);
}

export function exercise3() {
  console.log('\nPROMPT 3');

  // We might have to update our RegEx first
  var names = /(Mr|Mrs|Ms|Dr)\. ([a-zA-Z]+) ([a-zA-Z]+)/g;

  var str = "Mr. Harry Potter, Ms. Hermione Granger, Mr. Ronald Weasley, Lord Voldemort, Mrs. Molly Weasley";
  var str2 = str.replace(names, "$3, $2 $1.");

  // To see the different groups, we can run .exec on the RegEx
  // (the first element will be the entire match, the next elements are the groups)
  var groups = names.exec(str);

  console.log(str);
  console.log(`${names}:`, groups);
  console.log(str2);
}

export function exercise4() {
  console.log('\nPROMPT 4');

  // First, let's create strings for a few different test cases
  var test1 = "YouTube Beyonce";
  var test2 = "Search YouTube for Beyonce";
  var test3 = "Search for Beyonce on YouTube";
  var test4 = "Find Beyonce on YouTube";

  // Next, work on the `Youtube [QUERY]` case
  // First, we know that the word youtube should be the start of the pattern and only occur once, followed by one or more spaces
  var regex = /(youtube){1} */;
  // Whatever happens next in the utterance should be part of the query we are trying to save, and needs to be extracted, so make sure it is placed in parenthesis to make it a group
  regex = /^(youtube){1} *(.*)/;

  // Next, work on the `Search YouTube for [QUERY]`
  // First, add a `|` (or) sign in order to start the next pattern
  regex = /(^(youtube){1} *(.*))|/;
  // Next, we know that `search` is the first term we're looking for (though not necessarily a requirement), followed by at least one space
  regex = /(^(youtube){1} *(.*))|((search)? *)/;
  // Then we need `youtube `
  regex = /(^(youtube){1} *(.*))|((search)? *youtube *)/;
  // Next is `for `
  regex = /(^(youtube){1} *(.*))|((search)? *youtube *for *)/;
  // And lastly, we need the search query itself
  regex = /(^(youtube){1} *(.*))|((search)? *youtube *for *(.*))/;

  // The last utterance case is `Search for [QUERY] on YouTube` or `Find [QUERY] on YouTube`
  // Again, add a `|` (or) sign in order to start the next pattern
  regex = /^(youtube){1} *(.*)|(search)? *youtube *for *(.*)|/;
  // Similarly to the previous utterance, we start with search, but this time it could also be find
  regex = /^(youtube){1} *(.*)|(search)? *youtube *for *(.*)|(search|find)? */;
  // The word `for` is optional
  regex = /^(youtube){1} *(.*)|(search)? *youtube *for *(.*)|(search|find)? *(for)* */;
  // Next we need to save the actual search query
  regex = /^(youtube){1} *(.*)|(search)? *youtube *for *(.*)|(search|find)? *(for)* *(.*?) */;
  // Then we may have `on youtube` or just `youtube`
  regex = /^(youtube){1} *(.*)|(search)? *youtube *for *(.*)|(search|find)? *(for)* *(.*?) *(on)* *youtube/;

  // Now, we could go through and clean up our crazy capturing groups
  // The only infomration we really care about is the search query itself, so let's make everything else noncapturing
  regex = /^(?:youtube){1} *(.*)|(?:search)? *youtube *for *(.*)|(?:search|find)? *(?:for)* *(.*?) *(?:on)* *youtube/;

  // Lastly, we should ignore the case altogether, so we can add the `i` flag
  regex = /^(?:youtube){1} *(.*)|(?:search)? *youtube *for *(.*)|(?:search|find)? *(?:for)* *(.*?) *(?:on)* *youtube/i;

  var searchResults1 = regex.exec(test1); // Search Query will be in Group 3
  var searchResults2 = regex.exec(test2); // Search Query will be in Group 6
  var searchResults3 = regex.exec(test3); // Search Query will be in Group 10
  var searchResults4 = regex.exec(test4); // Search Query will be in Group 10

  console.log(regex);
  console.log(`${test1}:`, searchResults1);
  console.log(`${test2}:`, searchResults2);
  console.log(`${test3}:`, searchResults3);
  console.log(`${test4}:`, searchResults4);

}