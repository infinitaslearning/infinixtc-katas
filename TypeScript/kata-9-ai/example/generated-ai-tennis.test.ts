import { test } from 'vitest'
import { TennisGame, RegularGame, DeuceGame, FinishedGame } from './TennisGame' // Adjust the import path as needed

test('TennisGame', () => {
  let tennisGame: TennisGame

  test.beforeEach(() => {
    tennisGame = new TennisGame('Player1', 'Player2')
  })

  test('initial score should be "love all"', () => {
    assert.is(tennisGame.score, 'love all')
  })

  test('point method should update the score correctly', () => {
    tennisGame.point('Player1')
    assert.is(tennisGame.score, '15 love')

    tennisGame.point('Player2')
    assert.is(tennisGame.score, '15 all')

    tennisGame.point('Player1')
    tennisGame.point('Player1')
    assert.is(tennisGame.score, '40 15')

    tennisGame.point('Player2')
    tennisGame.point('Player2')
    assert.is(tennisGame.score, 'deuce')
  })

  test('should handle game ending correctly', () => {
    tennisGame.point('Player1')
    tennisGame.point('Player1')
    tennisGame.point('Player1')
    assert.is(tennisGame.score, 'game Player1')
  })
})

test('DeuceGame', () => {
  let deuceGame: DeuceGame

  test.beforeEach(() => {
    deuceGame = new DeuceGame()
  })

  test('initial score should be "deuce"', () => {
    assert.is(deuceGame.score, 'deuce')
  })

  test('point method should update the score correctly', () => {
    deuceGame.point('Player1')
    assert.is(deuceGame.score, 'advantage Player1')

    deuceGame.point('Player2')
    assert.is(deuceGame.score, 'deuce')
  })
})

test('FinishedGame', () => {
  let finishedGame: FinishedGame

  test.beforeEach(() => {
    finishedGame = new FinishedGame('Player1')
  })

  test('score should be "game Player1"', () => {
    assert.is(finishedGame.score, 'game Player1')
  })

  test('point method should throw an error', () => {
    assert.throws(() => {
      finishedGame.point('Player1')
    }, 'Game finished')
  })
})
