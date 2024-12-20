Feature: Login Functionality

Scenario: to cancel an item to the cart
    When the user add an item to cart
    Then item should be available in cart
    When the user cancels the the item in the cart
    Then item should be cancelled in cart
