$(document).ready(function() {

	$('.js-main-slider').slick({
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>'
	});

	$('.multiple-items').slick({
		dots: true,
		arrows: false,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4
	});

	$('.js-gallery-slider').slick({
		infinite: false,
		dots: true,
	  	arrows: false
	});

	$('.js-tabs').tabslet();

	$('.js-tabs').on("_after", function() {
		$(this).find('.js-gallery-slider').slick('reinit');
	});

	$(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.scroller').fadeIn();
        } else {
            $('.scroller').fadeOut();
        }
    });
    $('.scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

	$('.show-next-box-btn[href^="#"], .main-menu a[href^="#"]').click(function () { 
	 elementClick = $(this).attr("href");
	 destination = $(elementClick).offset().top;
	 if($.browser.safari){
	   $('body').animate( { scrollTop: destination }, 1200 );
	 }else{
	   $('html').animate( { scrollTop: destination }, 1200 );
	 }
	 return false;
	});

});

