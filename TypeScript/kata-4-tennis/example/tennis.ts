interface Game {
  readonly score: string
  point(playerName: string): Game
}

class FinishedGame implements Game {
  readonly score: string

  constructor(winner: string) {
    this.score = `game ${winner}`
  }

  point(playerName: string): Game {
    throw new Error('Game finished')
  }
}

class DeuceGame implements Game {
  private leader: string | null = null

  get score(): string {
    if (this.leader === null) {
      return 'deuce'
    }
    return `advantage ${this.leader}`
  }

  point(playerName: string): Game {
    if (playerName === this.leader) {
      return new FinishedGame(playerName)
    }
    if (this.leader === null) {
      this.leader = playerName
    } else {
      this.leader = null
    }
    return this
  }
}

class RegularGame implements Game {
  static DISPLAY_SCORES = ['love', '15', '30', '40']
  private readonly player1Name: string
  private readonly player2Name: string
  private player1Score: number = 0
  private player2Score: number = 0

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name
    this.player2Name = player2Name
  }

  get score(): string {
    if (this.player1Score === this.player2Score) {
      return `${RegularGame.DISPLAY_SCORES[this.player1Score]} all`
    }
    return `${RegularGame.DISPLAY_SCORES[this.player1Score]}-${RegularGame.DISPLAY_SCORES[this.player2Score]}`
  }

  point(playerName: string): Game {
    if (playerName === this.player1Name) {
      this.player1Score += 1
    } else if (playerName === this.player2Name) {
      this.player2Score += 1
    }

    if (this.player1Score === 3 && this.player2Score === 3) {
      return new DeuceGame()
    }
    if (this.player1Score === 4) {
      return new FinishedGame(this.player1Name)
    }
    if (this.player2Score === 4) {
      return new FinishedGame(this.player2Name)
    }
    return this
  }
}

export class TennisGame {
  private game: Game
  private readonly players: string[]

  constructor(player1Name: string, player2Name: string) {
    if (player1Name === player2Name) {
      throw new Error('Players must have distinct names')
    }
    this.game = new RegularGame(player1Name, player2Name)
    this.players = [player1Name, player2Name]
  }

  get score(): string {
    return this.game.score
  }

  point(playerName: string) {
    if (!this.players.includes(playerName)) {
      throw new Error('Unknown player')
    }
    this.game = this.game.point(playerName)
  }
}
