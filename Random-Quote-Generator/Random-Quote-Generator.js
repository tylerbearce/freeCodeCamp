let index, quotesData, quoteText, quoteAuthor, quoteImage, quoteColor, tweetUrl;
let twitterUrl = "https://twitter.com/intent/tweet?text="
let quoteColorPrev = ["panel-default", "lg-black"];

function updateQuote(){
  //Generates a new quote.
  let newIndex = Math.floor(Math.random() * quotesData.length);
  
  //Makes sure the generated quote is not the same as the previous quote.
  while (newIndex == index) {
    newIndex = Math.floor(Math.random() * quotesData.length);
  }

  //Updates variables with new quote data.
  index = newIndex;
  quoteText = quotesData[index].text;
  quoteAuthor = quotesData[index].author;
  quoteImage = quotesData[index].image;
  quoteColor = quotesData[index].color;
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
}

// Pulls quote data from json file.
function getQuotes() {
  let request = new XMLHttpRequest();
  request.open('GET', 'https://raw.githubusercontent.com/tylerbearce/freeCodeCamp/master/Random-Quote-Generator/quoteFile.json', true);
    request.onload = function () {
    quotesData = JSON.parse(this.response);
    updateQuote();
  }
  request.send();
}