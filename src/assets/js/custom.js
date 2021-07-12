$(document).ready(function(){

  //Popular Sellers
  var swiper1 = new Swiper('.seller-slider',{
      slidesPerView: 4,
        spaceBetween: 30,

        autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
        navigation: {
        nextEl: '.slider-wrap .swiper-button-next',
        prevEl: '.slider-wrap .swiper-button-prev',
      },

        breakpoints: {
          480: {
              slidesPerView: 1,
          },
          768: {
              slidesPerView: 2,
          },
          1024: {
              slidesPerView: 3,
          },
        }
    });

   var swiper1 = new Swiper('.seller-slider3',{
      slidesPerView: 3,
        spaceBetween: 30,

        autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
        navigation: {
        nextEl: '.slider-wrap .swiper-button-next',
        prevEl: '.slider-wrap .swiper-button-prev',
      },

        breakpoints: {
          480: {
              slidesPerView: 1,
          },
          768: {
              slidesPerView: 2,
          },
          1100: {
              slidesPerView: 2,
          },
        }
    });

    //Industry
	var swiper2 = new Swiper('.industry-slider',{
      slidesPerView: 4,
      spaceBetween: 30,

      autoplay: {
    		delay: 4000,
    		disableOnInteraction: false
  		},
       	navigation: {
	    	nextEl: '.industry-wrap .swiper-button-next',
	    	prevEl: '.industry-wrap .swiper-button-prev',
	  	},

      	breakpoints: {
        	480: {
          		slidesPerView: 1,
        	},
        	768: {
          		slidesPerView: 2,
        	},
        	1024: {
          		slidesPerView: 3,
        	},
      	}
    });


});
