

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
  var highScoreBtn = document.getElementById("high-score-btn");
  var questionEl = document.getElementById("questions");
  var questionTitleEl = document.getElementById("question-title");
  var choiceEl = document.getElementsByClassName("choice");
  var scoreEl = document.getElementById("final-score");
  var endEL = document.getElementById("end");
  var highScores = document.getElementById("high-scores");
  var submit = document.getElementById("submit-button");
  var initials = document.getElementById("initials");
  

  // removed the into amd displays the timer
  function clearIntro(){
  startEl.style.display = "none";
  timerEl.style.display = "";
  questionEl.classList.remove("questions");
  }
  function showIntro(){
    startEl.style.display = "block";
    timerEl.style.display = "none";
    questionEl.classList.add("questions");
    }
  function hideTimer(){
  timerEl.style.display = "none";
  }
  function showTimer(){
  timerEl.style.display = "block";
  }
  function hideQuestions(){
  questionEl.style.display = "none";
  }
  function showQuestions(){
  questionEl.style.display = "block";
  }
  function hideScores(){
  highScores.style.display = "none";
  }
  function showScores(){
  highScores.style.display = "block";
  }
  function hideInitials(){
  initials.style.display = "none";
  }
  function showInitials(){
  initials.style.display = "block";
  }
  function hideEnd(){
  endEL.style.display = "none";
  }
  function finalPrompt(){
  endEL.style.display = "block";
  }

  // begining of the questoinaire
  function start(){
      questionTitleEl.textContent = currentQuestion.question;
      currentQuestion = questions[questionIndex];

      for (var i = 0; i < choices; i++){
        var button = document.getElementById("answer" + i);
        button.textContent = currentQuestion.choices[i];
        button.addEventListener("click", checkAnswer);
      }

    }


    // Checks the answer the user selected
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
      hideTimer();
      hideQuestions();
      finalPrompt();
      return;
    }
  }

  // function to start the timer
  function countdown(timerEl) {
    var intervalId = setInterval(function() {
      seconds--;
      timerEl.textContent = "Timer: " + seconds + " seconds remaining";
      if (seconds === 0) {
        clearInterval(intervalId);
      }
      else{
        return;
      }
    }, 1000);

  }

  function hideScores(){
    highScoreEl.style.display = "inline";

  }

  // this will start the question and prompt message
  var startOver = startEl.addEventListener("click",function() {
  clearIntro();
  start();
  countdown(timerEl);
  showTimer();

  });
  
  submit.addEventListener("click", function(event){
    event.preventDefault();
    
    var submit = document.getElementById("submit-name").value;
    
    localStorage.setItem("submit-name",submit);
    localStorage.setItem("submit-score",score);
    submit = localStorage.getItem("submit-name");
    initials.textContent = submit + "'s score was: " + score;
    hideEnd();    
    questionIndex = 0;
    score = 0;
    seconds = 60;
    showScores();
    //showIntro(); // fix this 
  });

  highScoreBtn.addEventListener("click", function(event){
    event.preventDefault();
    seconds = 0;
  });
