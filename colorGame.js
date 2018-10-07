var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

// --- //

init();

function init(){
	setupModeButtons();
	setupSquares();
	//function is being called to call other functions on init
	reset();
}

function setupModeButtons(){
	//mode buttons event listeners
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener('click', function(){
			//remove style from both and then add it to clicked
			modeButtons[0].classList.remove('selected');
			modeButtons[1].classList.remove('selected');
			this.classList.add('selected');
			//figure out how many squares to show
			this.textContent === 'Easy' ? numSquares = 3: numSquares = 6;
			//the above line of code represents the IF statement below
			//it's called Ternary Operator and it's good when we have
			//short IF statements
			reset();
		});
	}
}

function setupSquares(){
	//add color and set LISTENERS to squares
	for(var i = 0; i < squares.length; i++){
		//add colors to squares
		squares[i].style.backgroundColor = colors[i];
		//add listeners to each square
		squares[i].addEventListener('click', function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = 'Correct!';
				resetButton.textContent = 'Play Again?'
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = 'Try Again';
			}
		});
	}
}

function reset() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick new random color from array
	pickedColor = pickColor();
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			//unhide squares while array exists
			squares[i].style.display = 'block';
		} else {
			//hide squares on second line
			squares[i].style.display = 'none';
		}
	}
	//reset h1 color
	h1.style.background = 'steelblue';
	//change button content back to 'New Colors'
	resetButton.textContent = 'New Colors'
	//reset message in the center
	messageDisplay.textContent = '';
}

resetButton.addEventListener('click', function(){
	reset();
});


function changeColors(color){
	//loop thru all squares
	for(var i = 0; i < squares.length; i++){
		//change their colors
		squares[i].style.backgroundColor = color;
	}
}

function generateRandomColors(num){
	var array = [];
	//iterate on squares
	for(var i = 0; i < num; i++){
		//generate random color and populate array
		array.push(randomColor());
	}
	//return array
	return array;
}

// function chooses a number randomly (related to an array INDEX indirectly)
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	colorDisplay.textContent = colors[random];
	return colors[random];
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var randomColor = 'rgb(' + r + ', ' + g + ', ' + b + ')';
	return randomColor;
}

//CODE BEFORE REFACTORING

// var easyBtn = document.querySelector('#easyBtn');
// var hardBtn = document.querySelector('#hardBtn');

// easyBtn.addEventListener('click', function(){
// 	easyBtn.classList.add('selected');
// 	hardBtn.classList.remove('selected');
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = 'none';
// 		}
// 	}
// });

// hardBtn.addEventListener('click', function(){
// 	easyBtn.classList.remove('selected');
// 	hardBtn.classList.add('selected');
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	for(var i = 0; i < squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = 'block';
// 	}
// });


