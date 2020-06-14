class Game {

	constructor() {
		this.player = new Creature("player")
		this.generateSpellbook()
		this.nextCreature()
	}

	generateSpellbook() {
		this.spellbook = {
			"hit": "hit"
		}
	}

	intro() {
		var msgs = []
		msgs.append("THE MAGIC IN OUR WORLD HAS GROWN WEAK. THERE USED TO BE WORDS, POWERFUL WORDS - WORDS THAT WOULD FORGE EMPIRES AND DEVASTATE LANDSCAPES. BUT ALMOST ALL OF THEM HAVE BEEN LOST. THE ONES WE REMEMBER ARE SIMPLE AND XXX. TODO: LIST? YOUR SEARCH FOR ... HAS FINALLY BROUGHT YOU TO THE VALLEY OF MISTS, A PLACE THAT IS FULL OF SECRETS AND RELICTS OF ANCIENT TIMES ...")
		msgs.append("")
		msgs.append("AS YOU ENTER THE VALLEY, YOU ENCOUNTER " + this.creature.undefName + "!")
		msgs.append("CHOOSE YOUR WORDS")
		return msgs
	}

	exec(cmd) {
		var msgs = []
		// train health from being hit
		// train spell school from using spells
		// train power with every encounter

		const playerSpellId = this.spellBook[cmd]
		if (playerSpellId) {
			const msg = cast[playerSpellId](this.player, this.creature)
			msgs.append(msg)
		} else {
			msgs.append("NOTHING HAPPENS")
		}

		if (this.creature.isAlive()) {

			const creatureSpellId = this.creature.nextSpellId()
			const msg = cast[creatureSpellId](this.creature, this.player)
			msgs.append(msg)

			if (this.player.isAlive()) {
				msgs.append("CHOOSE YOUR NEXT WORDS")
			} else {
				msgs.append("YOU DIE")
				this.spellBook = {}
			}

		} else {

			msgs.append(this.creature.name + " DIES")
			if (this.lostHealth > 0) {
				msgs.append("YOU REST UNTIL YOUR WOUNDS HAVE FULLY HEALED")
				this.lostHealth = 0
			}

			const creatureId = selectNextCreatureId()
			this.creature = new Creature(creatureId)
			msgs.append("")
			msgs.append("AS YOU PROCEED, YOU ENCOUNTER " + this.creature.undefName + "!")
			msgs.append("CHOOSE YOUR WORDS")
		}
		

		return msgs
	}

	selectNextCreatureId() {
		// TODO: implement
		return "rat"
	}

}


class Creature {

	constructor(id) {
		const data = creatureData[id]

		this.health = data[0]
		this.wisdom = data[1]
		this.power = data[2]

		this.undefName = data[3]
		this.name = data[4]
		this.spellIds = data[5]

		this,lostHealth = 0
	}

	isAlive() {
		return this.lostHealth < this.health
	}

	nextSpellId() {
		if (!this.isAlive()) {
			return
		}

		// TODO: random spell ID
		return this.spellIds[0]
	}
}

