$(document).ready(function(){
var time;
var questions = ["<p>Who physically wrote the United States Constitution?</p>", "<p>When was George Washington born?</p>", "<p>Who was the Prime Minister during the revolutionary war?</p>"];
var answers = ["<p>Gouverner Morris<p>", "<p>April 30th 1789</p>", "<p>The Earl of Guilford</p>"];
var q1 = {
	options: ['<p>george washington</p>', '<p>akbar the great</p>',]
}
var q2 = {
	options: ['<p>july 4th 1776</p>', '<p>june 6 1855</p>',]
}

var q3 = {
	options: ['<p>Akbar</p>', '<p>aliens from outer space</p>']
}

var wrongAnswers = [q1.options, q2.options, q3.options]
var displayTime = 10;
var i = 0

function setClock(){
	time = setInterval(updateTime, 1000);

}

function updateTime(){
	displayTime -= 1;
	$('#time').html(displayTime);
	$('#time').append('<p>You have these many seconds left</p>')
	if (displayTime === 0){
		reset();
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
	clearInterval(time);
	time = setInterval(updateTime, 1000);
	displayTime = 30

}

function change(){


	$('#game').append(questions[i])
	$('#game').append(wrongAnswers[i])
	$('#game').append(answers[i])

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
