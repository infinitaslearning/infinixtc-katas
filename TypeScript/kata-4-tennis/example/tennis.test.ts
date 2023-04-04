import { TennisGame } from './tennis'

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

  it('has a value of 30, 0 when player1 scores 2 times', () => {
    const game = new TennisGame('Dali', 'Emma')
    game.point('Dali')
    game.point('Dali')
    expect(game.score).toEqual('30-love')
  })
})
