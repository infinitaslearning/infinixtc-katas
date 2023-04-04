import { TennisGame } from './tennis'

describe('Tennis', () => {
  it('starts with love-all', () => {
    const game = new TennisGame('Teun', 'Goderik')
    expect(game.score).toEqual('love-all')
  })

  it('prints 15-love when first player scores once', () => {
    const game = new TennisGame('Teun', 'Goderik')
    game.point('Teun')
    expect(game.score).toEqual('15-love')
  })
})
