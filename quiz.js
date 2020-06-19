const startBtn = document.querySelector('#start-btn');
const nextBtn = document.querySelector('#next-btn');
const questionContainer = document.querySelector('#question-container');
const questionElement = document.querySelector('#questions');
const answerButtons = document.querySelector('#answer-btns');
let shuffledQuestion, currentQuestionIndex
startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', ()=>{
    currentQuestionIndex++
    setNextQuestion();
})

function startGame(){
   startBtn.classList.add('hide');
   nextBtn.classList.add('hide');
   shuffledQuestion = questions.sort(() => Math.random() - .5);
   currentQuestionIndex = 0;
   questionContainer.classList.remove('hide');
   setNextQuestion();
}

function setNextQuestion(){
    reset();
   showQuestion(shuffledQuestion[currentQuestionIndex])
}
function showQuestion(question){
   questionElement.innerHTML = question.question;
   /*loop through the answer array and create a button for 
   each correct and wrong answer*/
   question.answers.forEach(ans =>{
       const button = document.createElement('button');
       button.innerText = ans.text;
       button.classList.add('btn');
       if(ans.correct){
           //adding a data attribute to our button element...
           button.dataset.correct = ans.correct
       }
       button.addEventListener('click', selectAnswer);
       answerButtons.appendChild(button);
   })
}
//this function resets the entire container and hides the next button
function reset(){
    nextBtn.classList.add('hide');
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(event){
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtons.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestion.length > currentQuestionIndex + 1){
        nextBtn.classList.remove('hide');
    }else{
        startBtn.innerText = 'Restart';
        startBtn.classList.remove('hide');
    }
    
}

function setStatusClass(element, correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}
function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question : "What is the product of 3 and 4?",
        answers : [
            {text : "12", correct :true},
            {text : "34", correct: false}
        ]
    },
    {
        question : "What is the product of 3 and 4?",
        answers : [
            {text : "12", correct :true},
            {text : "34", correct: false}
        ]
    },
    {
        question : "What is the product of 3 and 4?",
        answers : [
            {text : "12", correct :true},
            {text : "34", correct: false}
        ]
    },
    {
        question : "What is the product of 3 and 4?",
        answers : [
            {text : "12", correct :true},
            {text : "34", correct: false}
        ]
    },
    {
        question : "What is the product of 3 and 4?",
        answers : [
            {text : "12", correct :true},
            {text : "34", correct: false}
        ]
    }
]