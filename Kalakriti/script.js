const questions = [
    {
      question: "1,What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: 2
    },
    {
      question: "2,In which Planet do we live?",
      options: ["Mercury", "Earth", "Venus", "Jupitar"],
      answer: 1
    },
    {
      question: "3,Who composed our National Anthem?",
      options: ["Mahatama Gandhi", "Jawahar lal Nehru", "Rabindra Nath tagore", "Narendra modi"],
      answer: 1
    },
    {
      question: "4,What is the total sum of first 10 numbers?",
      options: ["25", "50", "26", "55"],
      answer: 1
    },
    {
      question: "5,Who is our first Prime minister?",
      options: ["Rajendra Prasad", "Jawahar lal Nehru", "Rabindra Nath tagore", "Narendra modi"],
      answer: 1
    },
    {
      question: "6,Which is the largest Planet in Our Solar system?",
      options: ["Jupitar", "Neptune", "Sun", "Mercury"],
      answer: 1
    },
    {
      question: "7,What is the Name of our Country?",
      options: ["India", "China", "Nepal", "Bhutan"],
      answer: 1
    },
    {
      question: "8,What is the Percentage of Oxygen in Our Enviroment?",
      options: ["18%", "19%", "33%", "21%"],
      answer: 1
    },
    {
      question: "9,Which part of Plant make food for it?",
      options: ["Stems", "Roots", "Leaf", "Photosynthesis"],
      answer: 1
    },
    {
      question: "10,How many bone does Our body Have?",
      options: ["502", "69", "202", "206"],
      answer: 1
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionButtons = document.querySelectorAll(".option");
  const nextButton = document.getElementById("next-btn");
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  const restartButton = document.getElementById("restart-btn");
  
  function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionButtons.forEach((button, index) => {
      button.textContent = question.options[index];
      button.onclick = () => selectAnswer(index);
    });
  }
  
  function selectAnswer(index) {
    const question = questions[currentQuestionIndex];
    if (index === question.answer) {
      score++;
    }
    optionButtons.forEach((button, idx) => {
      button.disabled = true;
      button.style.backgroundColor = idx === question.answer ? "green" : "red";
    });
    nextButton.classList.remove("hidden");
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      resetState();
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function resetState() {
    optionButtons.forEach(button => {
      button.disabled = false;
      button.style.backgroundColor = "#007BFF";
    });
    nextButton.classList.add("hidden");
  }
  
  function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    resultElement.classList.remove("hidden");
    scoreElement.textContent = `${score} / ${questions.length}`;
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultElement.classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    resetState();
    showQuestion();
  }
  
  nextButton.addEventListener("click", nextQuestion);
  restartButton.addEventListener("click", restartQuiz);
  
  showQuestion();
  