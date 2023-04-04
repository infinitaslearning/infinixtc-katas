export class TennisGame {
  private _score: string = 'love-all'

  get score(): string {
    return this._score
  }

  constructor(player1Name: string, player2Name: string) {}
}
