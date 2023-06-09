const quotes = [
    {
        quote: "If you look at what you have in life, you'll always have more. if you look at what you don't have in life. you'll never have enough",
        person: "Oprah Winfrey"
    },
    {
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person:"Nelson Mandela" 
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        person: "Walt Disney"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        person: "Steve Jobs"
    },
    {
        quote:"If life were predictable it would cease to be life, and be without flavor.",
        person: "Eleanor Roosevelt"
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        person: "James Cameron"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        person: "John Lennon"
    }
    
]

let button = document.querySelector('button')
let quote = document.querySelector('#quote')
let person = document.querySelector('#person')

button.addEventListener('click', function () {

    let random = Math.floor(Math.random() * quotes.length)

    // console.log(random)
    quote.innerText = quotes[random].quote
    person.innerText = quotes[random].person
    
} )