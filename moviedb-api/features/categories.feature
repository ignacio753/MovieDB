Feature: Categories

  Scenario: Viewing Categories
    When I authenticate for categories data
    Then I should find the response schema consistent for list of categories