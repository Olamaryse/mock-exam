const quizData = [
    {
        question: "Commonly used data types DO NOT include:",
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers",
        correct: "3",
    },
    {
        question: "Arrays in Javascript can be used to store?",
        a: "numbers and strings",
        b: "other arrays",
        c: "booleans",
        d: "all of the above",
        correct: "4",
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables",
        a: "commas",
        b: "curly brackets",
        c: "quotes",
        d: "parenthesis",
        correct: "3",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: "JavaScript",
        b: "terminal/bash",
        c: "for loops",
        d: "console log",
        correct: "4",
    },
    {
        question: "The condition in an if / else statement is enclosed within?",
        a: "quotes",
        b: "curly brackets",
        c: "parenthesis",
        d: "square brackets",
        correct: "2",
    },
];


const quiz= document.getElementById('quiz')
const amswerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')



let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

        const currentQuizData = quizData[currentQuiz]

        questionEl.innerHTML = currentQuizData.question
        a_text.innerHTML = currentQuizData.a
        b_text.innerHTML = currentQuizData.b
        c_text.innerHTML = currentQuizData.c
        d_text.innerHTML = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected() {
    let answerEls
    answerEls.forEach(answerEls => {
        if(answerEls.checked) {
            answer = answerEls.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
            else {
                quiz.innerHTML = '
                <h2>You answered ${scor}/${quizData.lenght} questions correctly</h2>
                
                <button onclick="location.reload()">Relaod</button>
                '
            }
        }
    }
})




// for (let i=0; i < quizData.length; i++) {
//     let response = window.question(quizData[i].question);
//     if(response == quizData[i].correct){
//     score++;
//     alert("correct!");
//     } else {
//         alert("wrong!");
//     }
// }
