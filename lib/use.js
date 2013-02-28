$(function(){

	$('#box').box({
		boxes: ['box_1', 'box_2', 'box_3', 'box_4'],
		swipe: true
	});

	$('#prev').click(function(){
		$('#box').moveBox('left');
	});

	$('#next').click(function(){
		$('#box').moveBox('right');
	});
});