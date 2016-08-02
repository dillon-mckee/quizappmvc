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

quizModel.prototype.checkAnswers = function() {

}

var myQuiz = new quizModel();

// myQuiz.getQuestion();
// myQuiz.nextQuestion();
// console.log(myQuiz.getQuestion());




/// if answer = questions[i].correct.val(); increment this.score.
/// push answer to useranswer
/// currentquestion = quizmodel.questions[i]
///  if

/// What does View want from Model?
/// questions, answers, score, currentquestion, useranswers
