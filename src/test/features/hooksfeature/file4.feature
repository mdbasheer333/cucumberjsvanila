Feature: Cart Functionality 4

Scenario: to replace an item to the cart
    When the user add an item to cart
    Then item should be available in cart
    When the user remove the item from cart
    Then item should not be available in cart
