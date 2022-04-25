var quizQuestions = [

    {
        question: "Commonly used data types DO Not Include:",
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers",
        ans: "c",
    },

    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "scripting tag",
        b: "script tag",
        c: "js tag",
        d: "javascript tag",
        ans: "b",
    },

    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?",
        a: "document.getElement('p').innerHTML = 'Hello World!';",
        b: "#demo.innerHTML = 'Hello Word!';",
        c: "document.getElementById('demo').innerHTML = 'Hello World!';",
        d: "document.getElementByName('p').innerHTML = 'Hello World!';",
        ans: "c",
    },

    {
        question: "Where is the correct place to insert a JavaScript?",
        a: "The <body> section",
        b: "The <head> section",
        c: "Both the <head> section and the <body> section are correct",
        d: "The header section",
        ans: "c",
    },
];





var currentQuiz = 0;
var quizScore = 0;

var startText = document.getElementById("begin-text");
var startButton = document.getElementById("start-btn");
//var quizAnswer = document.getElementsByClassName(".answer-block").style.visibility = "hidden";

var quizContainer = document.getElementById("quiz");
var displayQuestion = document.getElementById("questionText");
var answerLine = document.getElementById("answer-line");

var a = document.getElementById("a-answer").style.visibility = "hidden";
var b = document.getElementById("b-answer").style.visibility = "hidden";
var c = document.getElementById("c-answer").style.visibility = "hidden";
var d = document.getElementById("d-answer").style.visibility = "hidden";

var posAnswer_a = document.getElementById("a");
var posAnswer_b = document.getElementById("b");
var posAnswer_c = document.getElementById("c");
var posAnswer_d = document.getElementById("d");

var initialForm = document.getElementById("save-initials").style.visibility = "hidden";
var initialName = document.getElementById("l-name");
var textField = document.getElementById("initials").value;
var subBtn = document.getElementById("sub-btn");


document.body.style.backgroundColor = "none";

startText.innerHTML = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
startButton.innerHTML = " Start Quiz";


startButton.addEventListener("click", function(){
    
    quiz();

    a = document.getElementById("a-answer").style.visibility = "visible";
    b = document.getElementById("b-answer").style.visibility = "visible";
    c = document.getElementById("c-answer").style.visibility = "visible";
    d = document.getElementById("d-answer").style.visibility = "visible";

    startButton = document.getElementById("start-btn").style.visibility = "hidden";
    startText = document.getElementById("begin-text").style.visibility = "hidden";

    var fiveMinutes = 60 * 5,
    display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
    
})


//quiz();



function quiz() {

var runQuiz = quizQuestions[currentQuiz];




  displayQuestion.innerText = runQuiz.question;
  console.log(runQuiz.question);
    posAnswer_a.innerHTML = "1. " + runQuiz.a;
    posAnswer_b.innerHTML = "2. " + runQuiz.b;
    posAnswer_c.innerHTML = "3. " + runQuiz.c;
    posAnswer_d.innerHTML = "4. " + runQuiz.d;

   

};


[posAnswer_a, posAnswer_b, posAnswer_c, posAnswer_d].forEach(element => {
    var answer;
    element.addEventListener("click", (e)=> {
                
        answer = element.id;
        
        if (answer === quizQuestions[currentQuiz].ans) {
            answerLine.innerHTML = "Correct!";
            quizScore++;

        }else {
        
            answerLine.innerHTML = "Incorrect!";
        }

        currentQuiz++;

        

        if (currentQuiz < quizQuestions.length) {
            setTimeout(() => {
                answerLine.innerHTML= "";
                quiz();
            }, 1000)
            
           
        } else {
            answerLine.innerHTML = "The quiz has ended and your final score is: " + quizScore;
            console.log("quiz over, your score is " + quizScore);

            initialForm = document.getElementById("save-initials").style.visibility = "visible";
            initialName.innerHTML = "Enter Initials:";
            //saveInitials();

            subBtn.addEventListener("click", function() {
                
                    
                    //textField = document.getElementById("initials").value;
                   // return capture;
                  // localStorage.setItem("initials", textField);

                //console.log(capture);
                
               
                
            })
        }
        

    })


   
})



//cite author robbmj https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript
// the below code was referenced from robbmj from stack overflow

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);

}













