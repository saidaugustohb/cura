Feature: loggin in cura health  

Scenario: successful login
 Given that Jhon is on the home page
  When his enter your credentials
  |user    |password          |
  |John Doe|ThisIsNotAPassword|
  |John    |ThisIsNotAPassword|
  Then he will see the title of Make Appointment


