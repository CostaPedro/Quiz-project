$(document).ready(function(){

//list of questions

var state = {
  currentQuestion: 0,
  score: 0,
  items: [
    {
      question: '9+4=',
      answers: [
        { 
          text: 10,
          correct: false,
        },
        { 
          text: 11,
          correct: false,
        },
        { 
          text: 12,
          correct: false,
        },
        { 
          text: 13,
          correct: true,
        },
        { 
          text: 14,
          correct: false,
        },
      ],
    },
    {
      question: '19-7=',
      answers: [
        { 
          text: 110000,
          correct: false,
        },
        { 
          text: 12,
          correct: true,
        },
        { 
          text: 0,
          correct: false,
        },
        { 
          text: 13,
          correct: false,
        },
        { 
          text: 17,
          correct: false,
        },
      ]
    },
    {
      question: '15-2=',
      answers: [
        { 
          text: 2,
          correct: false,
        },
        { 
          text: 10,
          correct: false,
        },
        { 
          text: 0,
          correct: false,
        },
        { 
          text: 13,
          correct: true,
        },
        { 
          text: 72,
          correct: false,
        },
      ]
    },
    {
      question: '12+5=',
      answers: [
        { 
          text: 17,
          correct: true,
        },
        { 
          text: 9,
          correct: false,
        },
        { 
          text: 7,
          correct: false,
        },
        { 
          text: 8,
          correct: false,
        },
        { 
          text: 18,
          correct: false,
        },
      ]
    },
    {
      question: '9+6=',
      answers: [
        { 
          text: 2,
          correct: false,
        },
        { 
          text: 14,
          correct: false,
        },
        { 
          text: 15,
          correct: true,
        },
        { 
          text: 13,
          correct: false,
        },
        { 
          text: 10,
          correct: false,
        },
      ]
    },
  ]
}


//From Start Button




function start(){

$(".start").click (function () {
    event.preventDefault();
    console.log('working-start-button');
    renderQuestion();
});

};

start();




var renderQuestion = function () {
    console.log(state.items[state.currentQuestion].question)  
    $('.start-page').remove();


var displayScore =  '<div class="questions">'+
                    '<div class="updated-score">'+ ' Your score so far is:  ' + state.score + ' correct response(s) out of:  '+ state.currentQuestion +' question(s).'+'</div>';
                    
var questionText =  '<p class="math-question">'+ state.items[state.currentQuestion].question + '</p>' +
                    '<form class="options">'+
                    '<input class="option" type="radio" name="question1" value=0>' + state.items[state.currentQuestion].answers[0].text + '<br>'+
                    '<input class="option" type="radio" name="question1" value=1>' + state.items[state.currentQuestion].answers[1].text + '<br>'+
                    '<input class="option" type="radio" name="question1" value=2>' + state.items[state.currentQuestion].answers[2].text + '<br>'+
                    '<input class="option" type="radio" name="question1" value=3>' + state.items[state.currentQuestion].answers[3].text + '</br>'+
                    '<input class="option" type="radio" name="question1" value=4>' + state.items[state.currentQuestion].answers[4].text + '</br>'+
                    '<input type="button" id="next" value="Next" onlick="sum_values()">'+
                    '</form>'+
                    '</div>';

        


    console.log(state.currentQuestion);
    if (state.currentQuestion>0) {
    $('.score').html(displayScore);
  }


    $('.content').html(questionText);
    

};


$(".content").on('click','#next', function () {
    event.preventDefault();
    console.log('working-next-button');

    if ($("input[type=radio]:checked").length === 1) {
    console.log('checked');
    
    var answer = $("input[type=radio]:checked").val();
    console.log(answer);
    

    submitAnswer(state.items[state.currentQuestion],answer);
    
    }
    
    else alert('You must choose an answer!');



function submitAnswer(question, answer) {
  // Check if the answer is true or false
  console.log(answer);

  if (question.answers[answer].correct) {
    state.score++
    console.log(state.score);

  }
  if (state.currentQuestion < state.items.length - 1) {
    state.currentQuestion++
    renderQuestion()
  }
  else {
    $('.questions').remove();
    
    var endPage =   '<div class="updated-score">'+
                    ' You have finished your quiz. Nice Job! Your final score is:  ' +
                    state.score + ' correct response(s) out of:  '+ state.items.length +
                    ' question(s).'+'</div>';

    $('.content').html(endPage);              
    
  }
};






});


}); 