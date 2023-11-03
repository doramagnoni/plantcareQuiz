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
        answers: ["Aphids", "Bees", "Ladybugs", "Earthworms"],
        correct: "Aphids"
    },

    {
      question: "Which of the following is NOT a suitable plant potting mix ingredient?",
      answers: ["Perlite", "Sand", "Garden Soil", "Cofee Grounds"],
      correct: "Cofee Grounds"
  },

  {
    question: "What is the purpose of pruning in plant care?",
    answers: ["To make the plant grow faster", "To remove dead or diseased parts", "To make the plant's leaves bigger", "To attract more butterflies"],
    correct: "To remove dead or diseased parts"
},

{
  question: "Which of the following is a low-light houseplant that's suitable for spaces with minimal sunlight?",
  answers: ["Snake Plant", "Aloe Vera", "Orchid", "Fiddle Leaf Fig"],
  correct: "Orchid"
},

{
  question: "Which of the following is a common method for propagating houseplants?",
  answers: ["Division", "Singing to the Plants", "Giving them chocolate", "Playing clasical music"],
  correct: "Division"
},

{
  question: "When repotting a plant, what size should the new pot be compared to the old pot?",
  answers: ["Smaller", "The same size", "Slightly larger", "Much larger"],
  correct: "Slightly larger"
},

{
  question: "What is the purpose of a humidity tray for indoor plants?",
  answers: ["To serve as a coaster for the plant", "To catch excess water when watering", "To increase humidity around the plant", "To deter pests"],
  correct: "To increase humidity around the plant"
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
