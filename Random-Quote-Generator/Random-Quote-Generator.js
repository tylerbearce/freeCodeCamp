// User Story #6: On first load, my quote machine displays a random quote in the element with id="text".

// User Story #7: On first load, my quote machine displays the random quote's author in the element with id="author".

// User Story #8: When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.

// User Story #9: My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.

// User Story #10: I can tweet the current quote by clicking on the #tweet-quotea element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.

const quoteFile = [
   {
    text: "We all make choices in life, but in the end our choices make us.",
    author: "Andrew Ryan, Bioshock"
    },
  {
    text: "Get over here!",
    author: "Scorpion, Mortal Kombat"
  },
  {
    text: "What is better? To be born good or to overcome your evil nature through great effort?",
    author: "Paarthurnax, Elder Scrolls V: Skyrim"
  },
  {
    text: "The right man in the wrong place can make all the difference in the world.",
    author: "G-Man, Half-Life 2"
  },
  {
    text: "Stand in the ashes of a trillion dead souls, and asks the ghosts if honor matters. The silence is your answer.",
    author: "Javik, Mass Effect 3"
  },
  {
    text: "Bring me a bucket, and I'll show you a bucket!",
    author: "Psycho, Borderlands 2"
  },
  {
    text: "Wanting something does not give you the right to have it.",
    author: "Ezio Auditore, Assassin's Creed 2"
  },
  {
    text: "Even in dark times, we cannot relinquish the things that make us human.",
    author: "Khan, Metro 2033"
  },
  {
    text: "How many are there in you? Whose hopes and dreams do you encompass? Could you but see the eyes in your own, the minds in your mind, you would see how much we share.",
    author: "Vortigaunt, Half-Life 2"
  },
  {
    text: "The healthy human mind doesn't wake up in the morning thinking this is its last day on Earth. But I think that's a luxury, not a curse. To know you're close to the end is a kind of freedom. Good time to take... inventory.",
    author: "Captain Price, Call of Duty: Modern Warfare 2"
  }
]

var index;

function updateQuote(){
  //Generate a new quote.
  let newIndex = Math.floor(Math.random() * quoteFile.length);
  
  //Make sure the generated quote is not the same as the previous quote.
  while (newIndex == index) {
    newIndex = Math.floor(Math.random() * quoteFile.length);
  }

  //Update variables with new quote data.
  index = newIndex;
  let quoteText = quoteFile[index].text;
  let quoteAuthor = quoteFile[index].author;

  //Update html with quote data.
  document.getElementById('text').innerHTML = quoteText;
  document.getElementById('author').innerHTML = quoteAuthor;
}