var words = ["Leaf", "Lettuce", "Tank", "Hawaii", "Orange", "Gray Z", "Who", 
"Figs", "Alice", "Annie", "Yukon", "Boo", "Theodore", "Cher", "Amos", "Police", "Amarillo"]
var word;
var jokes = {
	"Leaf": "Leaf me alone!",
	"Lettuce": "Lettuce in and you'll find out!",
	"Tank": "You're welcome!",
	"Hawaii": "I'm fine, Hawaii you?",
	"Orange": "Orange you even going to open the door!",
	"Gray Z": "Gray Z mixed up kid.",
	"Who": "Is there an owl in here?",
	"Figs": "Figs the doorbell, it's broken!",
	"Alice": "Alice fair in love and war.",
	"Annie": "Annie thing you can do, I can do better.",
	"Yukon": "Yukon say that again!",
	"Boo": "Well you don't have to cry about it.",
	"Theodore": "Theodore is stuck and it won't open!",
	"Cher": "Cher would be nice if you opened the door!",
	"Amos": "A mosquito bit me!",
	"Police": "Police let us in, it's cold out here!",
	"Amarillo": "Amarillo nice guy."
} 


function knock() {
	document.getElementById("jokeDisplay").innerHTML = "Knock knock";
	document.getElementById("buttontext").innerHTML = "Who's there?";
	document.getElementById("button").onclick = genJoke;
}
function genJoke() {
	var randomNumber = Math.floor(Math.random()*(words.length));
	word = words[randomNumber]; 
	document.getElementById("jokeDisplay").innerHTML = word;
	document.getElementById("buttontext").innerHTML = word + " who?";
	document.getElementById("button").onclick = genAnswer;
}

function genAnswer() {
	document.getElementById("jokeDisplay").innerHTML = jokes[word];
	document.getElementById("buttontext").innerHTML = "hahahahahaha!";
	document.getElementById("button").onclick = knock;
}






