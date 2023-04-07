type Mode = 'regular' | 'deuce' | 'game'

export class TennisGame {
  private readonly player1Name: string
  private readonly player2Name: string
  private player1Score: number = 0
  private player2Score: number = 0

  private mode(): Mode {
    if (this.player1Score >= 3 && this.player2Score >= 3) {
      if (Math.abs(this.player1Score - this.player2Score) < 2) {
        return 'deuce'
      } else {
        return 'game'
      }
    }

    if (this.player1Score === 4 || this.player2Score === 4) {
      return 'game'
    }

    return 'regular'
  }
  get score(): string {
    const displayScores = ['love', '15', '30', '40', 'game']
    const sameScore = this.player1Score === this.player2Score
    const leader = this.player1Score > this.player2Score ? this.player1Name : this.player2Name;

    // deuce section
    if (this.mode() === 'deuce') {
      if (sameScore) {
        return 'deuce'
      }
      return `advantage ${leader}`
    }

    // game section
    if (this.mode() === 'game') {
      return `game ${leader}`
    }

    // regular section
    if (sameScore) {
      return `${displayScores[this.player1Score]} all`
    }
    return `${displayScores[this.player1Score]}-${displayScores[this.player2Score]}`
  }

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name
    this.player2Name = player2Name
  }

  point(playerName: string) {
    if (this.mode() === 'game') {
      throw new Error('Game finished')
    }
    if (playerName === this.player1Name) {
      this.player1Score += 1
    } else if (playerName === this.player2Name) {
      this.player2Score += 1
    } else {
      throw new Error('Unknown player')
    }
  }
}
