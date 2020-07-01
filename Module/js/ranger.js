import { Hero } from './hero.js';

class Ranger extends Hero {
	mainAttack(anotherHero) {
		this.resource -= 15;
		let damage = 35;
		anotherHero.receiveDamage(damage);
	}
	secondaryAttack(anotherHero) {
		this.resource -= 10;
		this.health += 5;
		let damage = 10;
		anotherHero.receiveDamage(damage);
	}
	receiveDamage(damage) {
		this.health -= damage;
	}
}

export { Ranger };
