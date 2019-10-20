import * as stepone   from './1_create';
import * as steptwo   from './2_methods';
import * as stepthree from './3_flags';
import * as stepfour  from './4_anchors';
import * as stepfive  from './5_setsranges';
import * as stepsix  from './6_characters';

function showStep(step) {
  switch (step) {
    case 1:
    default:
      // Step One: Creating a new RegEx
      console.log('\nCREATING A NEW REGEX\n\n');
      stepone.createRegEx();
      break;

    case 2:
      // Step Two: Methods of RegEx and Strings
      console.log('\nMETHODS OF REGEX AND STRINGS\n\n');
      steptwo.methods();
      break;

    case 3:
      // Step Three: Flags
      console.log('\nFLAGS\n\n');
      stepthree.flags();
      break;

    case 4:
      // Step Four: Flags
      console.log('\nANCHORS\n\n');
      stepfour.anchors();
      break;

    case 5:
      // Step Five: Sets and Ranges
      console.log('\nSETS AND RANGES\n\n');
      stepfive.setsranges();
      break;

    case 6:
      // Step Six: Character Sets
      console.log('\nCHARACTER SETS\n\n');
      stepsix.characters();
  }
}

showStep(6);
