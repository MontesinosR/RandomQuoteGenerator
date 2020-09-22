// FOLLOWING THE PROJECT GUIDE.

//1) Create the Quotes array, this should be an object array. 


const quotes = [
    {
        quote: 'If more information was the answer, then we\'d all be billionaires with perfect abs.', 
        source: 'Derek Sivers',
        citation: 'The Tim Ferriss Show - Podcast.',
},
    {
        quote: "We all die. The goal isn't to live forever, the goal is to create something that will.",
        source: 'Chuck Palahniuk',
        citation: 'Diary.'
},
    {
        quote: '...But the human tongue is a beast that few can master. It strains constantly to break out of its cage, and if it is not tamed, it will tun wild and cause you grief.',
        source: 'Robert Greene',
        citation: 'The 48 Laws of Power',
},
    {
        quote: 'Your visions will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.', 
        source: 'Carl Gustav Jung',
        citation: 'N.D.'
},
    {
        quote: 'Don’t just pay attention to your job, pay attention to how your job will be done if you are no longer around.',
        source: 'Ray Dalio',
        citation: 'Principles: Life and Work',
}
]
                                        

//2) The getRandomQuote function:
/* This function needs to accomplish three basic tasks. Generate a random number, use the
random number to grab a quote object from the quotes array, and return the random quote
object. */

function getRandomQuote (quotes) {
  for (let i = 0; i < quotes.length; i++) { // generate a random number between 0 and the last index in the array parameter
    return quotes[i]; // use the random number and box notation to grab a random item from the quotes array
  } // return the random item
} 

//3) The printQuote function:
/* This function needs to call getRandomQuote and store it in a variable. And then using the
properties in the quote object stored in the new variable, conditionally generate the HTML
string using the template in the project instructions as your guide. Lasly, set the innerHTML of
.quotebox to equal the complete HTML string. */


// create a variable that calls the getRandomQuote() function
var printQuote = getRandomQuote(quotes);
// create a variable that initiates your HTML string
var printQuoteStep2 = document.getElementById('main').innerHTML = 
`
  <p>${getRandomQuote[quotes]}</p>
  <p>${getRandomQuote[source]}</p>
  <p>${getRandomQuote[citation]}</p>
`;
// using the template in the project instructions, add the two default quoteproperties, quote and source
// if there is a quote.citation property, add it the string
// if there is a quote.year property, add it the string
// close the string with the necessary closing HTML tags
// set the innnerHTML of the .quote-box to the complete HTML string

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

//Pro Tip:
/* If you’re not seeing the results you expect, try using the console.log() method to log variables
and values to the console to get an idea of what your code is actually doing. 

////////////////////////////////////
///HOW TO SUCCEED AT THIS PROJECT///
////////////////////////////////////

Here are the things you need to do pass this project. Make sure you complete them before you
submit. To help you, we’ve put together this guide that links each step directly to helpful
resources.

❏ Create an array of objects to hold the data for your quotes. Name the array quotes .
  ❏ Related video: What is an array?
  ❏ Related video: Mixing and Matching Arrays and Objects

❏ Each quote object in the quotes array should have the following properties:
  ❏ A quote and source property which contains a string.
  ❏ An optional citation and year property.
    ❏ Related video: The Object Literal
    ❏ Related video: Javascript Booleans
  
❏ Create a function named getRandomQuote and inside that function:
  ❏ Generate a random number.
  ❏ Uses it to select a quote object from the quotes array with box notation.
  ❏ Return the randomly selected quote object.
    ❏ Related video: Introducing Functions
    ❏ Related practice: Practice Basic Javascript Functions
    ❏ Related video: Create a random number
    ❏ Related video: Getting Information From a Function

❏ Create a function named printQuote and inside that function:
  ❏ Create a variable that stores the getRandomQuote function.
  ❏ Create a variable to store the HTML string that contains the quote and source
  properties using the example HTML in the instructions.
  ❏ Use separate conditional statements to add the citation and year properties
  only if they exist.
  ❏ Set innerHTML property of the 'quote-box' div to equal the HTML string.
    ❏ Related video: Getting Information From a Function
    ❏ Related video: Combining Strings
    ❏ Related video: Accessing Object Properties
    ❏ Related video: Boolean Values
    ❏ Related practice: If And Else Statements In Javascript
    ❏ Related practice: Practice Basic Variables

    */