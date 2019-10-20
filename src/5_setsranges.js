/* Sets and Ranges */

function countChars(str, regex, char1, char2, char3) {
  console.log(str);
  console.log(regex);

  var match = str.match(regex);
  var count1 = 0, count2 = 0, count3 = 0;

  for (var i = 0; i < match.length; i++) {
    if (match[i] == char1)
      count1++;
    if (match[i] == char2)
      count2++;
    if (match[i] == char3)
      count3++;
  }

  console.log(`${char1}:`, count1);
  console.log(`${char2}:`, count2);
  console.log(`${char3}:`, count3);
}

export function setsranges() {
  // It's possible to query from a set of characters
  var abc = /[abc]/g; // essentially a or b or c
  var abcStr = "How many a's, b's, and c's are in this sentence?"
  countChars(abcStr, abc, 'a', 'b', 'c');

  // You can also create ranges
  var def = /[d-f]/g; // d or e or f
  var defStr = "How many d's, e's, and f's are in this sentence?"
  countChars(defStr, def, 'd', 'e', 'f');
}