/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` arrays - ÚLTIMO CAMBIO (SEPARAR EN DOS ARRAYS, ANTERIORMENTE ESTABA COMO UN ARRAY MULTIDIMENSIONAL)
***/

const quotes = [
  'If more information was the answer, then we\'d all be billionaires with perfect abs.', 
  "We all die. The goal isn't to live forever, the goal is to create something that will.",
  '...But the human tongue is a beast that few can master. It strains constantly to break out of its cage, and if it is not tamed, it will tun wild and cause you grief.',
  'Your visions will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.', 
  'Don’t just pay attention to your job, pay attention to how your job will be done if you are no longer around.',
]

const source = [
  'Derek Sivers',
  'Chuck Palahniuk',
  'Robert Greene, The 48 Laws of Power',
  'Carl Gustav Jung',
  'Ray Dalio, Principles: Life and Work.',
]


//`getRandomQuote` function

function getRandomQuote(quotes, source) {
  for (var i = 0; i < quotes.length; i++)
  return quotes[i]; 
    for (var i = 0; i < source.length; i++)
    return source[i]; 
}

/***
 * `printQuote` function
***/

const printQuote = document.getElementById('quote');
printQuote.innerHTML = `${getRandomQuote(quotes)}`;

const printSource = document.getElementById('source');
printSource.innerHTML = `${getRandomQuote(source)}`;


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


//var quoteResult = getRandomQuote(quotes + ' ' + source);
/*
// FIRST ATTEMPT 
function getRandomQuote() {
  for (let i = 0; i < length.quotes; i++) {
   getRandomQuote = (quotes[i].quote + (' ') + quotes[i].source);
  }
} 
*/

// SECOND ATTEMPT - Uncaught TypeError: Cannot read property 'quote' of undefined
/*function getRandomQuote(quotes) {
  var getQuote = (quotes[i].quote + (' ') + quotes[i].source);
  
  for (var i=0; i < quotes.length; i++) {
    for (var j=0; i < quotes[i].length; j++) {
      getQuote = quotes[i][j];
    }
  }
  return getQuote;
} */
