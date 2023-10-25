
for (var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",function (){
    makesound(this.innerHTML);
    buttonAnimation(this.innerHTML);
});
}
document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});
function makesound(key){
switch (key) {
    case "w":
        var tom1=new Audio("../assets/sounds/drum-kit-sounds/tom-1.mp3");
        tom1.play();
        break;
    case "a":
        var tom3=new Audio("../assets/sounds/drum-kit-sounds/tom-3.mp3");
        tom3.play();
        break;
    case "s":
        var crash=new Audio("../assets/sounds/drum-kit-sounds/crash.mp3");
        crash.play();
        break;
    case "d":
        var kick=new Audio("../assets/sounds/drum-kit-sounds/kick-bass.mp3");
        kick.play();
        break;
    case "j":
        var snare=new Audio("../assets/sounds/drum-kit-sounds/snare.mp3");
        snare.play();
        break;
    case "k":
        var tom4=new Audio("../assets/sounds/drum-kit-sounds/tom-4.mp3");
        tom4.play();
        break;
    case "l":
        var tom2=new Audio("../assets/sounds/drum-kit-sounds/tom-2.mp3");
        tom2.play();
        break;
    default:
        console.log(key);
}
}
function buttonAnimation(curruntKey){
    var activeButton=document.querySelector("."+curruntKey);
    activeButton.classList.toggle("pressed");
    setTimeout(function(){
        activeButton.classList.toggle("pressed");
    },100)
}