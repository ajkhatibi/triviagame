$(document).ready(function(){
var time;
var questions = ["Who physically wrote the United States Constitution?", "When was George Washington born?", "Who was the Prime Minister during the revolutionary war?"]
var answers = ["Gouverner Morris", "April 30th 1789", "The Earl of Guilford"]

function stop(){
	clearTimeout(time);
}

function change(){

	var i = 0
	$('#game p').one("click", function(){
	$('#game').html(questions[0])
	$('#game').append(answers[0])




})
	i++
	if (i >= questions.length){

	}

}

function setClock(){
	time = setTimeout(change)
}


$('#game p').one("click", function(){
	$('#game').html('<p>Who physically wrote the United States Constitution?</P>')
	$('#game').append('<p>George Washington</p>')
	$('#game').append('<p>Thomas Jefferson')
	$('#game').append('<p>Gouverner Morris</p>')
})



})
