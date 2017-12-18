$(document).ready(function(){
	$('.tab-tab').find('a').on('click', function(e){
		e.preventDefault();
		var tabName = $(this).attr('href');

		$('.tab-tab a').removeClass('active');
		$('.tab-cont li').removeClass('active');

		$(this).addClass('active');
		$(tabName).addClass('active');
	});
});