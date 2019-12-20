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
  quoteImage = quoteFile[index].image;
  tweetUrl = `${twitterUrl}${quoteText} - ${quoteAuthor}`;

  //Update html with quote data.
  document.getElementById('text').innerHTML = `<i class="fa fa-quote-left"></i> ${quoteText}`;
  document.getElementById('author').innerHTML = `- ${quoteAuthor}`;
  document.body.style.backgroundImage = `url(${quoteImage})`;
  document.getElementById('tweet-quote').setAttribute("href", tweetUrl);
}

const quoteFile = [
   {
    text: "We all make choices in life, but in the end our choices make us.",
    author: "Andrew Ryan, Bioshock",
    image: "img/bioshock.jpg"
    },
  {
    text: "Get over here!",
    author: "Scorpion, Mortal Kombat",
    image: "img/mortal-kombat.png"
  },
  {
    text: "What is better? To be born good or to overcome your evil nature through great effort?",
    author: "Paarthurnax, Elder Scrolls V: Skyrim",
    image: "img/skyrim.png"
  },
  {
    text: "The right man in the wrong place can make all the difference in the world.",
    author: "G-Man, Half-Life 2",
    image: "img/half-life-2.jpg"
  },
  {
    text: "Stand in the ashes of a trillion dead souls, and asks the ghosts if honor matters. The silence is your answer.",
    author: "Javik, Mass Effect 3",
    image: "img/mass-effect-3.jpg"
  },
  {
    text: "Wanting something does not give you the right to have it.",
    author: "Ezio Auditore, Assassin's Creed 2",
    image: "img/assassins-creed-2.jpg"
  },
  {
    text: "Even in dark times, we cannot relinquish the things that make us human.",
    author: "Khan, Metro 2033",
    image: "img/metro-2033.jpg"
  },
  {
    text: "How many are there in you? Whose hopes and dreams do you encompass? Could you but see the eyes in your own, the minds in your mind, you would see how much we share.",
    author: "Vortigaunt, Half-Life 2",
    image: "img/half-life-2.jpg"
  },
  {
    text: "The healthy human mind doesn't wake up in the morning thinking this is its last day on Earth. But I think that's a luxury, not a curse. To know you're close to the end is a kind of freedom. Good time to take... inventory.",
    author: "Captain Price, Call of Duty: Modern Warfare 2",
    image: "img/modern-warfare-2.png"
  },
  {
    text: "It's a funny thing, ambition. It can take one to sublime heights or harrowing depths. And sometimes they are one and the same.",
    author: "Emily Kaldwin, Dishonored",
    image: "img/dishonored.jpg"
  },
  {
    text: "No gods or kings. Only man.",
    author: "Andrew Ryan, Bioshock",
    image: "img/bioshock.jpg"
  },
  {
    text: "Some trees flourish, others die. Some cattle grow strong, others are taken by wolves. Some men are born rich enough and dumb enough to enjoy their lives. Ain't nothing fair.",
    author: "John Marston, Red Dead Redemption",
    image: "img/red-dead-redemption.jpg"
  },
  {
    text: "You can't break a man the way you break a dog, or a horse. The harder you beat a man, the taller he stands.",
    author: "The Jackal, Far Cry 2",
    image: "img/far-cry-2.jpg"
  },
  {
    text: "It's time to kick ass and chew bubblegum... and I'm all outta gum.",
    author: "Duke Nukem, Duke Nukem 3D",
    image: "img/duke-nukem-3d.png"
  },
  {
    text: "Life is cruel. Of this I have no doubt. One can only hope that one leaves behind a lasting legacy. But so often, the legacies we leave behind...are not the ones we intended.",
    author: "Queen Myrrah, Gears of War 2",
    image: "img/gears-of-war-2.jpg"
  },
  {
    text: "If our lives are already written, it would take a courageous man to change the script.",
    author: "Alan Wake, Alan Wake",
    image: "img/alan-wake.jpg"
  },
  {
    text: "It's easy to forget what a sin is in the middle of a battlefield.",
    author: "Solid Snake, Metal Gear Solid",
    image: "img/metal-gear-solid.png"
  }
];