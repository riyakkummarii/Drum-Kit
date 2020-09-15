// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick()
// {
//   alert("I got clicked");
// }

// parenthesis for function is not needed here
// Without parentheses you're not actually calling the function.
// A function name without the parentheses is a reference to the function. ...
// This is because you are passing the function as an argument/parameter to the addEventListener() method.


//document.querySelector("button").addEventListener("click",function(){alert("I got clicked");});
// This type of function is called anonymous function.

function  valueOfKeyPressedorClick(sound_trigger) {

  switch (sound_trigger) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      console.log(sound_trigger);

  }

  // console.log(this);
  // this.style.color="green";
}



var buttons = [];
buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click",
   function()
   { var buttonInnerHTML=this.innerHTML;
     valueOfKeyPressedorClick(buttonInnerHTML);
     buttonAnimation(buttonInnerHTML);
   });
}
  document.addEventListener("keydown",
function(event){
  valueOfKeyPressedorClick(event.key);
  buttonAnimation(event.key);
});


function buttonAnimation(key)
{
 var activeButton=document.querySelector("."+key);
 activeButton.classList.add("pressed");

 setTimeout(function(){
   activeButton.classList.remove("pressed");} ,100);

}
