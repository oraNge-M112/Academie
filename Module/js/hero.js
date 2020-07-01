class Hero {
	constructor(name, health, resource) {
		this.name = name;
		this.health = health;
		this.resource = resource;
	}
	mainAttack(anotherHero) {}
	secondaryAttack(anotherHero) {}
	receiveDamage(damage) {}
	isAlive() {
		return this.live > 0;
	}
}

export { Hero };
