

var questions = [
    {
      question: "Javascript is an _______ language?",
      choices: ["Object-Oriented", "Object-Based", "Procedural", "None of the Above"],
      answer: "Object-Oriented"
    },
    {
      question: "Which of the following methods is used to access HTML elements using Javascript?",
      choices: ["getElementById()", "getElementsByClassName()", "Both A and B", "None of the Above"],
      answer: "Both A and B"
    },
    {
      question: "Which of the following keywords is used to define a variable in Javascript?",
      choices: ["var", "let", "Both A and B", "None of the Above"],
      answer: "Both A and B"
    },
    {
      question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
      choices: ["Throws an error", "Ignores the statement", "Gives a warning", "None of the Above"],
      answer: "Ignores the statement"
    }
  ];
  
  var score = 0;
  var seconds = 60;
  var questionIndex = 0;
  var choices = 4;
  var currentQuestion = questions[questionIndex];


  //get the information about the question, choices and answer 
  var startEl = document.getElementById("start");
  var timerEl = document.getElementById("timer");
  var highScoreEl = document.getElementById("highscore");
  var questionEl = document.getElementById("questions");
  var questionTitleEl = document.getElementById("question-title");
  var choiceEl = document.getElementsByClassName("choice");
  var scoreEl = document.getElementById("final-score");


  function clearIntro(){
  startEl.style.display = "none";
  timerEl.style.display = "inline";
  questionEl.classList.remove("questions");
  }

  function start(){
      questionTitleEl.textContent = currentQuestion.question;
      currentQuestion = questions[questionIndex];

      for (var i = 0; i < choices; i++){
        //choiceEl.textContent = currentQuestion.answers[i];
        var button = document.getElementById("answer" + i);
        button.textContent = currentQuestion.choices[i];
        button.addEventListener("click", checkAnswer);
      }

    }

  function checkAnswer(event){
    var correctAnswer = currentQuestion.answer;
    var selectedButton = event.target.textContent;

    if (selectedButton === correctAnswer) {
      score++;
    }
    else {
      seconds -= 10;
    }
    if (questionIndex < questions.length -1) {
    
    questionIndex++;
    start();
    } else {
      seconds = 0;
      scoreEl.textContent = "You got " + score +" answers correct" ;
      questionEl.style.display = "none";
      timerEl.style.display = "none";
      return;
    }
  }

  // function to start the timer
  function countdown(timerEl) {
    var intervalId = setInterval(function() {
      seconds--;
      timerEl.textContent = seconds;
      if (seconds === 0) {
        clearInterval(intervalId);
      }
      else{
        return;
      }
    }, 1000);

  }


  // this will start the question and prompt message
  startEl.addEventListener("click",function() {
  clearIntro();
  start();
  countdown(timerEl);
  });


