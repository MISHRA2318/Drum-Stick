//this is for acessing the button of the website 

for (var i = 0; i < 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var innerHtml = this.innerHTML;
     makeSound(innerHtml);
     animatedButton(innerHtml);
  });
}


// We can acess the keyboard key by calling made in function "keydown".

 document.addEventListener("keydown", function(event){
     makeSound(event.key);  
     animatedButton(event.key);
  
})


function makeSound(key){
   switch (key) {
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
      break;
  }
}

//Button Animation

function animatedButton(currentKey){
     var n=document.querySelector("." + currentKey);
n.classList.add("pressed");

setTimeout(function(){
   n.classList.remove("pressed");
},100)



}