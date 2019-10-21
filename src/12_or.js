/* Differences in OR (|) */

export function ors() {
  var reg1 = /gr(a|e)y/g; // gray or grey (and the same as /gr[ae]y/g)
  var reg2 = /gra|ey/g; // gra or ey

  var str = "Do you prefer gray or grey?";
  var match1 = str.match(reg1);
  var match2 = str.match(reg2);

  console.log(str);
  console.log(`${reg1}`, match1);
  console.log(`${reg2}`, match2);
}