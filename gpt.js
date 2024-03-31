const questions = [
    {
        question: "Which is the largest Animal ?",
        answers: [
            { text: "shark", correct: false },
            { text: "blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Elephant", correct: false },
        ]
    },
    {
        question: "Who is the prime minister of India ?",
        answers: [
            { text: "Naredra Modi", correct: true },
            { text: "Nitin Gadkari", correct: false },
            { text: "Amit shah", correct: false },
            { text: "Yogi Adityanath", correct: false },
        ]
    },
    {
        question: "Which Country has highest gdp ?",
        answers: [
            { text: "India", correct: false },
            { text: "Russia", correct: false },
            { text: "China", correct: false },
            { text: "USA", correct: true },
        ]
    },
    {
        question: "Which one of these is a software product based company ?",
        answers: [
            { text: "Amazon", correct: false },
            { text: "Microsoft", correct: true },
            { text: "Google", correct: false },
            { text: "TATA Motors", correct: false },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct === "true";
    if (iscorrect) {
        selectedBtn.classList.add("correct");
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
            score++;
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

function showScore() {
    resetState();
    questionElement.innerHTML = `you have scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "play again"
    nextButton.style.display = "block"
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore()
    }
}

startQuiz();

console.log("this is working here");
console.log("hello world !");
console.log("this file is linked but still code is not working dont know why this is happening ");
