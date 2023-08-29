class Player {
  name;
  health;
  power;
  constructor(name) {
    this.name = name
    this.health = 100
    this.power = 10
  }

  setPower(power) {
    this.power = power
  }

  setHealth(health) {
    this.health = health
  }

  hit(power) {
    this.health -= power
  }

  useItem(item) {
    switch (item.id) {
      case 'health': {
        this.health += item.health
        break;
      }
      case 'power': {
        this.power += item.power
        break
      }
      default: {
        console.log('no item')
      }
    }
  }

  showStatus() {
    console.log(`Player Name : ${this.name}`)
    console.log(`Power : ${this.power}`)
    console.log(`Health : ${this.health}`)
  }
}


class ShootingGame {
  player1;
  player2;
  constructor(player1, player2) {
    this.player1 = player1
    this.player2 = player2
  }

  getRandomItem() {
    const number = [{ id: 'health', health: 10 }, { id: 'power', power: 10 }]
    return number[Math.floor(Math.random() * 2)]
  }

  start() {
    while (this.player1.health > 0 || this.player2.health > 0) {
      this.player1.useItem(this.getRandomItem())
      this.player2.useItem(this.getRandomItem())

      this.player1.hit(this.player2.power)
      this.player2.hit(this.player1.power)


      this.player1.showStatus()
      this.player2.showStatus()
      console.log("-----------------------------------------")

      if (this.player1.health <= 0) {
        return `${this.player2.name} win -> health : ${this.player2.health}`
      }
      if (this.player2.health <= 0) {
        return `${this.player1.name} win -> health : ${this.player1.health}`
      }
    }
  }
}


const player1 = new Player('putu')
const player2 = new Player('gojo')
const game = new ShootingGame(player1, player2)

const result = game.start()
console.log(result)
