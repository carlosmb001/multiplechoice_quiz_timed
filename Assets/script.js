

var questions = [
    {
      question: "Javascript is an _______ language?",
      answers: ["Object-Oriented", "Object-Based", "Procedural", "None of the Above"],
      answer: 0
    },
    {
      question: "Which of the following methods is used to access HTML elements using Javascript?",
      answers: ["getElementById()", "getElementsByClassName()", "Both A and B", "None of the Above"],
      answer: 2
    },
    {
      question: "Which of the following keywords is used to define a variable in Javascript?",
      answers: ["var", "let", "Both A and B", "None of the Above"],
      answer: 2
    },
    {
      question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
      answers: ["Throws an error", "Ignores the statement", "Gives a warning", "None of the Above"],
      answer: 1
    }
  ];
  
  counter = 0;
  timer = 60000;

  //get the information about the question, choices and answer 
  var startEl = document.getElementById("start");
  var timerEl = document.getElementById("timer");
  var highScoreEl = document.getElementById("highscore");
  var questionEl = document.getElementById("questions");
  var choiceEl = document.getElementsByClassName("choice");

  function clearIntro(){
  startEl.style.display = "none";
  timerEl.style.display = "inline";
  questionEl.classList.remove("questions");
  }

  function start(){
    for (var i = 0; i < questions.length; i++) {
      questionEl.textContent = questions[i].question;
      for (var j = 0; j < questions[i].answers.length; j++){
        choiceEl.textContent = questions[i].answers[j];
      }
    }
  }

  //fuction to start the time
  function countdown(timerEl) {
    var seconds = 120;
    var intervalId = setInterval(function() {
      seconds--;
      timerEl.textContent = seconds;
      if (seconds === 0) {
        clearInterval(intervalId);
      }
    }, 1000);
    
  }

  /* questionEl.textContent = questions[currentQuestionIndex].question;


  var choicesEl = document.getElementById("choices");
  choicesEl.textContent = "";

  for (var i = 0; i < questions[currentQuestionIndex].answerChoices.length; i++) {
    var choiceEl = document.createElement("button");
    choiceEl.textContent = questions[currentQuestionIndex].answerChoices[i];
    choiceEl.setAttribute("class", "choice");
    choicesEl.appendChild(choiceEl);
    choiceEl.addEventListener("click", checkAnswer);
  }


  //questionEl.textContent = questions[currentQuestionIndex].question;


  //var choicesEl = document.getElementById("choices");
 // choicesEl.textContent = "";
*/


  // event listener for answer choices, checks if the answer is correct, and updates
  // will start the question, the timer, and the prompt message should disappear

  // this will start the question and prompt message
  startEl.addEventListener("click",function() {
  clearIntro();
  start();
  countdown(timerEl);
  });


