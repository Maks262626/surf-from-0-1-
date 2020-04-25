$( document ).ready(function() {

  	$('.header-slider').slick({
	  dots: false,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear',
	  initialSlide: 2,
	});

	$('.serf-slider').slick({
		slidesToShow: 4,
  		slidesToScroll: 1,
  		focusOnSelect: true,
  	  	initialSlide: 7,
  	  	responsive: [
    {
      breakpoint: 1224,
      settings: {
        asNavFor: '.world-map',
        slidesToShow: 4
      }
    },
    {
      breakpoint: 988,
      settings: {
      	asNavFor: '.world-map',
        slidesToShow: 3,

      }
    },
     {
      breakpoint: 704,
      settings: {
      	asNavFor: '.world-map',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 406,
      settings: {
      	asNavFor: '.world-map',
        slidesToShow: 1,
        centerMode: true
      }
    },
  ]
	});

	$('.world-map').slick({
		arrows: false,
		slidesToShow: 8,
  		slidesToScroll: 1,
  		focusOnSelect: true,
  		asNavFor: '.serf-slider',
  		responsive: [
    	{
	      	breakpoint: 1224,
	      	settings: {
		        slidesToShow: 4,
		        initialSlide: 7,
    		}
   	 	},
   	 	{
	      	breakpoint: 988,
	      	settings: {
		        slidesToShow: 3   
    		}
   	 	},
   	 	{
	      	breakpoint: 704,
	      	settings: {
		        slidesToShow: 2 
    		}
   	 	},
   	 	{
      	breakpoint: 406,
      	settings: {
        	slidesToShow: 1,
        	centerMode: true
      }
    },
  		]
	});

	$('.hotel-slider').slick({
	  dots: false,
	  infinite: true,
	  speed: 500,
	  fade: false,
	  cssEase: 'linear',
	});

	$('.shop-slider').slick({
	  dots: false,
	  infinite: true,
	  speed: 500,
	  fade: false,
	  cssEase: 'linear',
	});

	$('.d_3').addClass("active");

	$('.header-slider').on('afterChange', function(event, slick, currentSlide){
  		if (currentSlide == 0) { 
  			$(".dots-slider__info").removeClass("active");
  			$('.d_1').addClass("active");
  			console.log('1'); 
  		}
  		else if (currentSlide == 1) { 
  			$(".dots-slider__info").removeClass("active");
  			$('.d_2').addClass("active");
  			console.log('2'); 
  		}
  		else if (currentSlide == 2) { 
  			$(".dots-slider__info").removeClass("active");
  			$('.d_3').addClass("active");
  			console.log('3'); 
  		}
  		else if (currentSlide == 3) { 
  			$(".dots-slider__info").removeClass("active");
  			$('.d_4').addClass("active");
  			console.log('4'); 
  		}
	});

	$('.i_8').addClass("dots-active");
	$('.c_8').addClass("triangle-active");

	$('.serf-slider').on('afterChange', function(event, slick, currentSlide){
  		if (currentSlide == 0) { 
  			$(".world-map__info").removeClass("dots-active");
  			$(".world-map__circle").removeClass("triangle-active");
  			$('.i_1').addClass("dots-active");
  			$('.c_1').addClass("triangle-active");
  		}
  		else if (currentSlide == 1) { 
  			$(".world-map__info").removeClass("dots-active");
  			$(".world-map__circle").removeClass("triangle-active");
  			$('.i_2').addClass("dots-active");
  			$('.c_2').addClass("triangle-active");
  		}
  		else if (currentSlide == 2) { 
  			$(".world-map__info").removeClass("dots-active");
  			$(".world-map__circle").removeClass("triangle-active");
  			$('.i_3').addClass("dots-active");
  			$('.c_3').addClass("triangle-active");
  		}
  		else if (currentSlide == 3) { 
  			$(".world-map__info").removeClass("dots-active");
  			$(".world-map__circle").removeClass("triangle-active");
  			$('.i_4').addClass("dots-active");
  			$('.c_4').addClass("triangle-active");
  		}
  		else if (currentSlide == 4) { 
  			$(".world-map__info").removeClass("dots-active");
  			$(".world-map__circle").removeClass("triangle-active");
  			$('.i_5').addClass("dots-active");
  			$('.c_5').addClass("triangle-active");
  		}
  		else if (currentSlide == 5) { 
  			$(".world-map__info").removeClass("dots-active");
  			$(".world-map__circle").removeClass("triangle-active");
  			$('.i_6').addClass("dots-active");
  			$('.c_6').addClass("triangle-active");
  		}
  		else if (currentSlide == 6) { 
  			$(".world-map__info").removeClass("dots-active");
  			$(".world-map__circle").removeClass("triangle-active");
  			$('.i_7').addClass("dots-active");
  			$('.c_7').addClass("triangle-active");
  		}
  		else if (currentSlide == 7) { 
  			$(".world-map__info").removeClass("dots-active");
  			$(".world-map__circle").removeClass("triangle-active");
  			$('.i_8').addClass("dots-active");
  			$('.c_8').addClass("triangle-active");
  		}
	});

	$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.png" alt="" /></div><div class="quantity-button quantity-down"><img src="img/minus.png" alt="" /></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

    $('.quantity-button').on('click', function() {
    	let parents = $(this).parents('.hotel-slider__about');
    	let summ = $(".nights", parents).val() * $('.summ', parents).data('nights') + $('.guests', parents).val() * $('.summ', parents).data('guests');
    	if (summ % 10 == 0) {
    		summ -= 1
    	}
   		$('.summ', parents).html('$' + summ + " USD");
    })

    $('.surfboard__box').on('click', function(){
    	$(this).toggleClass('active');
    });

    $('.menu-btn').on('click', function(){
    	$('.header-aside__nav').toggleClass('active');
    	$(this).toggleClass('active');
    });

   	new WOW().init();
});