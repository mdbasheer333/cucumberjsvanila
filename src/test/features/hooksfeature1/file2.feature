Feature: Cart Functionality 2

@sanity @regression @JIRA-1234 @flaky
Scenario: to edit an item to the cart
    When the user add an item to cart
    Then item should be available in cart
    When the user edits the the item in the cart
    Then item should be available in cart
