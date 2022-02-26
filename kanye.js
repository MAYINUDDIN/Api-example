//arrrow function
const loadQuots = () => {

    fetch('https://api.kanye.rest/')
        .then(Response => Response.json())
        .then(data => displayQuote(data));
}

//arrow function

const displayQuote = data => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = data.quote;

}

