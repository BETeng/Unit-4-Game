//JAVASCRIPT FILE FOR UNIT 4 GAME
//randomly generate a number 1-100 for random-number
// randomly generate number for 4 other objects
// generate a counter for wins/losses
//generate another value for score taht adds value from gems but starts at 0 (parseInt?)
//onclick function that adds value of gem to score-board
var wins = 0;
var losses = 0;

var randomNum = randomize(19, 120)
console.log("randomNum: "+randomNum);

var gems1 = randomizeGems();
var gems2 = randomizeGems();
var gems3 = randomizeGems();
var gems4 = randomizeGems();
var samegem = ''
var keepRunning = true;
var score = 0;
console.log("g1: "+gems1);
console.log("g2: "+gems2);
console.log("g3: "+gems3);
console.log("g4: "+gems4);

$("#win-score").text("Wins: "+wins);
$("#loss-score").text("Losses: "+losses);
$("#score-board").text("Score: "+score);


// if(keepRunning == false){
//   restart();
// }

$("#gem1").click(function(){
 console.log("g1 added") 
 score+=gems1;
 console.log("score: "+score) 
  if(score > randomNum){
    alert("You LOSE");
    keepRunning=false;
    console.log("lose: "+keepRunning);
    losses++;
    $("#loss-score").text("Losses: "+losses);
    restart();
  }
  else if(score < randomNum){
    console.log("not broken yet");
    $("#score-board").text("Score: "+score);
}
  else{
    console.log("you win");
    wins++;
    keepRunning = false;
    console.log("win: "+keepRunning);
    restart();
    $("#win-score").text("Wins: "+wins);
    alert("YOU WIN");
    restart();
  }
})
$("#gem2").click(function(){
  console.log("g2 added") 
  score+=gems2;
  console.log("score: "+score) 
   if(score > randomNum){
     alert("You LOSE");
     keepRunning=false;
     console.log("lose: "+keepRunning);
     losses++;
     $("#loss-score").text("Losses: "+losses);
     restart();
   }
   else if(score < randomNum){
     console.log("not broken yet");
     $("#score-board").text("Score: "+score);
 }
   else{
     console.log("you win");
     wins++;
     keepRunning = false;
     console.log("win: "+keepRunning);
     restart();
     $("#win-score").text("Wins: "+wins);
     alert("YOU WIN");
     restart();
   }
 })
 $("#gem3").click(function(){
  console.log("g3 added") 
  score+=gems3;
  console.log("score: "+score) 
   if(score > randomNum){
     alert("You LOSE");
     keepRunning=false;
     console.log("lose: "+keepRunning);
     losses++;
     $("#loss-score").text("Losses: "+losses);
     restart();
   }
   else if(score < randomNum){
     console.log("not broken yet");
     $("#score-board").text("Score: "+score);
 }
   else{
     console.log("you win");
     wins++;
     keepRunning = false;
     console.log("win: "+keepRunning);
     restart();
     $("#win-score").text("Wins: "+wins);
     alert("YOU WIN");
     restart();
   }
 })
 $("#gem4").click(function(){
  console.log("g4 added") 
  score+=gems4;
  console.log("score: "+score) 
   if(score > randomNum){
     alert("You LOSE");
     keepRunning=false;
     console.log("lose: "+keepRunning);
     losses++;
     $("#loss-score").text("Losses: "+losses);
     restart();
   }
   else if(score < randomNum){
     console.log("not broken yet");
     $("#score-board").text("Score: "+score);
 }
   else{
     console.log("you win");
     wins++;
     keepRunning = false;
     console.log("win: "+keepRunning);
     restart();
     $("#win-score").text("Wins: "+wins);
     alert("YOU WIN");
     restart();
   }
 })



function restart(){
    gems1 = randomizeGems();
    gems2 = randomizeGems();
    gems3 = randomizeGems();
    gems4 = randomizeGems();
    score = 0;
    var keepRunning = true;
    console.log(keepRunning);
    console.log("g1: "+gems1);
    console.log("g2: "+gems2);
    console.log("g3: "+gems3);
    console.log("g4: "+gems4);
    $("#score-board").text("Score: "+score);

  }
 







function randomize(min,max){
  min = Math.floor(min);
  max = Math.ceil(max);
  return Math.floor(Math.random()*(max-min+1))+min;
}
function randomizeGems(){
  return randomize(1,12)
}



// $(".gems").on(click, function(){


//  

// function differentNum(a){
//   console.log(differentNum(gem));
//   for(var i=0; i<a.length; i++){
//     if(a[i].include(a)){
//       return true;
//     }
//   }
//   console.log("randomize"+gem[i]+": " +randomize(1,12));
//   console.log(differentNum);
//   return false;
// };

// })






  // CODE FOR ARRAY GEM
// for(var i=0; i<gem.length; i++){
//   console.log("randomize"+gem[i]+": " +randomize(1,12)); //random gem
// };




// var gems = [1,2,3,4];
// console.log(this.gems[i])
// })