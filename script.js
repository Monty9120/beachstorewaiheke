$(function(){
	console.log('hello')
	$('.i-image').on('mouseover',function(){
		$(this).find('.i-overlay').css('transform','translateY(0px)');

		$(this).find('i').css({
			transform :'translateY(100px)',
			opacity : 1,
		});
	});
	$('.i-image').on('mouseout',function(){
		$(this).find('.i-overlay').css('transform','translateY(300px)');

		$(this).find('i').css({
			transform: 'translateY(0px)',
			opacity : 0,

		});
	});

});