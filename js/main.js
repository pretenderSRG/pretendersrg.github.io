$(function () {
	$(window).scroll(function() {
	    $('#form .order_form').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__rotateInDownLeft");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('#form .order_form').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__rotateInDownLeft");
	        }
	    });
	});
})