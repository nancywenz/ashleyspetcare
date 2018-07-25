//pic generator
var quotes = [
  'Dogs lives are too short. Their only fault, really.  -Agnes Sligh Turnbull',
  'Dogs are not our whole life, but they make our lives whole. -Roger Caras',
  'Some of my best leading men have been dogs and horses. -Elizabeth Taylor',
  'Dogs never bite me. Just Humans. -Marilyn Monroe',
  'Scratch a dog and you\'ll find a permanent job. -Franklin P. Jones',
  'Anybody who doesn\'t know what soap tastes like never washed a dog. -Franklin P. Jones',
  'Happiness is a warm puppy. -Charles Shultz',
  'A lot of shelter dogs are mutts like me. -Barack Obama', 
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
