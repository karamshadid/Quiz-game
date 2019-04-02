var questions = [
{
  prompt: 'How long is the Great Wall of China?\n (a) 4000 miles \n (b) 3500 miles \n (c) 2000 miles',
  answer: '(c)';
},
{
  prompt: '',
  answer: '',
},
{
  prompt: '',
  answer: '',
},
{
  prompt: '',
  answer: '',
},
{
  prompt: '',
  answer: '',
},
{
  prompt: '',
  answer: '',
},
{
  prompt: '',
  answer: '',
},
{
  prompt: '',
  answer: '',
},
{
  prompt: '',
  answer: '',
},
{
  prompt: '',
  answer: '',
},
{
  prompt: '',
  answer: '',
},
{
  prompt: '',
  answer: '',
},
{
  prompt: '',
  answer: '',
},
{
  prompt: '',
  answer: '',
},
{
  prompt: '',
  answer: '',
},
]

var score = 0;

//loop through an array of questions

for (var i = 0; i < questions.length; i++) {
  // getting a response from user
  var response = window.prompt(questions[i].prompt);
  // checking if the response is equal to the answer
  if (response == quiestions[i].answer) {
    score++;
    alert('Correct!');
  } else {
    alert('Wrong');
  }
}

//giving a total score to the user
alert('You got' + score + 'out of' + questions.length + 'questions'.)
