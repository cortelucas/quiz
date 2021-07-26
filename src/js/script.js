//initial data
let currentQuestion = 0;
let correctAnswers = 0;

showQuestion();

//events
let resetButton = document.querySelector('.scoreArea button');

resetButton.addEventListener('click', resetEvent);

//functions
function showQuestion() {
  if (questions[currentQuestion]) {
    let q = questions[currentQuestion];
    let options = q.options;
    let fieldOptions = document.querySelector('.options');

    showProgressBar();
    
    document.querySelector('.scoreArea').style.display = 'none';
    document.querySelector('.questionArea').style.display = 'block';

    document.querySelector('.question').innerHTML = q.question;
    
    let optionHTML = '';

    for(let i in options) {
      optionHTML += `<div data-opt=""${i}" class="option"><span>${parseInt(i) + 1}</span>${options[i]}</div>`;
    }
    fieldOptions.innerHTML = optionHTML;

    document.querySelectorAll('.options .option').forEach(item => {
      item.addEventListener('click', optionClickEvent);
    });

  } else {
    finishQuiz();
  }
}

function optionClickEvent(e) {
  let clickedOption = parseInt(e.target.getAttribute('data-opt'));

  if (questions[currentQuestion].answer === clickedOption) {
    correctAnswers++;
  } 
  
  currentQuestion ++;
  showQuestion();
}

function showProgressBar() {
  let percent = Math.floor((currentQuestion / questions.length) * 100);
  let progressBar = document.querySelector('.progress--bar');

  progressBar.style.width = `${percent}%`;
}

function finishQuiz() {
  let points = Math.floor((correctAnswers / questions.length) *100);

  if (points < 30) {
    document.querySelector('.scoreText1').innerHTML = `Ta ruim em!?`
    document.querySelector('.scorePct').style.color = '#FF0000';
  } else if (points >= 30 && points < 70) {
    document.querySelector('.scoreText1').innerHTML = `Muito Bom!`
    document.querySelector('.scorePct').style.color = '#FFFF00';
  } else if (points >= 70) {
    document.querySelector('.scoreText1').innerHTML = `Excelente!!!!`
    document.querySelector('.scorePct').style.color = '#0D630D';
  }

  document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`
  document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} e acertou ${correctAnswers}!`

  document.querySelector('.scoreArea').style.display = 'block';
  document.querySelector('.questionArea').style.display = 'none';

  document.querySelector('.progress--bar').style.width = '100%';
}

function resetEvent() {
  correctAnswers = 0;
  currentQuestion = 0;
  showQuestion();
}