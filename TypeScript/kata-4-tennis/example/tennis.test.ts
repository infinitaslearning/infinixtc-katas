import { TennisGame } from './tennis'

function scorePoints(game: TennisGame, name: string, points: number): void {
  for (let i = 0; i < points; i++) {
    game.point(name)
  }
}

describe('Tennis', () => {
  it('starts with love all', () => {
    const game = new TennisGame('Teun', 'Goderik')
    expect(game.score).toEqual('love all')
  })

  it('shows 15-love when player one scores once', () => {
    const game = new TennisGame('Teun', 'Goderik')
    game.point('Teun')
    expect(game.score).toEqual('15-love')
  })

  it('shows love-15 when player two scores once', () => {
    const game = new TennisGame('Teun', 'Goderik')
    game.point('Goderik')
    expect(game.score).toEqual('love-15')
  })

  it('works for arbitrary player names', () => {
    const game = new TennisGame('Dali', 'Emma')
    game.point('Dali')
    expect(game.score).toEqual('15-love')
  })

  it('shows 30-love when player1 scores 2 times', () => {
    const game = new TennisGame('Dali', 'Emma')
    game.point('Dali')
    game.point('Dali')
    expect(game.score).toEqual('30-love')
  })

  it('shows 40-love when player1 scores 3 times', () => {
    const game = new TennisGame('Dali', 'Emma')
    scorePoints(game, 'Dali', 3)
    expect(game.score).toEqual('40-love')
  })

  it('shows 15 all when player1 and player2 score once', () => {
    const game = new TennisGame('Dali', 'Emma')
    game.point('Dali')
    game.point('Emma')
    expect(game.score).toEqual('15 all')
  })

  it('shows game player1 when player1 scores 4 times', () => {
    const game = new TennisGame('player1', 'player2')
    scorePoints(game, 'player1', 4 )
    expect(game.score).toEqual('game player1')
  })
})
