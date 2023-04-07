export class TennisGame {
  private player1Name: string
  private player2Name: string
  private player1Score: number = 0
  private player2Score: number = 0

  get score(): string {
    const displayScores = ['love', '15', '30', '40', 'game']

    if (this.player1Score === 4) {
      return `game ${this.player1Name}`
    }
    if (this.player1Score === this.player2Score) {
      return `${displayScores[this.player1Score]} all`
    }

    return `${displayScores[this.player1Score]}-${displayScores[this.player2Score]}`
  }

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name
    this.player2Name = player2Name
  }

  point(playerName: string) {
    if (playerName === this.player1Name) {
      this.player1Score += 1
    } else {
      this.player2Score += 1
    }
  }
}
