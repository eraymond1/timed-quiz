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
        a: "<scripting>",
        b: "<script>",
        c: "<js>",
        d: "<javascript",
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
        d: "The <header> section",
        ans: "c",
    },
];

var currentQuiz = 0;
var quizScore = 0;

var quizContainer = document.getElementById("quiz");
var displayQuestion = document.getElementById("questionText");
const answersEl = document.querySelectorAll(".answer");
var answerLine = document.getElementById("answer-line");
const click = document.querySelectorAll(".btn-answer");

var posAnswer_a = document.getElementById("a");
var posAnswer_b = document.getElementById("b");
var posAnswer_c = document.getElementById("c");
var posAnswer_d = document.getElementById("d");






quiz();

function quiz() {

var runQuiz = quizQuestions[currentQuiz];
console.log(runQuiz);

//document.getElementById("question").innerHTML = text;
  displayQuestion.innerText = runQuiz.question;
  console.log(runQuiz.question);
    posAnswer_a.innerHTML = runQuiz.a;
    posAnswer_b.innerHTML = runQuiz.b;
    posAnswer_c.innerHTML = runQuiz.c;
    posAnswer_d.innerHTML = runQuiz.d;

    if(answersEl.click){

        answer =answersEl.id;
        if (answer === runQuiz.ans){
            answerLine.innerHTML = "Correct!";
        }else {
            answerLine.innerHTML = "Inccorect!";
        }
    }
            
                
    [posAnswer_a, posAnswer_b, posAnswer_c, posAnswer_d].forEach(element => {
        element.addEventListener("click", (e)=> {
            // console.log(e);
            var answer;
            answer = element.id;
            console.log(element);
            if (answer === runQuiz.ans) {
                answerLine.innerHTML = "Correct!";
            
    
            }else {
            
                answerLine.innerHTML = "Incorrect!";
            }
        })
    })

};









