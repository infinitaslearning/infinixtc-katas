class TennisGame {
  private player1Name: string;
  private player2Name: string;
  private player1Points: number;
  private player2Points: number;

  constructor(player1Name: string, player2Name: string) {
    if (player1Name === player2Name) {
      throw new Error('Players must have distinct names');
    }
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    this.player1Points = 0;
    this.player2Points = 0;
  }

  point(playerName: string): void {
    if (playerName === this.player1Name) {
      this.player1Points++;
    } else if (playerName === this.player2Name) {
      this.player2Points++;
    } else {
      throw new Error('Unknown player');
    }
  }

  get score(): string {
    if (this.player1Points >= 3 && this.player2Points >= 3) {
      if (this.player1Points === this.player2Points) {
        return 'deuce';
      } else if (this.player1Points - this.player2Points === 1) {
        return `advantage ${this.player1Name}`;
      } else if (this.player2Points - this.player1Points === 1) {
        return `advantage ${this.player2Name}`;
      }
    }

    const scores = ['love', '15', '30', '40'];

    if (this.player1Points >= 3 || this.player2Points >= 3) {
      if (this.player1Points === this.player2Points) {
        return 'deuce';
      } else if (this.player1Points - this.player2Points === 1) {
        return `advantage ${this.player1Name}`;
      } else if (this.player2Points - this.player1Points === 1) {
        return `advantage ${this.player2Name}`;
      }
    }

    const player1Score = scores[this.player1Points];
    const player2Score = scores[this.player2Points];

    return `${player1Score}-${player2Score}`;
  }
}

export { TennisGame };

