
export class TennisGame {
  private player1Name: string
  private player2Name: string
  private player1Score: number = 0
  private player2Score: number = 0

  get score(): string {
    let player1output = 'love';
    let player2output = 'love';
    if (this.player1Score !== 0) player1output = String(this.player1Score)
    if (this.player2Score !== 0) player2output = String(this.player2Score)
    if (this.player1Score + this.player2Score > 0) return `${player1output}-${player2output}`
    return 'love all'
  }

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name
    this.player2Name = player2Name
  }

  point(playerName: string) {
    if (playerName === this.player1Name) {
      this.player1Score += 15
    }
    else {
      this.player2Score = 15
    }
  }
}
