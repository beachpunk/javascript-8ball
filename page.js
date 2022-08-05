$(document).ready(function(){
  
  var magic8Ball = {};
  magic8Ball.listofanswers = ["Definitely", "Yeah for sure.", "Si", "Yes, definitely.", "Heck yeah", "As I see it, yes.", "Most likely.", "You got this!", "YES", "Signs point to yes.", "Haven't had my coffee, try again later.", "uhhhhh idk", "Better if you not know...", "Future seems sus.", "Talk a walk and ask me later.", "Don't count on it.", "I don't think so.", "Yeahhh no.", "If you had to come ask me, probably a no.", "Very doubtful."];
 
  magic8Ball.getAnswer = function(question)
  {
    var randomNumber = Math.random();
    var randomAnswer = Math.floor(randomNumber * this.listofanswers.length);
    var answer = this.listofanswers[randomAnswer];
    
    $("#8ball").effect( "shake" );
    $("#answer").text( answer );
    $("#answer").fadeIn(3000);
    $("#8ball").attr("src",
       "/img/magic8ballanswer.png");

    console.log(question);
    console.log(answer);
  };
  $("#answer").hide();

  var onClick = function()
  {
    $("#answer").hide();
    $("#8ball").attr("src", "/img/magic8ballQuestion.png");
    var question = prompt("What do you want to ask?");
    magic8Ball.getAnswer(question);
  };
  
  $("#questionButton").click( onClick );
});
function fadeIn(){
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices [0];
  
  speech.text = "hmmm let me think."
  window.speechSynthesis.speak(speech);

}