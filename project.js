//variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"Be yourself; everyone else is already taken."`,
    person: ` Oscar Wilde`
},{
    quote: `"In three words I can sum up everything I’ve learned about life: it goes on."`,
    person: ` Robert Frost`
},{
    quote: `"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment"`,
    person: `Ralph Waldo Emerson`
},{
    quote: `"Two things are infinite: the universe and human stupidity; and I’m not sure about the universe"`,
    person: ` Albert Einstein`
},{
    quote: `"The only way to do great work is to love what you do."`,
    person: `Steve Jobs`
},{
    quote: `"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment."`,
    person: ` Buddha`
},{
    quote: `"The only limit to our realization of tomorrow is our doubts of today."`,
    person: `Franklin D. Roosevelt`
},{
    quote: `"The best way to predict your future is to create it."`,
    person: `Abraham Lincoln`
},{
    quote: `"The journey of a thousand miles begins with one step."`,
    person: `Lao Tzu`
},{
    quote: `"Act as if what you do makes a difference. It does."`,
    person: `William James`
},{
    quote: `"I am Ironman."`,
    person: ` Tony Stark`
},

];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

quote.innerText = quotes[random].quote;
person.innerText = quotes[random].person;
})

