const questions = [{
    question: "1. What is the most essential factor for the photosynthesis in plants?",
    answers: ["Carbon Dioxide", "Water", "Sunlight", "Fertilizer"],
    correct: "Sunlight",
    explanation: "Plants require sunlight to perform photosynthesis, a crucial process for their growth."
  },

  {
    question: "2. How often should you water succulent plants?",
    answers: ["Daily", "Weekly", "Monthly", "Irregularly"],
    correct: "Monthly",
    explanation: "Succulent plants are adapted to dry conditions and do not need frequent watering. Overwatering can lead to root rot. It's best to water succulents sparingly, allowing the soil to dry out between waterings, typically every few weeks."
  },

  {
    question: "3. Which of the following pests is common among houseplants and can damage the leaves?",
    answers: ["Aphids", "Bees", "Ladybugs", "Earthworms"],
    correct: "Aphids",
    explanation: "Aphids are common pests that can infest indoor plants. They feed on plant sap, causing damage to the leaves. It's essential to control aphid infestations to maintain the health of your houseplants."
  },

  {
    question: "4. Which of the following is NOT a suitable plant potting mix ingredient?",
    answers: ["Perlite", "Sand", "Garden Soil", "Cofee Grounds"],
    correct: "Cofee Grounds",
    explanation: " Coffee grounds are not typically used as a potting mix ingredient. Suitable ingredients include peat moss, perlite, and compost. Coffee grounds can be added to compost piles as a fertilizer but are not ideal for potting soil."
  },

  {
    question: "5. What is the purpose of pruning in plant care?",
    answers: ["To make the plant grow faster", "To remove dead or diseased parts", "To make the plant's leaves bigger", "To attract more butterflies"],
    correct: "To remove dead or diseased parts",
    explanation: "Pruning is done to remove dead, diseased, or overgrown plant parts. It helps improve the overall health and appearance of the plant. Pruning can also encourage new growth and maintain a desired shape."
  },

  {
    question: "6. Which of the following is a low-light houseplant that's suitable for spaces with minimal sunlight?",
    answers: ["Snake Plant", "Aloe Vera", "Orchid", "Fiddle Leaf Fig"],
    correct: "Orchid",
    explanation: "Orchids are not considered low-light houseplants. Instead, they require moderate to bright indirect light. Snake plants, on the other hand, are known for their tolerance of low light conditions and are suitable for spaces with minimal sunlight."
  },

  {
    question: "7. Which of the following is a common method for propagating houseplants?",
    answers: ["Division", "Singing to the Plants", "Giving them chocolate", "Playing clasical music"],
    correct: "Division",
    explanation: " Division is a common method of propagating houseplants. It involves separating a mature plant into smaller sections, each of which can grow into a new plant. It's an effective way to expand your plant collection."
  },

  {
    question: "8. When repotting a plant, what size should the new pot be compared to the old pot?",
    answers: ["Smaller", "The same size", "Slightly larger", "Much larger"],
    correct: "Slightly larger",
    explanation: "When repotting a plant, it's generally recommended to use a new pot that is slightly larger than the old one. This provides the plant with room to grow and prevents it from becoming root-bound."
  },

  {
    question: "9. What is the purpose of a humidity tray for indoor plants?",
    answers: ["To serve as a coaster for the plant", "To catch excess water when watering", "To increase humidity around the plant", "To deter pests"],
    correct: "To increase humidity around the plant",
    explanation: "A humidity tray placed under a plant's pot can help increase the humidity level around the plant. This is particularly beneficial for tropical and humidity-loving plants, as it mimics their natural environment and supports their overall health and growth."
  },


  // Add more quiestion here

];



const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const scoreElement = document.getElementById("score");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");

let currentQuestion = 0;
let score = 0;
let selectedElement;

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
   //nextButton.style.display = "none";
  } else {
    endQuiz();
    //nextButton.style.display = "none"; 
  }
}

function checkAnswer(event) {
  selectedElement = event.target;
  selectedElement.classList.add("buttonClick");
  const selectedAnswer = event.target.innerText;
  if (selectedAnswer === questions[currentQuestion].correct) {
    score++;
    feedbackElement.innerHTML = "<strong> Correct! </strong><br>" + questions[currentQuestion].explanation;
  } else {
    feedbackElement.innerHTML = "<strong> Incorrect! </strong><br>" + questions[currentQuestion].explanation;
  }
  scoreElement.innerText = score;
answerButtons.forEach(button => button.removeEventListener("click",checkAnswer));
//nextButton.style.display = "block";
}

function nextQuestion() {
  selectedElement.classList.remove("buttonClick");
if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
    feedbackElement.innerText = "";
    //nextButton.style.display = "none";
  } else {
    endQuiz();
   //nextButton.style.display = "none";

  }
}

function endQuiz() {
  if (score === questions.length) {
    feedbackElement.innerText = "Congratulations! You are a plant expert and your green friends are lucky to have you!";
  } else if (score >= questions.length / 2) {
    feedbackElement.innerText = "Great job! You have a good understanfing of plant care!";
  } else {
    feedbackElement.innerText = "Keep learning so you can improve your plant care knowledge!";
  }

  questionElement.innerText = "Quiz Complete!";
  answerButtons.forEach(button => button.style.display = "none");
  nextButton.style.display = "none";
}

startQuiz();