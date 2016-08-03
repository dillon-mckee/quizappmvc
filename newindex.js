var quizModel = function (){
  this.currentquestion = 0;
  this.score = 0;
  this.useranswers = [];
  this.questions = [
    {
        text: 'First Question',
        answers: [
            '0815',
            '2B',
            'BAM128',
            'Barely'
        ],
        correct: 0
    },
    {
        text: 'Second Question',
        answers: [
            '0815',
            '2B',
            'BAM128',
            'Barely'
        ],
        correct: 1
    },
    {
        text: 'Third Question',
        answers: [
            '0815',
            '2B',
            'BAM128',
            'Barely'
        ],
        correct: 2
    },
    {
        text: 'Fourth Question',
        answers: [
            '0815',
            '2B',
            'BAM128',
            'Barely'
        ],
        correct: 3
    }
  ];
  this.onUpdate = null;
}
quizModel.prototype.getQuestion = function(questionIndex) {
  // return this.currentquestion
  return this.questions[this.currentquestion];

}

quizModel.prototype.nextQuestion = function() {
  return this.currentquestion++;
  if (this.onUpdate){
    this.onUpdate();
  }
}

quizModel.prototype.answer = function(answer) {
  this.useranswers.push(answer);
}

quizModel.prototype.checkAnswers = function() {
  for (var i = 0; i < this.useranswers.length; i++) {
    if (this.useranswers[i] == this.questions[i].correct) {
      this.score ++ ;
    }
  };
}

/// if answer = questions[i].correct.val(); increment this.score.
/// push answer to useranswer
/// currentquestion = quizmodel.questions[i]
///  if

/// What does View want from Model?
/// questions, answers, score, currentquestion, useranswers
var quizView = function (questionsSelector, questionCurrent, questionsTotal, question, answers, resultsPage, score, restartButton) {
  this.questionsPageElement = $(questionsSelector);
  this.questionCurrentElement = $(questionCurrent);
  this.questionsTotalElement = $(questionsTotal);
  this.questionElement = $(question);
  this.answersElement = $(answers);
  this.resultsPageElement = $(resultsPage);
  this.scoreElement = $(score);
  this.restartButtonElement = $(restartButton);
};

quizView.prototype.showResults = function() {
    questionsPageElement.hide();
    resultsPageElement.show();
};

// quiz.render('my question', [1,2,34,], 0, )

quizView.prototype.render = function(question, questionCurrent, questionsTotal) {
  this.questionElement.text(question)
  this.questionCurrentElement.text(questionCurrent)
  this.questionsTotalElement.text(questionsTotal)
    for (var j=0; j<question.answers.length; j++) {
        var answer = question.answers[j];
  this.answersElement.append('<li><button type="button">' + "answer1" + '</button></li>')
  /// if statement for resultsPageElement, scoreElement, restartButtonElement

}

// x.render('What color is the sky', 2, 2)

// //quizView.prototype.answersElement.on('click', 'button', function() {
//     var choice = $(this).parent().index();
//     var currentquestion = parseInt(questionCurrentElement.text(), 10);
//     var question = questions[currentquestion];
//     if (question.correct === choice) {
//         increaseScore();
//     }

//     if (currentquestion + 1 < questions.length) {
//         setQuestion(currentquestion + 1);
//     }
//     else {
//         showResults();
//     }

// myQuiz.getQuestion();
// myQuiz.nextQuestion();
// console.log(myQuiz.getQuestion());

// myQuiz.answer(0);
// myQuiz.answer(1);
// myQuiz.answer(2);
// myQuiz.answer(3);
// myQuiz.checkAnswers();
// console.log(myQuiz.useranswers);
// console.log(myQuiz.score);

var myQuizView = new quizView('.questions-page','.question-current','.questions-total', '.question', '.answers',
  '.results-page', '.score', '.restart-button');

myQuizView.render('a question', 7, 9);

var Controller = function(model, view) {
  model.onUpdate = function() {
    console.log('test');
  }

  model.nextQuestion();

}

$(document).ready(function(){
  var myQuiz = new quizModel();
  var myQuizView = new quizView('.questions-page','.question-current','.questions-total', '.question', '.answers',
  '.results-page', '.score', '.restart-button');
  var controller = new Controller(myQuiz, myQuizView);
});



//show questions to the DOM
//accept answers
//show question number
//change questions
//show report card
