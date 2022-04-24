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

var quizContainer = document.getElementById("quiz");
var displayQuestion = document.getElementById("questionText");
var answerLine = document.getElementById("answer-line");

var posAnswer_a = document.getElementById("a");
var posAnswer_b = document.getElementById("b");
var posAnswer_c = document.getElementById("c");
var posAnswer_d = document.getElementById("d");

quiz();


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
            answerLine.innerHTML = "The quiz has ended and your score is: " + quizScore;
            console.log("quiz over, your score is " + quizScore);
        }
        

    })


   
})








    
   












