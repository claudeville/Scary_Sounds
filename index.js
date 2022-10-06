var numberOfDrumButtons = document.querySelectorAll(".scary").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".scary")[i].addEventListener("click", function (){

 var buttonInnerHTML = this.innerHTML;

 makeSound(buttonInnerHTML);

 buttonAnimation(buttonInnerHTML);

});

}

//Detecting Keyboard Press

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key) {

  switch (key) {
    case "s":
      var cat = new Audio("sounds/tiger.mp3");
      cat.play();
     break;

    case "c":
      var werewolf = new Audio("sounds/werewolf.mp3");
      werewolf.play();
      break;


    case "a":
     var fangs = new Audio("sounds/witch.mp3");
     fangs.play();
     break;


    case "r":
      var ghost = new Audio("sounds/laughingghost.mp3");
      ghost.play();
      break;


    case "y":
      var skull = new Audio("sounds/scream.mp3");
      skull.play();
      break;



     default: console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
