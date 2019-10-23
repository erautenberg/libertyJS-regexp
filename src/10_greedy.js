/* Greedy vs. Lazy Quantifiers */

// greedylazy();

export function greedylazy() {
  console.log('\nGREEDY VS. LAZY QUANTIFIERS\n\n');

  var str = 'This demo is about "Regular Expressions" in "JavaScript"';
  console.log(str);

  // greedy(str);
  // lazy(str);
}

function greedy(str) {
  // try to search for all "..." in order to replace with '...' the greedy way
  var regGreedy = /".+"/g;

  // this will yield "Regular Expressions" in "JavaScript" instead of just "Regular Expressions"
  var greedyMatch = str.match(regGreedy);

  console.log(`${regGreedy}:`, greedyMatch);
}


function lazy(str) {
  // try to search for all "..." the lazy way
  var regLazy = /".+?"/g;

  var lazyMatch = str.match(regLazy);
  console.log(`${regLazy}:`, lazyMatch);
}