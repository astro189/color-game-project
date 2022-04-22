var numSquare=6;
var color= generateRandomColor(numSquare);
var h1=document.querySelector("h1");
var squares = document.querySelectorAll(".Squares");
var pickedcolor = pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var reset=document.querySelector("#reset");
var selected=document.querySelector("selected");
var modeSelected=document.querySelectorAll(".mode");
colorDisplay.textContent = pickedcolor;

for(var i=0;i<modeSelected.length;i++){
    modeSelected[i].addEventListener("click",function(){
        modeSelected[0].classList.remove("selected");
        modeSelected[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquare=3 : numSquare=6;
        reset_val();
    })

}

function reset_val(){
    //generate all new colors 
    color=generateRandomColor(numSquare);
    //pick a new random color 
    pickedcolor=pickColor();
    //change display color to new picked color
    colorDisplay.textContent=pickedcolor;
    reset.textContent="NEW COLOR";
    //apply new randomly generated colors to our squares
    for(var i=0; i<squares.length;i++){
        if(color[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor=color[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
    //changong color of header to picked color
    h1.style.backgroundColor="steelblue";
    messageDisplay.textContent="";
    this.textContent="NEW COLOR";
}

reset.addEventListener("click",function(){
    reset_val();
});

for(var i=0; i<squares.length;i++){
    //adding initial colors to square
    squares[i].style.backgroundColor=color[i]

    //adding click listeners to squares
    squares[i].addEventListener("click",function(){
        //getting the clicked color
        var clickedColor=this.style.backgroundColor;
        //comparing clicked color to the random generated color
        if(clickedColor === pickedcolor){
            messageDisplay.textContent="Correct";
            changecolor(clickedColor);
            h1.style.backgroundColor=clickedColor;
            reset.textContent="Play Again"
        }
        else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try Again";
        }
    });
}

function changecolor(color){
    //loop through all colors
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor =color;
    }
        //change all colors to correctly selected color
}

function pickColor(){
    //Math.floor() reduces a float number to an integer
    //Math.random() generates random number between 0 and 1 but we want random number between 0 and 6 
    //hence we mutiply by length of our color array
    var random=Math.floor(Math.random()*color.length);
    return color[random];
}

function generateRandomColor(num){
    //creating an array for storing our random generated  rgb values
    var arr=[];
    //pushing the values into the arary
    for(var i=0;i<num;i++){
        //creating a function for generating a random rgb color pallete 
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    //generating random value between 0-255 for red
    var r=Math.floor(Math.random()*256);
    //generating random value between 0-255 for green
    var g=Math.floor(Math.random()*256);
    //generating random value between 0-255 for blue
    var b=Math.floor(Math.random()*256);
    //returning the rgb values to be pushed into our array
    return "rgb("+ r + ", " + g + ", " + b+ ")";
}