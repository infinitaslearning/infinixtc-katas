class Score {
  public readonly points: [number, number]

  constructor(scorePlayer1: number, scorePlayer2: number) {
    this.points = [scorePlayer1, scorePlayer2]
  }
}

export class TennisGame {
  private _score = new Score(0, 0)
  private player1Name: string
  private player2Name: string

  get score(): Score {
    return this._score
  }

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name
    this.player2Name = player2Name
  }

  point(playerName: string) {
    if (playerName === this.player1Name) {
      this._score = new Score(15, 0)
    } else {
      this._score = new Score(0, 15)
    }
  }
}
