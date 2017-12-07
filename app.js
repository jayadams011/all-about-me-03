' use strict';
var endUser = prompt ('Hi, What is your name?');
      console.log('The endUsers name is', endUser);

var answerCook = prompt(endUser +' '+'Do you like to cook: yes or no?');
  if (answerCook){
      answerCook = answerCook.toLowerCase();
  }
  if (answerCook === 'yes'){
      alert('Awesome! I bet you are a foodie!');
      console.log(answerCook,endUser,'likes to cook');
  }
  if (answerCook === 'no'){
      alert('Well, I bet you still enjoy eating out with friends!');
      console.log(answerCook, endUser,'doesn\'t like to cook');
  }

var answerTravel = prompt(endUser+ ' ' +'Do you like to Travel: yes or no?');
    if (answerTravel){
        answerTravel = answerTravel.toLowerCase();
    }

    if (answerTravel === 'yes'){
        alert('Thats fun.  I wonder if we have seen the same things!');
        console.log(answerTravel,endUser,'likes to travel');
    }
    if (answerTravel === 'no'){
        alert('You must do local vacations then.');
        console.log(answerTravel, endUser,'doesn\'t like to travel');
    }

    var answerGuitar = prompt(endUser+ ' ' +'Do you play a musical instrument? yes or no?');
        if (answerGuitar){
            answerGuitar = answerGuitar.toLowerCase();
        }

        if (answerGuitar === 'yes'){
            alert('Cool, I play guitar.');
            console.log(answerGuitar,endUser,'plays an instrument');
        }
        if (answerGuitar === 'no'){
            alert('You must have other hobbies then.');
            console.log(answerGuitar, endUser,'doesn\'t play an instrument');
        }

      var answerShows = prompt(endUser+ ' ' +'Do you enjoy live shows?');
            if (answerShows){
                answerShows = answerShows.toLowerCase();
            }

            if (answerShows === 'yes'){
                alert('Seattle has a lot of options');
                console.log(answerShows,endUser,'enjoys live shows.');
            }
            if (answerShows === 'no'){
                alert('So, Seattle has a pretty robust arts community.  You might find something you like');
                console.log(answerShows, endUser,'does\'t like live shows');
            }
        var answerTired = prompt(endUser+ ' ' +'Are you getting tired of my questions?');
            if (answerTired){
                answerTired = answerTired.toLowerCase();
            }

            if (answerTired === 'yes'){
                alert('it\'s ok. We are almost done.');
                console.log(answerTired,endUser,'is tired of these questions');
            }
            if (answerTired === 'no'){
                alert('Well, only a couple more.');
                console.log(answerTired, endUser,'isn\'t ready to quit');
            }
//question six
var number;
var counter = 1;

while (number !== 20) {
  number = parseInt(prompt('what is your fav number?'));

  if (number < 20) {
    alert('sorry you guessed too low');
    counter++;
  } else if (number > 20) {
    alert('sorry you guessed too high');
    counter++;
  } else if (number === NaN || number === null) {
    alert('please enter a number');
    counter++;
  }
}

console.log('counter:', counter);

//question seven
          var statesLived = ['Arizona', 'Nevada', 'California'];
var answer = prompt('Can you guess a state that I have lived in besides Washington?');
//if (statesLived){
  //  statesLived = statesLived.toLowerCase();
//}
var flag;

for (var i = 0; i < statesLived.length; i++) {
  console.log('each iteration:', statesLived[i]);
  // making it work here
  if (answer === statesLived[i]) {
    alert('nice job!  you got one!');
    flag = true;
    break;
  }
}

if (!flag) {
  alert('Sorry - I haven\'t lived there.');
}
