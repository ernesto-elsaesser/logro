class Game {

  constructor() {
    this.level = 1

    this.health = 10
    this.wisdom = 10
	this.power = 10

    this.spellBook = new SpellBook()
  }

  exec(cmd) {
  	if (cmd == "START") {
		return nextEncounter()
	}



    return "NOTHING HAPPENS."
  }

  nextEncounter() {
    this.hp = this.health * 5
  	this.creature = new Creature()
	return "AS YOU PROCEED, YOU ENCOUNTER " + this.creature.name + "! WHAT DO YOU DO?"
  }

  fight(cmd) {

	// train the skill you used
  }


  learn(cmd) {

  }

  levelUp() {
    this.level += 1
    return "YOU REACHED LEVEL " + this.level + ". WHICH STAT DO YOU WANT TO INCREASE?"
  }

  tellStats() {
  	return "HEALTH " + this.health ", WISDOM
  }

  restore() {
  }

}

class Creature {

  constructor(hp, dmg) {
    this.hp = hp
    this.dmg = dmg
  }
}

