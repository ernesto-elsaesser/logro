
class Game {

  constructor() {
    this.hp = 3
    this.sp = 2
    this.mp = 1

    this.msg = "WELCOME"
  }

  exec(cmd) {
    this.hp -= 1
    this.msg = "HIT"
  }

}

