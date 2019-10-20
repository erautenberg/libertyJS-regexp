import * as stepone from './1_create';
import * as steptwo from './2_methods';
import * as stepthree from './3_flags';

function main() {

  // Step One: Creating a new RegEx
  console.log('\nCREATING A NEW REGEX');
  stepone.createRegExLong();
  stepone.createRegExShort();
  stepone.findPosition();

  // Step Two: Methods of RegEx and Strings
  console.log('\nMETHODS OF REGEX AND STRINGS');
  steptwo.methods();

  // Step Three: Flags
  console.log('\nFLAGS');
  stepthree.flags();
}

main();
