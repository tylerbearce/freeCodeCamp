let index, quoteText, quoteAuthor, quoteImage, quoteColor, tweetUrl;
let twitterUrl = "https://twitter.com/intent/tweet?text="
const grey = ["panel-default", "lg-grey"];
const green = ["panel-success", "lg-green"];
const blue = ["panel-info", "lg-blue"];
const yellow = ["panel-warning", "lg-yellow"];
const red = ["panel-danger", "lg-red"];
let quoteColorPrev = grey;

function updateQuote(){
  //Generates a new quote.
  let newIndex = Math.floor(Math.random() * quoteFile.length);
  
  //Makes sure the generated quote is not the same as the previous quote.
  while (newIndex == index) {
    newIndex = Math.floor(Math.random() * quoteFile.length);
  }

  //Updates variables with new quote data.
  index = newIndex;
  quoteText = quoteFile[index].text;
  quoteAuthor = quoteFile[index].author;
  quoteImage = quoteFile[index].image;
  quoteColor = quoteFile[index].color;
  tweetUrl = `${twitterUrl}${quoteText} - ${quoteAuthor}`;

  //Updates html with new quote data.
  $("#text").fadeOut(function() {
    $(this).html(`<i class="fa fa-quote-left"></i> ${quoteText}`)
  }).fadeIn();

  $("#author").fadeOut("slow", function() {
    $(this).text(`- ${quoteAuthor}`)
  }).fadeIn(); 

  $("#bg-img").fadeOut(function () {
    $(this).css("background-image", `url(${quoteImage})`)
  }).fadeIn();

  document.getElementById('tweet-quote').setAttribute("href", tweetUrl);

  $("#quote-box").removeClass(quoteColorPrev[0]).addClass(quoteColor[0]);
  $("html, body").removeClass(quoteColorPrev[1]).addClass(quoteColor[1]);
  quoteColorPrev = quoteColor;

  // switch (quoteColor) {
  //   case grey:
  //     $("#quote-box").removeClass(quoteColorPrev[0]).addClass(quoteColor[0]);
  //     $("html, body").removeClass(quoteColorPrev[1]).addClass(quoteColor[1]);
  //     quoteColorPrev = quoteColor;
  //     break;
  //   case green:
  //     $("#quote-box").removeClass(quoteClassPrev[0]).addClass(quoteColor[0]);
  //     $("html, body").removeClass(quoteClassPrev[1]).addClass(quoteColor[1]);
  //     quoteClassPrev = green;
  //     break;
  //   case blue:
  //     $("#quote-box").removeClass(quoteClassPrev[0]).addClass(blue[0]);
  //     $("html, body").removeClass(quoteClassPrev[1]).addClass(grey[1]);
  //     quoteClassPrev = blue;
  //     break;
  //   case yellow:
  //     $("#quote-box").removeClass(quoteClassPrev[0]).addClass(yellow[0]);
  //     $("html, body").removeClass(quoteClassPrev[1]).addClass(grey[1]);
  //     quoteClassPrev = yellow;
  //     break;
  //   case red:
  //     $("#quote-box").removeClass(quoteClassPrev[0]).addClass(red[0]);
  //     $("html, body").removeClass(quoteClassPrev[1]).addClass(grey[1]);
  //     quoteClassPrev = red;
  //     break;
  //   default:
  //     $("#quote-box").removeClass(quoteClassPrev[0]).addClass(grey[0]);
  //     $("html, body").removeClass(quoteClassPrev[1]).addClass(grey[1]);
  //     quoteClassPrev = grey;
  //     break;
  // }
  
}

const quoteFile = [
  {
  text: "We all make choices in life, but in the end our choices make us.",
  author: "Andrew Ryan, Bioshock",
  image: "img/bioshock.jpg",
  color: blue
  },
  {
    text: "No gods or kings. Only man.",
    author: "Andrew Ryan, Bioshock",
    image: "img/bioshock.jpg",
    color: blue
  },
  {
    text: "Get over here!",
    author: "Scorpion, Mortal Kombat",
    image: "img/mortal-kombat.png",
    color: red
  },
  {
    text: "What is better? To be born good or to overcome your evil nature through great effort?",
    author: "Paarthurnax, Elder Scrolls V: Skyrim",
    image: "img/skyrim.png",
    color: grey
  },
  {
    text: "The right man in the wrong place can make all the difference in the world.",
    author: "G-Man, Half-Life 2",
    image: "img/half-life-2.jpg",
    color: green
  },
  {
    text: "How many are there in you? Whose hopes and dreams do you encompass? Could you but see the eyes in your own, the minds in your mind, you would see how much we share.",
    author: "Vortigaunt, Half-Life 2",
    image: "img/half-life-2.jpg",
    color: green
  },
  {
    text: "Stand in the ashes of a trillion dead souls, and asks the ghosts if honor matters. The silence is your answer.",
    author: "Javik, Mass Effect 3",
    image: "img/mass-effect-3.jpg",
    color: blue
  },
  {
    text: "Wanting something does not give you the right to have it.",
    author: "Ezio Auditore, Assassin's Creed 2",
    image: "img/assassins-creed-2.jpg",
    color: red
  },
  {
    text: "Even in dark times, we cannot relinquish the things that make us human.",
    author: "Khan, Metro 2033",
    image: "img/metro-2033.jpg",
    color: red
  },
  {
    text: "The healthy human mind doesn't wake up in the morning thinking this is its last day on Earth. But I think that's a luxury, not a curse. To know you're close to the end is a kind of freedom. Good time to take... inventory.",
    author: "Captain Price, Call of Duty: Modern Warfare 2",
    image: "img/modern-warfare-2.png",
    color: yellow
  },
  {
    text: "It's a funny thing, ambition. It can take one to sublime heights or harrowing depths. And sometimes they are one and the same.",
    author: "Emily Kaldwin, Dishonored",
    image: "img/dishonored.jpg",
    color: grey
  },
  {
    text: "Some trees flourish, others die. Some cattle grow strong, others are taken by wolves. Some men are born rich enough and dumb enough to enjoy their lives. Ain't nothing fair.",
    author: "John Marston, Red Dead Redemption",
    image: "img/red-dead-redemption.jpg",
    color: red
  },
  {
    text: "You can't break a man the way you break a dog, or a horse. The harder you beat a man, the taller he stands.",
    author: "The Jackal, Far Cry 2",
    image: "img/far-cry-2.jpg",
    color: yellow
  },
  {
    text: "It's time to kick ass and chew bubblegum... and I'm all outta gum.",
    author: "Duke Nukem, Duke Nukem 3D",
    image: "img/duke-nukem-3d.png",
    color: red
  },
  {
    text: "Life is cruel. Of this I have no doubt. One can only hope that one leaves behind a lasting legacy. But so often, the legacies we leave behind...are not the ones we intended.",
    author: "Queen Myrrah, Gears of War 2",
    image: "img/gears-of-war-2.jpg",
    color: yellow
  },
  {
    text: "If our lives are already written, it would take a courageous man to change the script.",
    author: "Alan Wake, Alan Wake",
    image: "img/alan-wake.jpg",
    color: blue
  },
  {
    text: "It's easy to forget what a sin is in the middle of a battlefield.",
    author: "Solid Snake, Metal Gear Solid",
    image: "img/metal-gear-solid.png",
    color: grey
  }
];