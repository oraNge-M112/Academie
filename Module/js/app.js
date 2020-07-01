import { Warrior } from './warrior.js';
import { Rogue } from './rogue.js';
import { Ranger } from './ranger.js';

var jukk = new Warrior('Jukk', 100, 100);
var luke = new Rogue('Luke', 100, 200);
var yup = new Ranger('Yupp', 100, 50);

jukk.mainAttack(luke);
luke.mainAttack(jukk);
jukk.secondaryAttack(luke);
luke.secondaryAttack(jukk);
luke.mainAttack(yup);
luke.secondaryAttack(jukk);
jukk.mainAttack(yup);

console.log(yup);
console.log(jukk);
console.log(luke);
