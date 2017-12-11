'use strict';

// var endUser = prompt ('Hi, What is your name?');
//       console.log('The endUsers name is', endUser);
//
//
//
// function blah(){
//
// var answerCook = prompt(endUser +' '+'Do you like to cook: yes or no?');
//   if (answerCook){
//       answerCook = answerCook.toLowerCase();
//   }
//   if (answerCook === 'yes'){
//       alert('Awesome! I bet you are a foodie!');
//       console.log(answerCook,endUser,'likes to cook');
//   }
//     if (answerCook === 'no'){
//       alert('Well, I bet you still enjoy eating out with friends!');
//       console.log(answerCook, endUser,'doesn\'t like to cook');
//   }
// }
//
// blah();
//
// function travel(){
//
// var answerTravel = prompt(endUser+ ' ' +'Do you like to Travel: yes or no?');
//     if (answerTravel){
//         answerTravel = answerTravel.toLowerCase();
//     }
//
//     if (answerTravel === 'yes'){
//         alert('Thats fun.  I wonder if we have seen the same things!');
//         console.log(answerTravel,endUser,'likes to travel');
//     }
//     if (answerTravel === 'no'){
//         alert('You must do local vacations then.');
//         console.log(answerTravel, endUser,'doesn\'t like to travel');
//     }
//   }
//
// travel();
//
// function guitar(){
//
//     var answerGuitar = prompt(endUser+' ' +'Do you play a musical instrument? yes or no?');
//         if (answerGuitar){
//             answerGuitar = answerGuitar.toLowerCase();
//         }
//
//         if (answerGuitar === 'yes'){
//             alert('Cool, I play guitar.');
//             console.log(answerGuitar,endUser,'plays an instrument');
//         }
//         if (answerGuitar === 'no'){
//             alert('You must have other hobbies then.');
//             console.log(answerGuitar, endUser,'doesn\'t play an instrument');
//         }
//       }
//
//   guitar();
//
//   function shows(){
//
//       var answerShows = prompt(endUser+ ' ' +'Do you enjoy live shows?');
//             if (answerShows){
//                 answerShows = answerShows.toLowerCase();
//             }
//
//             if (answerShows === 'yes'){
//                 alert('Seattle has a lot of options');
//                 console.log(answerShows,endUser,'enjoys live shows.');
//             }
//             if (answerShows === 'no'){
//                 alert('So, Seattle has a pretty robust arts community.  You might find something you like');
//                 console.log(answerShows, endUser,'does\'t like live shows');
//             }
//         }
//
//       shows();
//
//       function tired(){
//
//         var answerTired = prompt(endUser+ ' ' +'Are you getting tired of my questions?');
//             if (answerTired){
//                 answerTired = answerTired.toLowerCase();
//             }
//
//             if (answerTired === 'yes'){
//                 alert('it\'s ok. We are almost done.');
//                 console.log(answerTired,endUser,'is tired of these questions');
//             }
//             if (answerTired === 'no'){
//                 alert('Well, only a couple more.');
//                 console.log(answerTired, endUser,'isn\'t ready to quit');
//             }
//         }
//
//     tired();

// //question six I grabbed this from davidbau.com and a couple of other sites - stillneeds work
// function mycount(){
//
//   var x = Math.floor(Math.random() * 30) + 1;
//   var turns = 5;
//   var hint = 'Can you guess my number, 1-30!';
//     //console.log (endUser+'s guess was' + guess)
//   while (turns > 0) {
//     var guess = prompt(hint +
//       ' You have ' + turns + ' guesses left.');
//       if (!guess) break;
//       guess = Number(guess);
//       if (guess == x) {
//         alert('YOU WIN!');
//         turns = 0;
//       } else {
//         if (guess < x) hint += ' Too small!';
//         if (guess > x) hint += ' Too big!';
//         turns = turns - 1;
//         console.log (endUser+'s guess was' + guess)
//       }
//     }
//     alert('The secret number was ' + x + '.');
//   }
//
//   mycount();





//question seven its buggy but sort of works
function states(){

  var stateCount = 6;
  var statesLived = ['Arizona', 'Nevada', 'California'];
  while (stateCount > 0){
    var stateAnswer = prompt('Can you guess a state that I have lived in besides Washington?');
    stateCount--;
  console.log(stateAnswer);

  for (var i = 0; i < statesLived.length; i++) {
    if (stateAnswer === statesLived[i]){
      alert('Nice, you got one!');
      stateCount = -1;
      //alert('Nice, you got one!');
      //console.log(stateAnswer);
      break;
    }
  }
  if(stateCount > 0){
    alert('Sorry, wrong answer. You have ' + stateCount + ' trys left.');
    console.log(stateAnswer);
  }
  if (stateCount === 0) {
    alert('Sorry, you are out of guesses. My previous homes were Arizona, Nevada, and California.');
    console.log(stateAnswer);
  }
}

states();





        /////

/////
