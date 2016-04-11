$(document).ready(function() {

	$('.js-video-prev').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false,
		iframe: {
	        patterns: {
	            youtube: {
	                src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0'
	            }
	        }
	    }
	});

	$('.js-video-prev').click(function () {
	    return false;
	});

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
			fixed_offset = 140,

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top - fixed_offset}, 1500);
	});

	$(".js-show-next-box-btn").click(function(){
		$(this).toggleClass('active');
		$(this).next('.hide-box').slideToggle( 200,
			function(){
		    $(window).trigger('resize.px.parallax');
		});
	});

	var swidth=(window.innerWidth-$(window).width());

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Загрузка изображения #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">Не удалось загрузить изображение #%curr%</a>',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
		callbacks: {
			open: function() { $('.header__layout').css('padding-right', swidth + "px"); }, 
			close: function() { $('.header__layout').css('padding-right', 0); },
		}
	});

	$('.js-popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		showCloseBtn: false,
		mainClass: 'popup-modal-overlay',
		callbacks: {
			open: function() { $('.header__layout.fixed').css('padding-right', swidth + "px"); }, 
			close: function() { $('.header__layout.fixed').css('padding-right', 0); },
		}
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

});

