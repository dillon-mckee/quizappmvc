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
}
quizModel.prototype.getQuestion = function(questionIndex) {
  // return this.currentquestion
  return this.questions[this.currentquestion];

}

quizModel.prototype.nextQuestion = function() {
  return this.currentquestion++;
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

var myQuiz = new quizModel();

// myQuiz.getQuestion();
// myQuiz.nextQuestion();
// console.log(myQuiz.getQuestion());
myQuiz.answer(0);
myQuiz.answer(1);
myQuiz.answer(2);
myQuiz.answer(3);
myQuiz.checkAnswers();
console.log(myQuiz.useranswers);
console.log(myQuiz.score);

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
}
quizView.prototype.render

quizView.prototype.showResults = function() {
    questionsPageElement.hide();
    resultsPageElement.show();
};

quizView.prototype.displayQuestion = function() {
  //on page load, display current question
  this.questionElement.append(this.questions.text[this.currentquestion]);
  console.log(this.questions.text[this.currentquestion]);
};

quizView.prototype.resetScore = function() {
    scoreElement.text(0);
};
quizView.prototype.increaseScore = function() {
    var score = parseInt(scoreElement.text(), 10);
    scoreElement.text(score + 1);
};
quizView.prototype.setQuestion = function(currentquestion) {
    var question = questions[currentquestion];
    questionCurrentElement.text(currentquestion);
    questionElement.text(question.text);
    answersElement.empty();
    for (var i=0; i<question.answers.length; i++) {
        var answer = question.answers[i];
        answersElement.append('<li><button type="button">' + answer + '</button></li>');
    }
};
quizView.prototype.answersElement.on('click', 'button', function() {
    var choice = $(this).parent().index();
    var currentquestion = parseInt(questionCurrentElement.text(), 10);
    var question = questions[currentquestion];
    if (question.correct === choice) {
        increaseScore();
    }

    if (currentquestion + 1 < questions.length) {
        setQuestion(currentquestion + 1);
    }
    else {
        showResults();
    }

var myQuizView = new quizView('.questions-page','.question-current','.questions-total', '.question', '.answers',
  '.results-page', '.score', '.restart-button');
// quizView.prototype.resetScore = function() {
//     scoreElement.text(0);
// };
// quizView.prototype.increaseScore = function() {
//     var score = parseInt(scoreElement.text(), 10);
//     scoreElement.text(score + 1);
// };
// quizView.prototype.setQuestion = function(currentquestion) {
//     var question = questions[currentquestion];
//     questionCurrentElement.text(currentquestion);
//     questionElement.text(question.text);
//     answersElement.empty();
//     for (var i=0; i<question.answers.length; i++) {
//         var answer = question.answers[i];
//         answersElement.append('<li><button type="button">' + answer + '</button></li>');
//     }
// };
// quizView.prototype.answersElement.on('click', 'button', function() {
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
// });
//show questions to the DOM
//accept answers
//show question number
//change questions
//show report card
