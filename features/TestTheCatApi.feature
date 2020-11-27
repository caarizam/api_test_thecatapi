Feature: The Cat Api testing

  I want to check the different EndPoints for the Cat Api

  Scenario Outline: Checking the searching breeds
    Given A valid breed "<breed>"
    When The request is performed
    Then The client should seed a valid response with:
      | <id> | <name> | <origin> |

    Examples: Data breeds
      | breed            | id   | name             | origin        |
      | American Bobtail | abob | American Bobtail | United States |
      | Abyssinian       | abys | Abyssinian       | Egypt         |
      | American Curl    | acur | American Curl    | United States |

  Scenario Outline: Creating and checking a vote
    Given The vote is created successfully
      | <imageId> | <subId> | <value> |
    When The client request for a vote "<imageId>"
    Then The client should seed a valid vote with value <value>
    And The client should be able to delete the vote

    Examples: Data for votes
      | imageId   | subId       | value |
      | vasf00110 | my-user-101 | 1     |
      | vasf00202 | my-user-102 | 0     |
      | vasf00101 | my-user-103 | 1     |
      | vasf00101 | my-user-104 | 0     |
