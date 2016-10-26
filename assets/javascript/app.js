$(document).ready(function(){
var time;
var questions = ["<p>Who physically wrote the United States Constitution?</p>", "<p>When was George Washington born?</p>", "<p>Who was the Prime Minister during the revolutionary war?</p>"];
var answers = ["<p>Gouverner Morris<p>", "<p>April 30th 1789</p>", "<p>The Earl of Guilford</p>"];
var displayTime = 30;
var i = 0

function setClock(){
	time = setInterval(updateTime, 1000);

}

function updateTime(){
	displayTime -= 1;
	$('#time').html(displayTime);
	if (displayTime === 0){
		reset();
		change();
	}
	console.log(displayTime);
}

function rightAnswer(){
	console.log("hi")
	$('#game').append('<img src="assets/images/right.png">')
}

function stop(){
	clearInterval(time);
}

function reset(){
	clearInterval(time);
	time = setInterval(updateTime, 1000);
	displayTime = 30

}

function change(){


	$('#game').append(questions[i])
	$('#game #correct').append(answers[i])

	$('#game #correct').on('click', function(){
		rightAnswer();
		reset();

	$('#correct').hide();
	})

	i++
	if (i >= questions.length){
		stop();
	}

}




$('#start').one("click", function(){
	$('#start').hide();
	change();
	time = setInterval(updateTime, 1000);
})



})
