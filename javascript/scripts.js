


$( document ).ready(function() {

    $('#top').click(function() {
	    $('html, body').animate({
	        scrollTop: $('.divpad').offset().top
	    }, 500);
	});

	$('#contact').click(function() {
	    $('html, body').animate({
	        scrollTop: $('.top').offset().top
	    }, 500);
	});
	
	  $('#mid').click(function() {
	    $('html, body').animate({
	        scrollTop: $('.mid').offset().top
	    }, 500);
	});

	    $('#bot').click(function() {
	    $('html, body').animate({
	        scrollTop: $('.bot').offset().top
	    }, 500);
	});

});
