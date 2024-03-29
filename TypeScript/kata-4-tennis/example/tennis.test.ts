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
    scorePoints(game, 'player1', 4)
    expect(game.score).toEqual('game player1')
  })

  it('shows game player2 when player2 scores 4 times', () => {
    const game = new TennisGame('player1', 'player2')
    scorePoints(game, 'player2', 4)
    expect(game.score).toEqual('game player2')
  })

  it('throws an error on unknown player', () => {
    const game = new TennisGame('player1', 'player2')
    expect(() => game.point('intruder')).toThrow('Unknown player')
  })

  it.each(['player1', 'player2'])('does not allow scoring when game is won (%s)', (name) => {
    const game = new TennisGame('player1', 'player2')
    scorePoints(game, name, 4)
    expect(() => game.point(name)).toThrow('Game finished')
  })

  it('shows deuce when both players score 3 times', () => {
    const game = new TennisGame('player1', 'player2')
    scorePoints(game, 'player1', 3)
    scorePoints(game, 'player2', 3)
    expect(game.score).toEqual('deuce')
  })

  it.each(['player1', 'player2'])('shows advantage %s when they score in deuce', (name) => {
    // given a tennis game in deuce
    const game = new TennisGame('player1', 'player2')
    scorePoints(game, 'player1', 3)
    scorePoints(game, 'player2', 3)
    // when named player scores
    game.point(name)
    // then named player gets advantage
    expect(game.score).toEqual(`advantage ${name}`)
  })

  it('shows deuce if player1 scores when player2 has advantage', () => {
    // given a tennis game with advantage player2
    const game = new TennisGame('player1', 'player2')
    scorePoints(game, 'player1', 3)
    scorePoints(game, 'player2', 4)
    // when player1 scores
    game.point('player1')
    // then we're back in deuce
    expect(game.score).toEqual('deuce')
  })

  it('shows deuce if player2 scores when player1 has advantage', () => {
    // given a tennis game with advantage player1
    const game = new TennisGame('player1', 'player2')
    scorePoints(game, 'player2', 3)
    scorePoints(game, 'player1', 4)
    // when player2 scores
    game.point('player2')
    // then we're back in deuce
    expect(game.score).toEqual('deuce')
  })

  it('shows game player1 when player1 scores after advantage', () => {
    // given a tennis game with advantage player1
    const game = new TennisGame('player1', 'player2')
    scorePoints(game, 'player2', 3)
    scorePoints(game, 'player1', 4)
    // when player1 scores
    game.point('player1')
    // then player1 wins
    expect(game.score).toEqual('game player1')
  })

  it('shows game player2 when player2 scores after advantage', () => {
    // given a tennis game with advantage player2
    const game = new TennisGame('player1', 'player2')
    scorePoints(game, 'player1', 3)
    scorePoints(game, 'player2', 4)
    // when player2 scores
    game.point('player2')
    // then player2 wins
    expect(game.score).toEqual('game player2')
  })

  it('requires players with distinct names', () => {
    expect(() => new TennisGame('same', 'same')).toThrow('Players must have distinct names')
  })
})
