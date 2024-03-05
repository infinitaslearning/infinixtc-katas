Feature: Bowling scoring
  Let's play bowling!

  Background:
    Given a new game

  Scenario: No pins knocked down
    Given 20 gutter rolls
    When I score the game
    Then the score should be 0

  Scenario: Always hit 1 pin
    Given 20 rolls of 1 pin
    When I score the game
    Then the score should be 20

  Scenario: Always hit 1 pin, but miss the last roll
    Given 19 rolls of 1 pin
    And 1 gutter roll
    When I score the game
    Then the score should be 19
