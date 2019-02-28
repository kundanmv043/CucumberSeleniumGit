Feature: Shout Feature
@tag1
Scenario: Voice Audible
  Given Sean is 20 metres away {from} Lucia
  When sean shouts "free coffee"
  Then Lucia hears the message

@tag2  
 Scenario: Voice not Audible
  Given Sean is 200 metres away {from} Lucia
  When sean shouts "free coffee"
  Then Lucia can not hear the message 
  