class Score {
  public readonly points: [number, number]

  constructor(scorePlayer1: number, scorePlayer2: number) {
    this.points = [scorePlayer1, scorePlayer2]
  }
}

export class TennisGame {
  private _score = new Score(0, 0)

  get score(): Score {
    return this._score
  }

  constructor(player1Name: string, player2Name: string) { }

  point(playerName: string) {
    this._score = new Score(15, 0)
  }
}
