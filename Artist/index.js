const figlet = require('figlet');
const colors = require('colors');
var giveMeAJoke = require('give-me-a-joke');

// Function to use figlet with a promise
function figletPromise(text) {
    return new Promise((resolve, reject) => {
        figlet(text, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// Get a random dad joke
giveMeAJoke.getRandomDadJoke(async function (joke) {
    try {
        // Now use the joke with figlet
        const figletText = await figletPromise("joke chepna...");
        console.log(figletText.bgRed);
        
        // Print the joke after figlet text
        console.log(joke.green);
    } catch (err) {
        console.log('Something went wrong....');
        console.dir(err);
    }
});
