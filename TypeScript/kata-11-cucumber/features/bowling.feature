Feature: Bowling scoring
  Let's play bowling!

  Scenario: No pins knocked down
    Given a new game
    And 20 gutter rolls
    When I score the game
    Then the score should be 0

  Scenario: Always hit 1 pin
    Given a new game
    And 20 rolls of 1 pin
    When I score the game
    Then the score should be 20

  Scenario: Always hit 1 pin, but miss the last roll
    Given a new game
    And 19 rolls of 1 pin
    And 1 gutter roll
    When I score the game
    Then the score should be 19
