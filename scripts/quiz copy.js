(function(){
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          //changed score from +1 to +50
          numCorrect = numCorrect + 50;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
          numCorrect = numCorrect - 20;
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `Your score is: ${numCorrect} out of ${myQuestions.length * 50}`;
      if(numCorrect < 50){
        resultsContainer.innerHTML = `Your score is: ${numCorrect} out of ${myQuestions.length * 50} , You are Dumb :)`;
      }else if(numCorrect < 100){
        resultsContainer.innerHTML = `Your score is: ${numCorrect} out of ${myQuestions.length * 50} , Not bad kiddo`;
      }else if(numCorrect < 150){
        resultsContainer.innerHTML = `Your score is: ${numCorrect} out of ${myQuestions.length * 50} , Good job`;
      }else if(numCorrect == 200){
        resultsContainer.innerHTML = `Your score is: ${numCorrect} out of ${myQuestions.length * 50} , You are a genius`;
      }
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "What is Ozan's fav color?",
        answers: {
          a: "Black",
          b: "Blue",
          c: "Green",
          d: "Sukh"
        },
        correctAnswer: "d"
      },
      {
        question: "What is Ozan's fav programming language",
        answers: {
          a: "Nothing, Ozan hates studying give me more overwatch",
          b: "Java, because literally that's the only language we are truly learning",
          c: "JavaScript, bcz i dunno"
        },
        correctAnswer: "b"
      },
      {
        question: "What is Ozan's fav game",
        answers: {
          a: "Elden Ring",
          b: "Elden Ring",
          c: "Elden Ring",
          d: "Elden Ring"
        },
        correctAnswer: "a" && "b" && "c" && "d"
      },
      {
      question: "What is Ozan's lastname?",
      answers: {
        a: "Yurtsisigi",
        b: "Yurtisigi",
        c: "Yurtsigi",
        d: "I'm Ozan"
      },
      correctAnswer: "b"
    }
    ];
  
    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  