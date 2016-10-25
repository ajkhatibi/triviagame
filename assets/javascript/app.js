$(document).ready(function(){
var time;
var questions = ["<p>Who physically wrote the United States Constitution?</p>", "<p>When was George Washington born?</p>", "<p>Who was the Prime Minister during the revolutionary war?</p>"];
var answers = ["<p>Gouverner Morris<p>", "<p>April 30th 1789</p>", "<p>The Earl of Guilford</p>"];
var displayTime = 30;

function setClock(){
	time = setInterval(updateTime, 1000);

}

function updateTime(){
	displayTime -= 1;
	$('#time').html(displayTime);
	console.log(displayTime);
}

function rightAnswer(){
	console.log("hi")
	$('#game').html('<img src="assets/images/right.png">')
}

function stop(){
	clearInterval(time);
}

function change(){

	var i = 0

	// $('#game').html(questions[i])
	$('#game').append(answers[i])

	$('#game p').on('click', function(){
		rightAnswer();
	})

	i++
	if (i >= questions.length){
		stop();
	}

}




$('#game p').one("click", function(){
	change();
	setClock();
})



})
