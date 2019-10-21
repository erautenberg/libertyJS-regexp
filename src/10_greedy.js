
export function greedylazy() {
  greedy();
  lazy();
}

function greedy() {
  // try to search for all "..." in order to replace with '...' the greedy way
  var regGreedy = /".+"/g;
  var str = 'This demo is about "Regular Expressions" in "JavaScript"';

  // this will yield "Regular Expressions" in "JavaScript" instead of just "Regular Expressions"
  var greedyMatch = str.match(regGreedy);

  console.log(`${regGreedy}:`, greedyMatch);
}


function lazy() {
  // try to search for all "..." the lazy way
  var regLazy = /".+?"/g;
  var str = 'This demo is about "Regular Expressions" in "JavaScript"';

  var lazyMatch = str.match(regLazy);
  console.log(`${regLazy}:`, lazyMatch);
}