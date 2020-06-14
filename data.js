creatureData = {
	"player": [5, 5, 5, "YOU", "YOU", []],
	"rat": [2, 0, 0, "A RAT", "THE RAT", ["bite"]]
}

cast = {
	bite(c, t) {
		t.lostHealth += 1
		return c.name + " BITES YOU"
	},
	hit(c, t) {
		t.lostHealth += 1
		return "YOU HIT " + t.name
	},
	idle(c, t) {
		return c.name + " DOES NOTHING"
	}
}
