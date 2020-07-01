class Hero {
	name: string;
	health: number;
	resource: number;
	constructor(name: string, health: number, resource: number) {
		this.name = name;
		this.health = health;
		this.resource = resource;
	}
	mainAttack(anotherHero: Hero): void {}
	secondaryAttack(anotherHero: Hero): void {}
	receiveDamage(damage: number): void {}
	isAlive(): boolean {
		return this.health > 0;
	}
}
