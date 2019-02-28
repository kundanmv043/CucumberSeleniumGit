Feature: Login Feature

@valid
Scenario Outline: A valid Scenario
     Given the url of the login page
     When admin user enters <username> as username
     And admin user enters <password> as passsword
     Then <result> user
     Examples:
    |username|password|result|
    |abc@gmail.com|abc123|valid|
    |kunal@email.com|123456|valid|

    
