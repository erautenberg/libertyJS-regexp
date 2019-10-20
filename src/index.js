import * as stepone from './1_create';
import * as steptwo from './2_methods';

function main() {

  // Step One: Creating a new RegEx
  console.log('\nCREATING A NEW REGEX');
  stepone.createRegExLong();
  stepone.createRegExShort();
  stepone.findPosition();

  // Step Two:
  console.log('\nMETHODS OF REGEX AND STRINGS');
  steptwo.methods();

}

main();
