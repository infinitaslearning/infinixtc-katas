import { TennisGame } from './tennis'

describe('Tennis', () => {
  it('Starts with love-all', () => {
    const game = new TennisGame('Teun', 'Goderik')
    expect(game.score).toEqual('love-all')
  })
})
