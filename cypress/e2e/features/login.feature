Feature: User Login

    Scenario: Successful login with valid credentials
        Given the user is on the login page
        When the user enters valid username and password
        And the user clicks the login button
        Then the user should be redirected to the dashboard

    Scenario: Failed login with invalid credentials
        Given the user is on the login page
        When the user enters invalid username and password
        And the user clicks the login button
        Then an error message should be displayed
