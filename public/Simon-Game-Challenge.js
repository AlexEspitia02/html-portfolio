var userClickedPattern=[];
var gamePattern=[];
var buttonColours=["red", "blue", "green", "yellow"];
$(document).one("keydown",function(){
    nextSequence();
});
$(".btn").on("click",function(){
    var userChosenColour=this.id;
    animatePress(userChosenColour);
    var audio=new Audio("../assets/sounds/Simon-Game-Challenge-sounds/"+userChosenColour+".mp3");
    audio.play();
    if (userClickedPattern.length<gamePattern.length){
    userClickedPattern.push(userChosenColour);
    }
    checkAnswer(userClickedPattern.length);
})
function checkAnswer(currentLevel){
    for (var i=0;i<currentLevel;i++) {
        if (userClickedPattern[i] !== gamePattern[i]){
            userClickedPatternempty();
            gamePatternempty();
            $(document).one("keydown",function(){
                nextSequence();
                })
            }
        }
    if (userClickedPattern.length===gamePattern.length){
        if (userClickedPattern.length===0){
            if (gamePattern.length===0){
                $("h1").text("Game Over, Press Any Key to Retart");
                $("body").addClass("game-over");
                setTimeout(function(){$("body").removeClass("game-over");},200);
                var audio2=new Audio("../assets/sounds/Simon-Game-Challenge-sounds/wrong.mp3");
                audio2.play();
                }
            }
        if (gamePattern.length>0){
        console.log(userClickedPattern);
        userClickedPatternempty();
        setTimeout(function(){nextSequence();},1000);
        console.log(gamePattern);
        }
    }
}
function animatePress(currentColour){
    $("."+currentColour).addClass("pressed");
    setTimeout(function(){
        $("."+currentColour).removeClass("pressed");
        },100)
}
function playSound(name){
    var audio1=new Audio("../assets/sounds/Simon-Game-Challenge-sounds/"+name+".mp3");
    audio1.play();
}
function nextSequence(){
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("."+randomChosenColour).fadeToggle(100).fadeToggle(100);
    playSound(randomChosenColour);
    $("h1").text("Level "+gamePattern.length);
}
function userClickedPatternempty(){
    userClickedPattern=[];
}
function gamePatternempty(){
    gamePattern=[];
}