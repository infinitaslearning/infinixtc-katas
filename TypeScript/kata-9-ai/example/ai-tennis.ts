class TennisGame {
  private player1Name: string;
  private player2Name: string;
  private player1Points: number;
  private player2Points: number;
  private gameFinished: boolean;

  constructor(player1Name: string, player2Name: string) {
    if (player1Name === player2Name) {
      throw new Error('Players must have distinct names');
    }
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    this.player1Points = 0;
    this.player2Points = 0;
    this.gameFinished = false;
  }

  point(playerName: string): void {
    if (this.gameFinished) {
      throw new Error('Game finished');
    }

    if (playerName === this.player1Name) {
      this.player1Points++;
    } else if (playerName === this.player2Name) {
      this.player2Points++;
    } else {
      throw new Error('Unknown player');
    }

    this.checkGameFinished();
  }

  private checkGameFinished(): void {
    if (this.player1Points >= 4 && this.player1Points - this.player2Points >= 2) {
      this.gameFinished = true;
    } else if (this.player2Points >= 4 && this.player2Points - this.player1Points >= 2) {
      this.gameFinished = true;
    }
  }

  get score(): string {
    if (this.gameFinished) {
      return `game ${this.player1Points > this.player2Points ? this.player1Name : this.player2Name}`;
    }

    if (this.player1Points >= 3 && this.player2Points >= 3) {
      if (this.player1Points === this.player2Points) {
        return 'deuce';
      } else if (Math.abs(this.player1Points - this.player2Points) === 1) {
        return `advantage ${this.player1Points > this.player2Points ? this.player1Name : this.player2Name}`;
      }
    }

    if (this.player1Points === this.player2Points) {
      return `${this.translateScore(this.player1Points)} all`;
    } else {
      return `${this.translateScore(this.player1Points)}-${this.translateScore(this.player2Points)}`;
    }
  }

  private translateScore(score: number): string {
    const scores = ['love', '15', '30', '40'];
    return scores[score];
  }
}

export { TennisGame };
