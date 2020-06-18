class Game {

	constructor() {
		this.player = new Creature("player")
		this.creature = new Creature("rat")
		this.generateSpellbook()
	}

	generateSpellbook() {
		// TODO: generate random mapping with words.js
		this.spellbook = {
			"hit": "hit"
		}
	}

	intro() {
		var msgs = []
		msgs.push("THE MAGIC IN OUR WORLD HAS GROWN WEAK. THERE USED TO BE WORDS, POWERFUL WORDS - WORDS THAT WOULD FORGE EMPIRES AND DEVASTATE LANDSCAPES. BUT ALMOST ALL OF THEM HAVE BEEN LOST. THE ONES WE REMEMBER ARE SIMPLE AND XXX. TODO: LIST? YOUR SEARCH FOR ... HAS FINALLY BROUGHT YOU TO THE VALLEY OF MISTS, A PLACE THAT IS FULL OF SECRETS AND RELICTS OF ANCIENT TIMES ...")
		msgs.push("")
		msgs.push("AS YOU ENTER THE VALLEY, YOU ENCOUNTER " + this.creature.undefName + "!")
		msgs.push("CHOOSE YOUR WORDS.")
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
			msgs.push(msg)
		} else {
			msgs.push("NOTHING HAPPENS.")
		}

		if (this.creature.isAlive()) {

			const creatureSpellId = this.creature.nextSpellId()
			const msg = cast[creatureSpellId](this.creature, this.player)
			msgs.push(msg)

			if (this.player.isAlive()) {
				msgs.push("CHOOSE YOUR NEXT WORDS.")
			} else {
				msgs.push("YOU DIE.")
				this.spellBook = {}
			}

		} else {

			msgs.push(this.creature.name + " DIES.")
			if (this.lostHealth > 0) {
				msgs.push("YOU REST UNTIL YOUR WOUNDS HAVE FULLY HEALED.")
				this.lostHealth = 0
			}

			const creatureId = selectNextCreatureId()
			this.creature = new Creature(creatureId)
			msgs.push("")
			msgs.push("AS YOU PROCEED, YOU ENCOUNTER " + this.creature.undefName + "!")
			msgs.push("CHOOSE YOUR WORDS.")
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

		this.lostHealth = 0
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

