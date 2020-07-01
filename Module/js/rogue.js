import { Hero } from "./hero.js";

class Rogue extends Hero {
	mainAttack(anotherHero) {
		let damage = 45;
		this.resource -= 15;
		this.health += 5;
		anotherHero.receiveDamage(damage);
	}
	secondaryAttack(anotherHero) {
		let damage = 15;
		this.resource -= 5;
		this.health += 1;
		anotherHero.receiveDamage(damage);
	}
	receiveDamage(damage) {
		this.health -= damage;
		this.resource += damage / 20;
	}
}

export { Rogue };
