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

	$(".main-menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$(".js-show-next-box-btn").click(function(){
		$(this).toggleClass('active');
		$(this).next('.hide-box').slideToggle();
	});

});

