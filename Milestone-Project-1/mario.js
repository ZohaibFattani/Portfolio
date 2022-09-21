//variables to access character
let character = document.getElementById("character");
//variables to access block
let block = document.getElementById("block");
//function to jump
function jump(){
    //if statement so it only adds the animate class if it hasnt been added
    if(character.classList != "animate"){
        //access character
    character.classList.add("animate");
    }
    //so the character can jump again
    setTimeout(function(){
        //removes animationc class
        character.classList.remove("animate");
    },500);
}
//hit detection
//checks if character is on top of block
let checkDead = setInterval(function(){
    //get top position of character
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    //get left position of block
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    //checks if block is on left side of the character and is under the character(>20) and character hasnt jumped over block (130px)
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        //removes animation of block
        block.style.animation = "none";
        //removes block
        block.style.display = "none";
        alert("You Lose!")
    }
}, 10)
