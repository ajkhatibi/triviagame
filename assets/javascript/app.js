$(document).ready(function(){
var time;
var questions = ["<p>Who physically wrote the United States Constitution?</p>", "<p>When was George Washington born?</p>", "<p>Who was the Prime Minister during the revolutionary war?</p>"];
var answers = ["<p>Gouverner Morris<p>", "<p>April 30th 1789</p>", "<p>The Earl of Guilford</p>"];
var wrongAnswers = {
	question1: "george washington", "malcom x", "akbar the great"
	question2: 
}
var displayTime = 30;
var i = 0

function setClock(){
	time = setInterval(updateTime, 1000);

}

function updateTime(){
	displayTime -= 1;
	$('#time').html(displayTime);
	if (displayTime === 0){
		change();
	}
	console.log(displayTime);
}

function rightAnswer(){
	console.log("hi")
	$('#game').html('<img src="assets/images/right.png">')
}

function stop(){
	clearInterval(time);
}

function reset(){
	displayTime = 30
	stop():
}

function change(){


	// $('#game').html(questions[i])
	$('#game').append(answers[i])

	$('#game p').on('click', function(){
		rightAnswer();
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
	setClock();
})



})
