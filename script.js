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
document.getElementById('header').innerText = "Welcome to JavaScript Practice!";
});

//Task 2: When clicking run javascript test button, change the <p> text to "ButtonClicked"
//Task 4: Add another list when button is clicked
//Task 5: When button is clicked, remove the last list

document.getElementById('runTest').addEventListener('click', paragraphFunc);
function paragraphFunc(){
    document.getElementById('output').textContent = "Button Clicked";
    let list = document.getElementById('itemList');
    list.append(document.createElement('li'));
    let remover = list.getElementsByTagName('li');
    list.removeChild(remover[remover.length - 1]);
}

//Task 3: When user types in input field and clicks "Submit", display the input in a new p tag - <p id = "displayText"></p>
function processInput(){
    let content = document.getElementById('userInput').value;
    document.getElementById('displayText').textContent = content;
}

/*
    Tasks 6-9 Prioritize more advanced DOM manipulation and functions such as timers, counting multiple clicks, etc.
*/
//Task 6: Add a new button called counter
//Task 7: Count how many <li> tags there are
//Task 8: Count how many times the counter button is clicked and increment every time
//Task 9: Update <p> every 10 seconds with current time

/*
    These next set of tasks are designed to delve deeper in scope and states
*/

//Task 10: Count how many times "run javacript test" button is clicked with a closure
//Task 11: Store "submit" user input in local storage
//Task 12: fetch data from a public API
//Task 13: Display in a list