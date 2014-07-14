
$(document).ready(function(){
	
	$('#tweet-controls').hide();
	$('.stats').hide();
	$('.reply').hide();
	
	$('.tweet-compose').click(function(){
		toggleComposeHeight();
		$('#tweet-controls').show();
		});




var toggleComposeHeight = function(){
	var compose = $('#toggle');
	
	if (compose.height() == 21){
		compose.height('42px');
		}else {
			compose.height('21px');
		}
	}




var maxCharacters = 140;

$('#count').text(maxCharacters);
$('textarea').bind('keyup keydown', function(){
  var count = $('#count');
  var characters = $(this).val().length;

   if (characters > maxCharacters - 11) {
   	count.addClass('over');
   } else {
   	count.removeClass('over');
   }

   if (characters > maxCharacters) {
   	$('button').addClass('disabled');
   } else {
   	$('button').removeClass('disabled');
   }

   count.text(maxCharacters - characters);
	});




$('#tweet-submit').on('click', function(){
	var newTweetText = $('.tweet-compose').val();
	var newTweetBox = $("#stream > .tweet").first().clone();
	$(newTweetBox).find("p").first().text(newTweetText);
	$(newTweetBox).find("img").first().attr("src",'img/alagoon.jpg');
	$(newTweetBox).find(".fullname").first().text("amber moss");
	$(newTweetBox).find(".username").first().text("@ambs");
	$('#stream').prepend(newTweetBox);
	$('#char-count').val(140);
	$('.tweet-compose').val('');
});



$('.tweet').click(function(){
	$(this).find('tweet-controls').slideDown();
	$(this).find('.stats').slideDown();
	$(this).find('.reply').slideDown();
})

$('.tweet').dblclick(function(){
	$(this).find('tweet-controls').slideUp();
	$(this).find('.stats').slideUp();
	$(this).find('.reply').slideUp();
})


});








