const questions = [{
        question: "What is the most essential factor for the photosynthesis in plants?",
        answers: ["Carbon Dioxide", "Water", "Sunlight", "Fertilizer"],
        correct: "Sunlight"
    },

    {
        question: "How often should you water succulent plants?",
        answers: ["Daily", "Weekly", "Monthly", "Irregularly"],
        correct: "Monthly"
    },

    {
        question: "Which of the following pests is common among houseplants and can damage the leaves?",
        answer: ["Aphids", "Bees", "Ladybugs", "Earthworms"],
        correct: "Aphids"
    },
    // Add more quiestion here

];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const scoreElement = document.getElementById("score");
const feedbackElement = document.getElementById("feedback");

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  if (currentQuestion < questions.length) {
      questionElement.innerText = questions[currentQuestion].question;
      for (let i = 0; i < answerButtons.length; i++) {
          answerButtons[i].innerText = questions[currentQuestion].answers[i];
          answerButtons[i].addEventListener("click", checkAnswer);
      }
  } else {
      endQuiz();
  }
}

function checkAnswer(event) {
  const selectedAnswer = event.target.innerText;
  if (selectedAnswer === questions[currentQuestion].correct) {
      score++;
      feedbackElement.innerText = "Correct!";
  } else {
      feedbackElement.innerText = "Incorrect.";
  }
  scoreElement.innerText = score;
  currentQuestion++;
  showQuestion();
}

function endQuiz() {
  questionElement.innerText = "Quiz Complete!";
  answerButtons.forEach(button => button.style.display = "none");
}

startQuiz();
