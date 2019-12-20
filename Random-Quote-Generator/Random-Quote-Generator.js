let index, quoteText, quoteAuthor, tweetUrl;
let twitterUrl = "https://twitter.com/intent/tweet?text="

function updateQuote(){
  //Generate a new quote.
  let newIndex = Math.floor(Math.random() * quoteFile.length);
  
  //Make sure the generated quote is not the same as the previous quote.
  while (newIndex == index) {
    newIndex = Math.floor(Math.random() * quoteFile.length);
  }

  //Update variables with new quote data.
  index = newIndex;
  quoteText = quoteFile[index].text;
  quoteAuthor = quoteFile[index].author;
  tweetUrl = `${twitterUrl}${quoteText} - ${quoteAuthor}`;

  //Update html with quote data.
  document.getElementById('text').innerHTML = `"${quoteText}"`;
  document.getElementById('author').innerHTML = `-${quoteAuthor}`;
  document.getElementById('tweet-quote').setAttribute("href", tweetUrl);
}

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
  },
  {
    text: "It's a funny thing, ambition. It can take one to sublime heights or harrowing depths. And sometimes they are one and the same.",
    author: "Emily Kaldwin, Dishonored"
  },
  {
    text: "No gods or kings. Only man.",
    author: "Andrew Ryan, Bioshock"
  },
  {
    text: "Some trees flourish, others die. Some cattle grow strong, others are taken by wolves. Some men are born rich enough and dumb enough to enjoy their lives. Ain't nothing fair.",
    author: "John Marston, Red Dead Redemption"
  },
  {
    text: "You can't break a man the way you break a dog, or a horse. The harder you beat a man, the taller he stands.",
    author: "The Jackal, Far Cry 2"
  },
  {
    text: "It's time to kick ass and chew bubblegum... and I'm all outta gum.",
    author: "Duke Nukem, Duke Nukem 3D"
  },
  {
    text: "Life is cruel. Of this I have no doubt. One can only hope that one leaves behind a lasting legacy. But so often, the legacies we leave behind...are not the ones we intended.",
    author: "Queen Myrrah, Gears of War 2"
  },
  {
    text: "If our lives are already written, it would take a courageous man to change the script.",
    author: "Alan Wake, Alan Wake"
  },
  {
    text: "It's easy to forget what a sin is in the middle of a battlefield.",
    author: "Solid Snake, Metal Gear Solid"
  }
];