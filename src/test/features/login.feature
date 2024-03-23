Feature: Login Functionality

  Scenario Outline: Successful Login "<Iteration>"
    Given the user is on the login page
    When the user enters valid credentials "<UserName>" and "<Password>"
    And clicks the login button
    Then they should be redirected to the homepage
    # But not to the profile page
    And see a welcome message as "<Message>"
    Examples:
      | Iteration | UserName | Password  | Message      |
      | 1         | basheer  | bash@1234 | Welcome Bash |
      | 2         | john     | john@1234 | Welcome John |
      | 3         | paul     | paul@1234 | Welcome Paul |


# Scenario: All done
#   Given I am out shopping
#   * I have eggs
#   * I have milk
#   * I have butter
#   When I check my list
#   Then I don't need anything