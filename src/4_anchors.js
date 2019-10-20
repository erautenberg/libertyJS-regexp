/* Anchors: ^, $  */

export function anchors() {
  // The special characters ^ and $ are called anchors, and match at the beginning and end of text, respectively

  var start = /^First/g; // check if "First" is at the beginning of the string
  var end = /Fourth$/g; // check if "Fourth" is at the end of the string

  // even though Fourth is twice, only the one at the end will be a match
  var str1 = "First Second Third Fourth Fourth";
  printAnchors(str1, start, end);

  var str2 = "Fourth Fourth Third Second First";
  printAnchors(str2, start, end);
}

function printAnchors(str, start, end) {
  console.log(str);
  var startTest = str.search(start);
  console.log(`${start}:`, startTest);
  var endTest = str.search(end);
  console.log(`${end}:`, endTest);
}