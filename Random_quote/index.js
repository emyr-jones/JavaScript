const quotes = [
    "The only way to do great work is to love what you do.",
    "Innovation distinguishes between a leader and a follower.",
    "Your time is limited, don't waste it living someone else's life.","Make the best use of what is in your power and take the rest as it happens.",
    "You have power over your mind, not outside events. Realize this, and you will find strength." ,
    "Stay hungry, stay foolish.",
    "No loss should be more regrettable to us than losing our time, for it's irretrievable." ,
    "It's not what happens to you, but how you react to it that matters.",
    "The future belongs to those who believe in the beauty of their dreams."
]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size === quotes.length) {
        usedIndexes.clear()
    }
    while (true) {
        const randomIndex = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randomIndex)) continue
            
        const quote = quotes[randomIndex]
        quoteElement.innerHTML = quote
        usedIndexes.add(randomIndex)
        break
    }
}