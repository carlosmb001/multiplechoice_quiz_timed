

var questions = [
    {
      question: "Javascript is an _______ language?",
      answerChoices: ["Object-Oriented", "Object-Based", "Procedural", "None of the Above"],
      correctAnswerIndex: 0
    },
    {
      question: "Which of the following methods is used to access HTML elements using Javascript?",
      answerChoices: ["getElementById()", "getElementsByClassName()", "Both A and B", "None of the Above"],
      correctAnswerIndex: 2
    },
    {
      question: "Which of the following keywords is used to define a variable in Javascript?",
      answerChoices: ["var", "let", "Both A and B", "None of the Above"],
      correctAnswerIndex: 2
    },
    {
      question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
      answerChoices: ["Throws an error", "Ignores the statement", "Gives a warning", "None of the Above"],
      correctAnswerIndex: 1
    },
    {
      question: "What is the capital of France?",
      answerChoices: ["Paris", "London", "Berlin", "Rome"],
      correctAnswerIndex: 0
    }
  ];
  
  var currentQuestionIndex = 0;

  console.log(questions[currentQuestionIndex].question);
  console.log(questions[currentQuestionIndex].answerChoices);
  console.log(questions[currentQuestionIndex].correctAnswerIndex);

  //get the information about the question, choices and answer 
  var disappearEl = document.getElementById("start");
  var timerEl = document.getElementById("timer");
  var highScoreEl = document.getElementById("highscore");
  var questionEl = document.getElementById("questions");
  var choicesEl = document.getElementById("choices");
  var answerEl = document.getElementById("answer");


  questionEl.textContent = questions[currentQuestionIndex].question;
  answerEl.textContent = questions[currentQuestionIndex].answerChoices;

  function start(){
  
    questionEl.textContent = "";
    answerEl.textContent = "";
    
  }

    /*for (var i = 0; i < questions[currentQuestionIndex].answerChoices.length; i++) {
      var choiceEl = document.createElement("button");
      choiceEl.textContent = questions[currentQuestionIndex].answerChoices[i];
      choiceEl.setAttribute("class", "choice");
      choicesEl.appendChild(choiceEl);
      choiceEl.addEventListener("click", checkAnswer);
    }
  }
  */
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
  disappearEl.addEventListener("click",function() {
  disappearEl.style.display = "none";
  timerEl.style.display = "inline";
  questionEl.classList.remove("questions");
  start();
  });



