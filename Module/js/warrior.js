import { Hero } from "./hero.js";

class Warrior extends Hero {
	mainAttack(anotherHero) {
		let damage = 40;
		this.resource -= 20;
		anotherHero.receiveDamage(damage);
	}
	secondaryAttack(anotherHero) {
		let damage = 20;
		this.resource -= 10;
		anotherHero.receiveDamage(damage);
	}
	receiveDamage(damage) {
		if (damage > 2) {
			this.health -= damage;
		}
	}
}

export { Warrior };
