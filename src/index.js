import * as step1 from './1_create';
import * as step2 from './2_methods';
import * as step3 from './3_flags';
import * as step4 from './4_anchors';
import * as step5 from './5_setsranges';
import * as step6 from './6_characters';
import * as step7 from './7_escaping';
import * as step8 from './8_lengths';

function showStep(step) {
  switch (step) {
    case 1:
    default:
      // Step One: Creating a new RegEx
      console.log('\nCREATING A NEW REGEX\n\n');
      step1.createRegEx();
      break;

    case 2:
      // Step Two: Methods of RegEx and Strings
      console.log('\nMETHODS OF REGEX AND STRINGS\n\n');
      step2.methods();
      break;

    case 3:
      // Step Three: Flags
      console.log('\nFLAGS\n\n');
      step3.flags();
      break;

    case 4:
      // Step Four: Flags
      console.log('\nANCHORS\n\n');
      step4.anchors();
      break;

    case 5:
      // Step Five: Sets and Ranges
      console.log('\nSETS AND RANGES\n\n');
      step5.setsranges();
      break;

    case 6:
      // Step Six: Character Sets
      console.log('\nCHARACTER SETS\n\n');
      step6.characters();

    case 7:
      // Step Seven: Escaping Special Characters
      console.log('\nESCAPING SPECIAL CHARACTERS\n\n');
      step7.special();

    case 8:
        // Step Eight: Lengths
        console.log('\nLENGTHS\n\n');
        step8.lengths();

  }
}

showStep(8);
