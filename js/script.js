$(document).ready(function(){
	
	$('div[class|=skin] img').each(function(index){
		var $title = $(this).attr('alt');
		var $width = $(this).width();
		var $height = $(this).height();

		$(this).wrap('<figure></figure>');
		//$(this).parent().css("width",$width);
		$(this).parent().append('<figcaption>'+ $title +'</figcaption>');
	});
});














