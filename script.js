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
const nextButton = document.getElementById("next_button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Clear previous answers
    answerButton.innerHTML = '';

    currentQuestion.answers.forEach(element => {
        const button = document.createElement("button");
        button.innerHTML = element.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        
        // Attach event listener to each answer button
        button.addEventListener('click', () => {
            if (element.correct) {
                score++;
            }
            // Move to next question
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                // Quiz ended, show score
                alert("Quiz ended! Your score: " + score);
            }
        });
    });
}

startQuiz();
