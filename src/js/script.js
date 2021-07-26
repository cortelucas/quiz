let currentQuestion = 0;

showQuestion();

function showQuestion() {
  if (questions[currentQuestion]) {
    let q = questions[currentQuestion];
    let options = q.options;
    let fieldOptions = document.querySelector('.options');
    
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

  }
}