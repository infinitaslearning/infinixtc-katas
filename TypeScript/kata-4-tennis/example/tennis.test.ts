import { TennisGame } from './tennis'

describe('Tennis', () => {
  it('starts with 0, 0', () => {
    const game = new TennisGame('Teun', 'Goderik')
    expect(game.score.points).toEqual([0, 0])
  })

  it('has a value of 15 0 when first player scores once', () => {
    const game = new TennisGame('Teun', 'Goderik')
    game.point('Teun')
    expect(game.score.points).toEqual([15, 0])
  })

  it('has a value of 0 15 when the seconds palyer scores once', () => {
    const game = new TennisGame('Teun', 'Goderik')
    game.point('Goderik')
    expect(game.score.points).toEqual([0, 15])

  })

  it('works for arbitrary player names', () => {
    const game = new TennisGame('Dali', 'Emma')
    game.point('Dali')
    expect(game.score.points).toEqual([15, 0])

  })
})
