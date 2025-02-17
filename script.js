/*
Saketh Balakumar
Purpose of this is to refresh front-end fundamentals.
Build on example index.html webpage
Manipulate elements on webpage with Javascript functions and event handlers
Use API Calls

*/

/*
Tasks 1 - 5 prioritize basic DOM manipulation
*/
//Task 1: When page loads, change <h1> text to "Welcome to JavaScript Practice"
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('header').innerText = "Welcome to JavaScript Practice!!!!";

});

//Task 2: When clicking run javascript test button, change the <p> text to "ButtonClicked"
//Task 4: Add another list when button is clicked
//Task 5: When button is clicked, remove the last list

document.getElementById('runTest').addEventListener('click', paragraphFunc);
function paragraphFunc(){
    document.getElementById('output').textContent = "Button Clicked, list added and removed, console logged";
    let list = document.getElementById('itemList');
    list.append(document.createElement('li'));
    let remover = list.getElementsByTagName('li');
    list.removeChild(remover[remover.length - 1]);
}

//Task 3: When user types in input field and clicks "Submit", display the input in a new p tag - <p id = "displayText"></p>
function processInput(){
    let submitContent = document.getElementById('userInput').value;
    document.getElementById('userInput').textContent = submitContent;
}

/*
    These next set of tasks are designed to delve deeper into closures, synch vs asynch code, API, local storage
*/

//Task 6: Count how many times "run javacript test" button is clicked with a closure
//Task 7: Modify runTest so that it logs "start" to the console and then after 5 seconds logs "end" (asynch code)
//Task 8: Promise
//Task 9: Fetch a random joke from an API (https://official-joke-api.appspot.com/random_joke) and display it in a new <p> when the button is clicked


//Task 6: Closure (scope of a function in another function)
//Create function to return a variable count. Declare a const counter and then add an event listener to the button
function addCounter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}

const counter = addCounter();

document.getElementById('runTest').addEventListener('click', function(){
    console.log(counter());
});

//Task 7: Asynch code to log "start" and then "end" after 5 seconds

document.addEventListener('DOMContentLoaded', function(){
    console.log('start');
    setTimeout(function(){
        console.log('end');
    },5000);
});

//Task 8: Promise async / await