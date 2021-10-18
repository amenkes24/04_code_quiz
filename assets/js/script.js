var saveQuizBtn = document.querySelector("#start-quiz");
var sectionEl = document.querySelector("#section-0");
var header = document.querySelector(".header");
var placeInGame = 0
var questions = [
    {
        q: "Commonly used data types do NOT include: ",
        c: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        a: "3. Alerts"
    },
    {
        q: "The condition in an if / else statement is enclosed with _____.",
        c: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        a: "3. parenthesis"
    },
    {
        q: "Arrays in JavaScript can be used to store _____.",
        c: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        a: "4. all of the above"
    },
    {
        q: "String values must be enclosed within _____ when being assigned to variables.",
        c: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        a: "3. quotes"
    },
    {
        q: "A very useful tool used during development and debugging for printing content to the debugger is:",
        c: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        a: "4. console.log"
    },
]


// fucntion that presents a new question
var refresh = function() {


// resets the question/html 
    sectionEl.innerHTML =""

// creates the heading (acting as the question)
    var headingEl = document.createElement("h1");
    headingEl.className = "heading-1";
    headingEl.textContent = questions[placeInGame].q;
    sectionEl.appendChild(headingEl);
    

    // loops thru choices array
    for (var i = 0; i < questions[placeInGame].c.length; i++) {
        
    // creates buttons for each choice in said array
    var buttonEl = document.createElement("button");
    buttonEl.className = "btn";
    buttonEl.onclick = checkanswer;
    buttonEl.textContent = questions[placeInGame].c[i];
    headingEl.appendChild(buttonEl);
    }

};

// function to check the answer inputted
function checkanswer(){

    if (questions[placeInGame].a === this.textContent) {
        console.log("correct")
    } else {
        console.log("wrong")
    };

   // += is equal to the variable current value PLUS 1 (or whatever you decide to add)
    placeInGame += 1;

    refresh();
};

// creates timer
var counter = 60
var countdown = function() {
    console.log(counter);
    counter--;
        if (counter === 0){
        window.alert("Time's up!");
        clearInterval(startCountdown);
    };
};

// adds timer to html
var counterEl = document.createElement("p");
counterEl.className = "timer";
counterEl.textContent = "Time: " + counter;
header.appendChild(counterEl);


saveQuizBtn.addEventListener("click", function(){

 // sets rate of timer
 var startCountdown = setInterval(countdown, 1000);
 refresh();
});


// console.log(questions[1].q);
// console.log(questions[0].q);
// console.log(questions[0].c);


