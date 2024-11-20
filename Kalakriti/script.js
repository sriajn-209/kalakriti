const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: 2
    },
    {
      question: "Which language is used to style web pages?",
      options: ["HTML", "CSS", "JavaScript", "Python"],
      answer: 1
    },
    {
      question: "What does HTML stand for?",
      options: ["Hyper Trainer Marking Language", "HyperText Markup Language", "HyperText Machine Language", "HighText Markup Language"],
      answer: 1
    }
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
  