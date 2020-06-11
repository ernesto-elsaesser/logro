
class Game {

  constructor() {
    this.hp_max = 3
    this.sp_max = 2
    this.mp_max = 1

    this.loc = "A GREEN VALLEY, FLANKED BY MOUNTAINS. THROUGH IT FLOWS A MUDDY STREAM."

    this.rest()
  }

  exec(cmd) {
    if (cmd == "👣") {
      return "YOU WALK ..."
    }

    if (cmd == "👁") {
      return "YOU SEE " + this.loc
    }

    if (cmd == "🗡") {
      self.hp -= 1
      return "YOU CUT YOURSELF."
    }

    if (cmd == "💤") {
      this.rest()
      return "YOU SLEEP ... WHEN YOU WAKE UP, YOU FEEL REPLENISHED."
    }

    return "NOTHING HAPPENS."
  }

  rest() {
    this.hp = this.hp_max
    this.sp = this.sp_max
    this.mp = this.mp_max
  }

}

class Creature {

  constructor(hp, dmg) {
    this.hp = hp
    this.dmg = dmg
  }
}

