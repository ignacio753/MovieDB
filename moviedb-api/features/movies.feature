Feature: Movies

  Scenario: Viewing Movies
    When I authenticate for movies data
    Then I should find the response schema consistent for movies index action