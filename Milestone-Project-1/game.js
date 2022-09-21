//event listener wait for any of the keys to be pressed
document.addEventListener("keydown", event => {
  //if statements to check if left or right arrow key was pressed
  if(event.key==="ArrowLeft"){
    //left was pressed so moveLeft function is called
    moveLeft();
  }
  if(event.key==="ArrowRight"){
    //right was pressed so moveRight function is called
    moveRight();
  }
});
//setting character div to variable
var character = document.getElementById("character");
//function for when left arrow key is pressed
function moveLeft(){
  //gets left position of character, and sets it to variable
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  //removes 100px from current position
    left -= 100;
  //if statement so charcter stays within game div
    if(left>=0){
       //makes it go left
        character.style.left = left + "px";
    }
}
//function for when right arrow key is pressed
function moveRight(){
  //gets right position of character and sets it to variable
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  //adds 100 px from current position
    left += 100;
  //if statement so charcter stays within game div
    if(left<300){
      //makes character go right
        character.style.left = left + "px";
    }
}
//sets block div to variable
var block = document.getElementById("block");
//counter to keep score
var counter = 0;
//changes left position of block to either 0px, 100px, or 300px, so it comes down in one of the three columns
//runs everytime animation runs
block.addEventListener('animationiteration', () => {
  //random = any random number under 3(0,1, or 2)
    var random = Math.floor(Math.random() * 3);
  //multiply by 100, (0,100, or 200)
    left = random * 100;
  //set new left position
    block.style.left = left + "px";
  //counter goes up by 1 every time 
    counter++;
});
//hit detection
//interval function that checks if block is on top of character
//runs every 1 millisecond
setInterval(function(){
  //gets left position of character
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
  //gets left position of block
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  //gets top position of block
    var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
  //checks if block is on top of character
    if(characterLeft==blockLeft && blockTop<500 && blockTop>300){
        alert("The Orb hit Goku!\nYou where able to protect Goku from " + counter + " Orb Balls!");
      //removes animation 
        block.style.animation = "none";
    }
},1);



//for iphone
document.getElementById("right").addEventListener("touchstart", moveRight);
document.getElementById("left").addEventListener("touchstart", moveLeft);