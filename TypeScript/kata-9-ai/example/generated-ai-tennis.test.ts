import { TennisGame, RegularGame, DeuceGame, FinishedGame } from './ai-tennis' // Adjust the import path as needed
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

describe('DeuceGame', () => {
  let deuceGame: DeuceGame

  beforeEach(() => {
    deuceGame = new DeuceGame()
  })

  it('initial score should be "deuce"', () => {
    expect(deuceGame.score).to.equal('deuce')
  })

  it('point method should update the score correctly', () => {
    deuceGame.point('Player1')
    expect(deuceGame.score).to.equal('advantage Player1')

    deuceGame.point('Player2')
    expect(deuceGame.score).to.equal('deuce')
  })
})

describe('FinishedGame', () => {
  let finishedGame: FinishedGame

  beforeEach(() => {
    finishedGame = new FinishedGame('Player1')
  })

  it('score should be "game Player1"', () => {
    expect(finishedGame.score).to.equal('game Player1')
  })

  it('point method should throw an error', () => {
    expect(() => {
      finishedGame.point('Player1')
    }).to.throw('Game finished')
  })
})
