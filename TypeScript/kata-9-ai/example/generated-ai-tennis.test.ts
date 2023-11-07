import { TennisGame } from './ai-tennis' // Adjust the import path as needed
import { describe, it, beforeEach } from 'mocha'
import { expect } from 'chai'

describe('TennisGame', () => {
  let tennisGame: TennisGame

  beforeEach(() => {
    tennisGame = new TennisGame('Player1', 'Player2')
  })

  it('initial score should be "love all"', () => {
    expect(tennisGame.score).to.equal('love all')
  })

  it('point method should update the score correctly', () => {
    tennisGame.point('Player1')
    expect(tennisGame.score).to.equal('15 love')

    tennisGame.point('Player2')
    expect(tennisGame.score).to.equal('15 all')

    tennisGame.point('Player1')
    tennisGame.point('Player1')
    expect(tennisGame.score).to.equal('40 15')

    tennisGame.point('Player2')
    tennisGame.point('Player2')
    expect(tennisGame.score).to.equal('deuce')
  })

  it('should handle game ending correctly', () => {
    tennisGame.point('Player1')
    tennisGame.point('Player1')
    tennisGame.point('Player1')
    expect(tennisGame.score).to.equal('game Player1')
  })
})
