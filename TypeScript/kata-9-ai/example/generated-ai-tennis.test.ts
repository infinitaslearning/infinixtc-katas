import { vit, assert } from 'vitest';
import { TennisGame, RegularGame, DeuceGame, FinishedGame } from './TennisGame'; // Make sure to adjust the import path as needed

vit('TennisGame', () => {
  let tennisGame: TennisGame;

  vit.beforeEach(() => {
    tennisGame = new TennisGame('Player1', 'Player2');
  });

  vit('initial score should be "love all"', () => {
    assert.is(tennisGame.score, 'love all');
  });

  vit('point method should update the score correctly', () => {
    tennisGame.point('Player1');
    assert.is(tennisGame.score, '15 love');

    tennisGame.point('Player2');
    assert.is(tennisGame.score, '15 all');

    tennisGame.point('Player1');
    tennisGame.point('Player1');
    assert.is(tennisGame.score, '40 15');

    tennisGame.point('Player2');
    tennisGame.point('Player2');
    assert.is(tennisGame.score, 'deuce');
  });

  vit('should handle game ending correctly', () => {
    tennisGame.point('Player1');
    tennisGame.point('Player1');
    tennisGame.point('Player1');
    assert.is(tennisGame.score, 'game Player1');
  });
});

vit('DeuceGame', () => {
  let deuceGame: DeuceGame;

  vit.beforeEach(() => {
    deuceGame = new DeuceGame();
  });

  vit('initial score should be "deuce"', () => {
    assert.is(deuceGame.score, 'deuce');
  });

  vit('point method should update the score correctly', () => {
    deuceGame.point('Player1');
    assert.is(deuceGame.score, 'advantage Player1');

    deuceGame.point('Player2');
    assert.is(deuceGame.score, 'deuce');
  });
});

vit('FinishedGame', () => {
  let finishedGame: FinishedGame;

  vit.beforeEach(() => {
    finishedGame = new FinishedGame('Player1');
  });

  vit('score should be "game Player1"', () => {
    assert.is(finishedGame.score, 'game Player1');
  });

  vit('point method should throw an error', () => {
    assert.throws(() => {
      finishedGame.point('Player1');
    }, 'Game finished');
  });
});

vit.run();
