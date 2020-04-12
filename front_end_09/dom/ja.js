const newQuote = document.querySelector(".new-quote");
// listen for click
if (newQuote) {
  newQuote.addEventListener("click", getQuote, true);
}

const endpoint = "https://api.kanye.rest";
function getQuote() {
  fetch(endpoint)
  .then(function (response) {
    return response.json()
  })
  .then(data => {
    displayQuote(data.quote);
    })
  .catch(rejected => {
    alert(rejected);
    });
}
function displayQuote(quote) {
  const quoteText = document.querySelector(".quote-text");
  quoteText.textContent = quote;
}
getQuote();