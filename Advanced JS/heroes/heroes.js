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

class Rogue extends Hero {
  mainAttack(anotherHero) {
    let damage = 45
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
    this.resource += damage/20;
  }
}

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


console.log(yup)
console.log(jukk);
console.log(luke);
