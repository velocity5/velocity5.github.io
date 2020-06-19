const quotes = document.querySelector(".new-quote");
quotes.addEventListener('click', getQuote);
const url = 'https://random-math-quote-api.herokuapp.com/';


function getQuote() {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayQuote(data.quote);
        })
        .catch(function () {
            console.log("An error occured");
        });
}
function displayQuote(quote) {
    const quoteText = document.querySelector('.quote-text');
    quoteText.textContent = quote;
}
