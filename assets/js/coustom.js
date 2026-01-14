(function($) {
    'use strict';

			/*==== swiper active  ====*/
			new Swiper('.swiper_active', {
				effect: 'defult',
				grabCursor: false,
				speed: 2000,
				direction: 'horizontal',
				slidesPerView: 1,
				spaceBetween: 10,
				freeMode: false,
				mousewheel: false,
				keyboard: true,
				loop: true,
					autoplay: {
					delay: 6000,								  
					disableOnInteraction: false,
				},
				  pagination: {
					el: '.swiper-pagination',
					clickable: true,
					type: 'progressbar',
				  },
				  navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				  },
				  scrollbar: {
					el: '.scrollbar_false',
					hide: true,
				  },					  
			});
			/*==== ds slider active  ====*/
			var airFluebsslick = $('.ds_slider_activ');
         	if(airFluebsslick.length > 0){
         
         	airFluebsslick.slick({
         		infinite: true,
         		autoplay: true,
         		autoplaySpeed: 8000,
         		speed: 2000,
         		default: true,
         		slidesToShow: 1,
         		slidesToScroll: 1,
         		arrows: true,
         		dots: false,
         		responsive: [
         			{
         				breakpoint: 1200,
         				settings: {
         					slidesToShow: 1,
         					slidesToScroll: 1,
         				}
					},
         			{
         				breakpoint: 992,
         				settings: {
         					slidesToShow: 1,
         					slidesToScroll: 1,
         				}
					},
         			{
         				breakpoint: 767,
         				settings: {
         					slidesToShow: 1,
         					slidesToScroll: 1,
         				}
					}
					]
				});
			}
			/*==== ds slider active  ====*/
			var airFluebsslick = $('.simages_id1');
			 if(airFluebsslick.length > 0){
			 airFluebsslick.slick({
				infinite: true,
				autoplay: true,
				autoplaySpeed: 8000,
				speed: 2000,
				vertical: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				dots: false,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
					// You can unslick at a given breakpoint now by adding:
					// settings: "unslick"
					// instead of a settings object
					]
				});
				}

			var galleryThumbs = new Swiper('.gallery-thumbs', {
				slidesPerView: 3,
				spaceBetween: 20,
				loop: false,
				freeMode: false,
			   loopedSlides: 2, /*looped slides should be the same*/
			   watchSlidesVisibility: true,
			   watchSlidesProgress: true,
				grabCursor: false,
				speed: 2000,
				direction: 'horizontal',
				mousewheel: false,
				keyboard: false,
				autoplay: {
					delay: 8000,								  
					disableOnInteraction: false,
				},						
			 });
			var galleryTop = new Swiper('.gallery-top ', {
			   loopedSlides: 2, /*looped slides should be the same*/
				grabCursor: false,
				speed: 2000,
				direction: 'horizontal',
				freeMode: false,
				mousewheel: false,
				keyboard: false,
				loop: true,
					autoplay: {
					delay: 8000,								  
					disableOnInteraction: false,
				},
				  pagination: {
					el: '.swiper-pagination',
					clickable: true,
					type: 'progressbar',
				  },
				  navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				  },
				  scrollbar: {
					el: '.scrollbar_false',
					hide: true,
				  },
			   thumbs: {
				swiper: galleryThumbs,
			   },
			 });
					 
			/*==== corporate10 nivo slider js active  ====*/

			$('#mainSlider_id2').nivoSlider({
				directionNav: true,
				animSpeed: 1000,
				slices: 18,
				pauseTime: 6000,
				pauseOnHover: false,
				controlNav: true,
				prevText: '<i class="fas fa-long-arrow-alt-left nivo-prev-icon"></i>',
				nextText: '<i class="fas fa-long-arrow-alt-right nivo-next-icon"></i>'					
			});

			/*==== cctv slic slider js active  ====*/
			var airFluebsslick = $('.slic_slider_active');
				 
				if(airFluebsslick.length > 0){
				 
				airFluebsslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 3000,
					speed: 1000,
					default: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						// You can unslick at a given breakpoint now by adding:
						// settings: "unslick"
						// instead of a settings object
						]
					});
					}
		
		
					 
			/*==== classic Button  ====*/
			
			$(".btn_w").addClass('a_active');
			
			var emsmenu1 = $(".btn_c");
			var emscmenu2 = $(".tx_op");
			var emsinner2 = $(".tx_cl");
			emsmenu1.on('click', function() {
				emsinner2.addClass('btn_block');
				emscmenu2.addClass('btn_none');
				$(".btn_w").removeClass('a_active');		
				$(".btn_c").addClass('a_active');		
				$(this).addClass('a_active');		
			});
			
			var emsmenu1 = $(".btn_w");
			var emscmenu2 = $(".tx_op");
			var emsinner2 = $(".tx_cl");
			emsmenu1.on('click', function() {
				emscmenu2.removeClass('btn_none');
				emsinner2.removeClass('btn_block');
				$(".btn_c").removeClass('a_active');
				$(".btn_w").addClass('a_active');
				$(this).addClass('a_active');
			});	

			/*==== One Page Nav  ====*/
			
			var top_offset = $('.one_page').height() +0;
			$('.one_page .corporate_menu .nav_scroll').onePageNav({
				currentClass: 'current',
				changeHash: false,
				scrollSpeed: 1000,
				 scrollOffset: top_offset,
				scrollThreshold: 0.5,
				filter: '',
				easing: 'swing',
			});
			
			var top_offset = $('.one_page').height() +0;
			$('.one_page .air_menu .nav_scroll').onePageNav({
				currentClass: 'current',
				changeHash: false,
				scrollSpeed: 1000,
				 scrollOffset: top_offset,
				scrollThreshold: 0.5,
				filter: '',
				easing: 'swing',
			});

			$(".nav_scroll > li:first-child").addClass("current");
			
			/*==== sticky nav 1  ====*/
			
			$('.one_page').scrollToFixed({
				preFixed: function() {
					$(this).find('.scroll_fixed').addClass('prefix');
				},
				postFixed: function() {
					$(this).find('.scroll_fixed').addClass('postfix').removeClass('prefix');
				}
			});	
			/*==== sticky nav 2  ====*/
			var headers1 = $('.trp_nav_area');
			$(window).on('scroll', function() {

				if ($(window).scrollTop() > 200) {
					headers1.addClass('hbg2');
				} else {
					headers1.removeClass('hbg2');
				}		
			});	

			/*==== Mobile Menu  ====*/
			
			$('.mobile-menu nav').meanmenu({
				meanScreenWidth: "990",
				meanMenuContainer: ".mobile-menu",
				onePage: true,
			});	
			
			/*==== Bootstrap Accordion  ====*/
			
			$('.faq-part .card').each(function () {
				var $this = $(this);
				$this.on('click', function (e) {
					var has = $this.hasClass('active');
					$('.faq-part .card').removeClass('active ');
					$('.faq-part .collapse').removeClass(' show');
					if (has) {
						$this.removeClass('active ');
					} else {
						$this.addClass('active ');
					}
				});
			});
	
			/*==== WOW active js   ====*/
			
			new WOW().init();

			/*==== scrollUp  ====*/
			
			$.scrollUp({
				scrollText: '<i class="fa fa-angle-up"></i>',
				easingType: 'linear',
				scrollSpeed: 900,
				animation: 'fade'
			});

			/*==== Venubox  ====*/
			$('.venobox').venobox({

				numeratio: true,

				infinigall: true

			});
			
			// top quearys menu 
			var emsmenu = $(".em-quearys-menu i.t-quearys");
			var emscmenu = $(".em-quearys-menu i.t-close");
			var emsinner = $(".em-quearys-inner");
			emsmenu.on('click', function() {
				emsinner.addClass('em-s-open');
				$(this).addClass('em-s-hiddens');
				emscmenu.removeClass('em-s-hidden');
			});
			emscmenu.on('click', function() {
				emsinner.removeClass('em-s-open');
				$(this).addClass('em-s-hidden');
				emsmenu.removeClass('em-s-hidden');
			});
			/*==== testimonial area actve ====*/
			var airFluebtslick = $('.testimonial_active');				
				if(airFluebtslick.length > 0){
				airFluebtslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 6000,
					speed: 2000,					
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: true,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
					}
			/*==== corporate3 testimonial area actve ====*/
			var airFluebtslick = $('.testimonial2_active');				
			if(airFluebtslick.length > 0){
			airFluebtslick.slick({
				infinite: true,
				autoplay: true,
				autoplaySpeed: 6000,
				speed: 2000,					
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: true,
				dots: false,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
					]
				});
			}
			
			/*==== corporate6 testimonial area actve ====*/
			var airFluebtslick = $('.testimonial3_active');				
				if(airFluebtslick.length > 0){
				airFluebtslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 6000,
					speed: 2000,					
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
				}
			
			/*==== corporate7 testimonial area actve ====*/
			var airFluebtslick = $('.testimonial4_active');				
				if(airFluebtslick.length > 0){
				airFluebtslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 6000,
					speed: 2000,					
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
				}

			var airFluebtslick = $(".testimonial4_act");
				if (airFluebtslick.length > 0) {
					airFluebtslick.slick({
						infinite: true,
						autoplay: true,
						autoplaySpeed: 3000,
						speed: 1000,
						slidesToShow: 4,
						slidesToScroll: 1,
						arrows: true,
						dots: false,
						responsive: [
							{
								breakpoint: 1200,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 1,
								},
							},
							{
								breakpoint: 992,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 1,
								},
							},
							{
								breakpoint: 767,
								settings: {
									slidesToShow: 1,
									slidesToScroll: 1,
								},
							},
						],
					});
				}
				
			/*==== testimonial area actve ====*/
			
			var airFluebtslick = $('.testimonial5_active');				
				if(airFluebtslick.length > 0){
				airFluebtslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 3000,
					speed: 1000,					
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: true,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
				}
				
			
				
			$('.slider_active_top').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplaySpeed: 3000,
				speed: 700,
				autoplay: true,
				arrows: false,
				fade: false,
				asNavFor: '.slider_active_bottom_id2'
			});
			$('.slider_active_bottom_id2').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplaySpeed: 3000,
				speed: 700,
				autoplay: true,
				asNavFor: '.slider_active_top',
				dots: false,
				vertical: true,
				verticalSwiping: true,					  
				centerMode: false,
				focusOnSelect: true
			});
				
			/*==== Brand active ====*/
			var airFluebslick = $('.brand_active');
				
				if(airFluebslick.length > 0){

				airFluebslick.slick({
					infinite: true,
					autoplay: true,
					default: true,
					autoplaySpeed: 6000,
					speed: 1000,					
					slidesToShow: 5,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 4,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
				}
				
			/* ==== corporate6 Brand active ==== */
			var airFluebslick = $('.brand_act');
				
				if(airFluebslick.length > 0){

				airFluebslick.slick({
					infinite: true,
					autoplay: true,
					default: true,
					autoplaySpeed: 6000,
					speed: 1000,					
					slidesToShow: 5,
					slidesToScroll: 1,
					arrows: true,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 5,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 4,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						}
						]
					});
				}
			/* ==== Brand active ==== */
			var airFluebslick = $('.br_active');
					
					if(airFluebslick.length > 0){
				 
					airFluebslick.slick({
						infinite: true,
						autoplay: true,
						default: true,
						autoplaySpeed: 6000,
						speed: 1000,					
						slidesToShow: 6,
						slidesToScroll: 1,
						arrows: true,
						dots: false,
						responsive: [
							{
								breakpoint: 1200,
								settings: {
									slidesToShow: 3,
									slidesToScroll: 1,
								}
							},
							{
								breakpoint: 992,
								settings: {
									slidesToShow: 3,
									slidesToScroll: 1,
								}
							},
							{
								breakpoint: 767,
								settings: {
									slidesToShow: 3,
									slidesToScroll: 1,
								}
							}
							]
						});
					}
			/* ==== Brand active ==== */
			var airFluebslick = $('.construction_brand_act');
				if(airFluebslick.length > 0){
				airFluebslick.slick({
					infinite: true,
					autoplay: true,
					default: true,
					autoplaySpeed: 3000,
					speed: 1000,					
					slidesToShow: 4,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 4,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 4,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						}
						]
					});
					}
			
			
			/*==== blog active ====*/
			var airFluebslick = $('.blog_active');				
				if(airFluebslick.length > 0){
				airFluebslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 3000,
					speed: 1000,					
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
				}

			/*==== blog sidebar active ====*/
			$('.blog_sidebar_image_act').slick({	

				infinite: true,
				autoplay: true,
				autoplaySpeed: 3000,
				speed: 1000,					
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '',					
				arrows: false,
				dots: false,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
					// You can unslick at a given breakpoint now by adding:
					// settings: "unslick"
					// instead of a settings object
					]
				});
				
			/*==== feature active ====*/
			var airFluebslick = $('.feature_active');
				 if(airFluebslick.length > 0){
				 airFluebslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 5000,
					speed: 1000,					
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
					}
			/*==== feature active ====*/
			
			var airFluebslick = $('.feature2_active');
				if(airFluebslick.length > 0){
				 
				airFluebslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 3000,
					speed: 1000,					
					slidesToShow: 4,
					slidesToScroll: 1,
					arrows: true,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
					}
			
			/*==== corporate9 project active ====*/
			var airFluebslick = $('.project_active');				
			if(airFluebslick.length > 0){
			airFluebslick.slick({
				infinite: true,
				autoplay: true,
				autoplaySpeed: 2000,
				speed: 1000,					
				slidesToShow: 4,
				slidesToScroll: 1,
				arrows: true,
				dots: false,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
					]
				});
				}
			
			/*==== construction project active ====*/
				
			var airFluebslick = $('.const_project_active');				
				if(airFluebslick.length > 0){
				airFluebslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 4000,
					speed: 1000,					
					slidesToShow: 2.5,
					slidesToScroll: 1,
					arrows: true,
					dots: false,
					responsive: [
						{
							breakpoint: 1365,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
					}
					
			/*==== autocar project active ====*/
					
			var airFluebslick = $('.autocar_project_act');				
				if(airFluebslick.length > 0){
				airFluebslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 3000,
					speed: 1000,					
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: true,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
					}

			/*==== corporate10 service active ====*/
			var airFluesrvslick = $('.service_active');				
				if(airFluesrvslick.length > 0){
				airFluesrvslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 6000,
					speed: 2000,					
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
					}
				 
			/* ==== corporate10 service active ==== */
			var airFluebslick = $('.team_active');				
				if(airFluebslick.length > 0){
				airFluebslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 6000,
					speed: 2000,					
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
					centerMode: false,
					centerPadding: '',
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
					}

			/*==== Portfolio Isotope  ====*/
            $('.portfolio_active').imagesLoaded( function() {
            	if ($.fn.isotope) {
            
            		var $portfolio = $('.portfolio_active');
            
            		$portfolio.isotope({
            
            			itemSelector: '.grid-item',
            
            			filter: '*',
            
            			resizesContainer: true,
            
            			layoutMode: 'masonry',
            
            			transitionDuration: '0.8s'
            
            		});
            
            		$('.filter_menu li').on('click', function() {
            
            			$('.filter_menu li').removeClass('current_menu_item');
            
            			$(this).addClass('current_menu_item');
            
            			var selector = $(this).attr('data-filter');
            
            			$portfolio.isotope({
            
            				filter: selector,
            
            			});
            
            		});
            
            	};
            });
			
			/*==== call to action  ====*/
			window.mc4wp = window.mc4wp || {
			listeners: [],
			forms: {
				on: function(evt, cb) {
					window.mc4wp.listeners.push(
						{
							event   : evt,
							callback: cb
						}
					);
				}
			}
		}

			/*==== counter active ====*/
				
			$('.counter').counterUp({
				delay: 10,
				time: 1000
			});

			/* ==== medical swiper active ==== */
			new Swiper('.airFlue_active_id5', {
				 effect: 'defult',
				 grabCursor: false,
				 speed: 2000,
				 direction: 'horizontal',
				 slidesPerView: 1,
				 spaceBetween: 30,
				 freeMode: false,
				 mousewheel: false,
				 keyboard: true,
				 loop: false,
				 autoplay: {
				 delay: 8000,								  
				 disableOnInteraction: false,
				 },
				  pagination: {
				 el: '.swiper-pagination',
				 clickable: true,
				 type: 'progressbar',
				  },
				  navigation: {
				 nextEl: '.swiper-button-next',
				 prevEl: '.swiper-button-prev',
				  },
				  scrollbar: {
				 el: '.scrollbar_false',
				 hide: true,
				  },					  
				 });
			
			/*==== circle js ====*/
			var airFlue_cp = $('.airFlue_circle_idcr1');

			  airFlue_cp.circleProgress({
				startAngle: -Math.PI / 4 * 3,
				value: 0.75,
				size: 130,
				lineCap: 'round',
				fill: {  gradient: ["#21CDC0", "#21CDC0"]}
			  });
			  
			   var airFlue_cp = $('.airFlue_circle_idcr2');

			  airFlue_cp.circleProgress({
				startAngle: -Math.PI / 4 * 3,
				value: 0.83,
				size: 130,
				lineCap: 'round',
				fill: {  gradient: ["#21CDC0", "#21CDC0"]}
			  });
			  
			  var airFlue_cp = $('.airFlue_circle_idcr1');

			  airFlue_cp.circleProgress({
				startAngle: -Math.PI / 4 * 3,
				value: 0.8,
				size: 130,
				lineCap: 'round',
				fill: {  gradient: ["#21CDC0", "#21CDC0"]}
			  });
			  
			  var airFlue_cp = $('.airFlue_circle_idcr1');

			  airFlue_cp.circleProgress({
				startAngle: -Math.PI / 4 * 3,
				value: 0.88,
				size: 130,
				lineCap: 'round',
				fill: {  gradient: ["#21CDC0", "#21CDC0"]}
			  });
			  
			/*==== progress bar circle js ====*/
			var airFlue_cp = $('.airFlue_circle_id1');
			  airFlue_cp.circleProgress({
				startAngle: -Math.PI / 4 * 3,
				value: 0.9,
				size: 100,
				lineCap: 'round',
				fill: {  gradient: ["#21CDC0", "#08449B"]}
			  });

			var airFlue_cp = $('.airFlue_circle_id2');
			  airFlue_cp.circleProgress({
				startAngle: -Math.PI / 4 * 3,
				value: 0.7,
				size: 100,
				lineCap: 'round',
				fill: {  gradient: ["#21CDC0", "#08449B"]}
			  });
			  
		    var airFlue_cp = $('.airFlue_circle_id3');
			  airFlue_cp.circleProgress({
				startAngle: -Math.PI / 4 * 3,
				value: 0.8,
				size: 100,
				lineCap: 'round',
				fill: {  gradient: ["#21CDC0", "#08449B"]}
			  });
			  
			var airFlue_cp = $('.airFlue_circle_id4');
				airFlue_cp.circleProgress({
					startAngle: -Math.PI / 4 * 3,
					value: 0.9,
					size: 100,
					lineCap: 'round',
					fill: {  gradient: ["#21CDC0", "#08449B"]}
				});

			/*====  oill progress bar circle js ====*/
			var airFlue_cp = $('.airFlue_circle_idcr1112');
				 airFlue_cp.circleProgress({
				 startAngle: -Math.PI / 4 * 3,
				 value: 0.93,
				 size: 150,
				 lineCap: 'round',
				 fill: {  gradient: ["#E53E29", "#E53E29"]}
				 });
				 
			 var airFlue_cp = $('.airFlue_circle_idcr1113');
			  airFlue_cp.circleProgress({
			  startAngle: -Math.PI / 4 * 3,
			  value: 0.73,
			  size: 150,
			  lineCap: 'round',
			  fill: {  gradient: ["#E53E29", "#E53E29"]}
			  });

			/*==== compair section js ====*/
			var airFlue_cp = $('.airFlue_cir_id1');
				 airFlue_cp.circleProgress({
				 startAngle: -Math.PI / 4 * 3,
				 value: 0.75,
				 size: 130,
				 lineCap: 'round',
				 fill: {  gradient: ["#21CDC0", "#21CDC0"]}
				 });
				 
			var airFlue_cp = $('.airFlue_cir_id1');
				 airFlue_cp.circleProgress({
				 startAngle: -Math.PI / 4 * 3,
				 value: 0.83,
				 size: 130,
				 lineCap: 'round',
				 fill: {  gradient: ["#21CDC0", "#21CDC0"]}
				 });
				 
			var airFlue_cp = $('.airFlue_cir_id1');
				 airFlue_cp.circleProgress({
				 startAngle: -Math.PI / 4 * 3,
				 value: 0.8,
				 size: 130,
				 lineCap: 'round',
				 fill: {  gradient: ["#21CDC0", "#21CDC0"]}
				 });
				 
				 var airFlue_cp = $('.airFlue_cir_id1');
					 airFlue_cp.circleProgress({
					 startAngle: -Math.PI / 4 * 3,
					 value: 0.88,
					 size: 130,
					 lineCap: 'round',
					 fill: {  gradient: ["#21CDC0", "#21CDC0"]}
					 });
					 
			/*====  Education circle js ====*/
			var airFlue_cp = $('.airFlue_circle_id001');

			  airFlue_cp.circleProgress({
				startAngle: -Math.PI / 4 * 3,
				value: 0.9,
				size: 100,
				lineCap: 'round',
				fill: {  gradient: ["#9D2235", "#9D2235"]}
			  });
			
			var airFlue_cp = $('.airFlue_circle_id002');

				  airFlue_cp.circleProgress({
					startAngle: -Math.PI / 4 * 3,
					value: 0.9,
					size: 100,
					lineCap: 'round',
					fill: {  gradient: ["#9D2235", "#9D2235"]}
				  });
			var airFlue_cp = $('.airFlue_circle_id003');

			  airFlue_cp.circleProgress({
				startAngle: -Math.PI / 4 * 3,
				value: 0.8,
				size: 100,
				lineCap: 'round',
				fill: {  gradient: ["#9D2235", "#9D2235"]}
			  });
			var airFlue_cp = $('.airFlue_circle_id004');
			
			  airFlue_cp.circleProgress({
				startAngle: -Math.PI / 4 * 3,
				value: 0.9,
				size: 100,
				lineCap: 'round',
				fill: {  gradient: ["#9D2235", "#9D2235"]}
			  });
			  
			/*====  kindergarten circle js ====*/
			  
			var airFlue_cp = $('.airFlue_circle_id1k1');
				airFlue_cp.circleProgress({
					startAngle: -Math.PI / 4 * 3,
					value: 0.9,
					size: 100,
					lineCap: 'round',
					fill: {  gradient: ["#E85248", "#E85248"]}
				});
				
			var airFlue_cp = $('.airFlue_circle_id2k2');
			
				airFlue_cp.circleProgress({
					startAngle: -Math.PI / 4 * 3,
					value: 0.9,
					size: 100,
					lineCap: 'round',
					fill: {  gradient: ["#E85248", "#E85248"]}
				});
			var airFlue_cp = $('.airFlue_circle_id3k3');
				airFlue_cp.circleProgress({
					startAngle: -Math.PI / 4 * 3,
					value: 0.8,
					size: 100,
					lineCap: 'round',
					fill: {  gradient: ["#E85248", "#E85248"]}
				});
			var airFlue_cp = $('.airFlue_circle_id4k4');
				airFlue_cp.circleProgress({
				startAngle: -Math.PI / 4 * 3,
				value: 0.9,
				size: 100,
				lineCap: 'round',
				fill: {  gradient: ["#E85248", "#E85248"]}
			});

			/*==== compair section js ====*/
			new BeerSlider( document.getElementById( "beer_airFluebr_1" ), { start: 50 } );
			
			/*==== sergery survice active js ====*/
			var airFluesrvslick = $('.surgery_service_act');				
				 if(airFluesrvslick.length > 0){
				 airFluesrvslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 6000,
					speed: 2000,					
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
					}
				 
			/*==== dental project active js ====*/
			var airFluebslick = $('.dental_project_act');				
				if(airFluebslick.length > 0){
				airFluebslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 2000,
					speed: 1000,					
					slidesToShow: 4,
					slidesToScroll: 2,
					arrows: false,
					dots: true,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
					}
					 
			/*==== blog active js ====*/
			var airFluebslick = $('.blogcar_idblog1');				
				if(airFluebslick.length > 0){
				airFluebslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 6000,
					speed: 1000,					
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
				}
					 
			/* ==== ambulance circle progress js ==== */
			var airFlue_cp = $('.airFlue_circle_idcr01');
				 airFlue_cp.circleProgress({
				 startAngle: -Math.PI / 4 * 3,
				 value: 0.75,
				 size: 130,
				 lineCap: 'round',
				 fill: {  gradient: ["#08449B", "#08449B"]}
				 });
			var airFlue_cp = $('.airFlue_circle_idcr02');
				 
				 airFlue_cp.circleProgress({
				 startAngle: -Math.PI / 4 * 3,
				 value: 0.83,
				 size: 130,
				 lineCap: 'round',
				 fill: {  gradient: ["#08449B", "#08449B"]}
				 });
			var airFlue_cp = $('.airFlue_circle_idcr03');
                     
				 airFlue_cp.circleProgress({
				 startAngle: -Math.PI / 4 * 3,
				 value: 0.8,
				 size: 130,
				 lineCap: 'round',
				 fill: {  gradient: ["#08449B", "#08449B"]}
				 });
			var airFlue_cp = $('.airFlue_circle_idcr04');
                     
				 airFlue_cp.circleProgress({
				 startAngle: -Math.PI / 4 * 3,
				 value: 0.88,
				 size: 130,
				 lineCap: 'round',
				 fill: {  gradient: ["#08449B", "#08449B"]}
				 });

			/* ==== call theme circle js ==== */
			 var airFlue_cp = $('.airFlue_circle_idp1');

			 airFlue_cp.circleProgress({
			 startAngle: -Math.PI / 4 * 3,
			 value: 0.75,
			 size: 100,
			 lineCap: 'round',
			 fill: {  gradient: ["#FFFFFF", "#FFFFFF"]}
			 });
			 
			 var airFlue_cp = $('.airFlue_circle_ids1');

			 airFlue_cp.circleProgress({
			 startAngle: -Math.PI / 4 * 3,
			 value: 0.85,
			 size: 100,
			 lineCap: 'round',
			 fill: {  gradient: ["#CB451B", "#CB451B"]}
			 });
			var airFlue_cp = $('.airFlue_circle_ids2');

				airFlue_cp.circleProgress({
				startAngle: -Math.PI / 4 * 3,
				value: 0.75,
				size: 100,
				lineCap: 'round',
				fill: {  gradient: ["#CB451B", "#CB451B"]}
				});
				
			/* ==== construction theme circle js ==== */
			var airFlue_cp = $('.airFlue_circle_idcr1c');
				 airFlue_cp.circleProgress({
				 startAngle: -Math.PI / 4 * 3,
				 value: 0.85,
				 size: 200,
				 lineCap: 'round',
				 fill: {  gradient: ["#FF6200", "#FF6200"]}
				 });
			var airFlue_cp = $('.airFlue_circle_idcr2c');
				 airFlue_cp.circleProgress({
				 startAngle: -Math.PI / 4 * 3,
				 value: 0.9,
				 size: 200,
				 lineCap: 'round',
				 fill: {  gradient: ["#FF6200", "#FF6200"]}
				 });
				 
			 var airFlue_cp = $('.airFlue_circle_idcr4c');
				 airFlue_cp.circleProgress({
				 startAngle: -Math.PI / 4 * 3,
				 value: 0.75,
				 size: 200,
				 lineCap: 'round',
				 fill: {  gradient: ["#FF6200", "#FF6200"]}
				 });
				/* ==== construction theme circle js ==== */
				var airFlue_cp = $('.airFlue_circle_idcrc2c');
				 airFlue_cp.circleProgress({
				 startAngle: -Math.PI / 4 * 3,
				 value: 0.85,
				 size: 130,
				 lineCap: 'round',
				 fill: {  gradient: ["#FF6200", "#FF6200"]}
				 });
				var airFlue_cp = $('.airFlue_circle_idcrc02c');
					 airFlue_cp.circleProgress({
					 startAngle: -Math.PI / 4 * 3,
					 value: 0.9,
					 size: 130,
					 lineCap: 'round',
					 fill: {  gradient: ["#FF6200", "#FF6200"]}
					 });
				 
				 var airFlue_cp = $('.airFlue_circle_idcrc4c');
					 airFlue_cp.circleProgress({
					 startAngle: -Math.PI / 4 * 3,
					 value: 0.75,
					 size: 130,
					 lineCap: 'round',
					 fill: {  gradient: ["#FF6200", "#FF6200"]}
					 });

			/* ==== ambulance testimonial active js ==== */
			var airFluebtslick = $('.amb_test_active');				
				if(airFluebtslick.length > 0){
				airFluebtslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 6000,
					speed: 2000,					
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
				}
			
			/* ====  testimonial active js ==== */
			var airFluebtslick = $('.herbal_testi_act');				
				 if(airFluebtslick.length > 0){
				 airFluebtslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 6000,
					speed: 2000,					
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
					}
				 
			/* ====  testimonial active js ==== */
			var airFluebtslick = $('.printing_testi_act');				
			 if(airFluebtslick.length > 0){
			 airFluebtslick.slick({
				infinite: true,
				autoplay: true,
				autoplaySpeed: 6000,
				speed: 2000,					
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: true,
				dots: false,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
					]
				});
				}
				 
			/* ====  oddo testimonial active js ==== */
			var airFluebtslick = $('.odd_test_active');				
			 if(airFluebtslick.length > 0){
			 airFluebtslick.slick({
				infinite: true,
				autoplay: true,
				autoplaySpeed: 3000,
				speed: 2000,					
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows:false,
				dots:true,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
					]
				});
				}
				
			/* ====  autocar testimonial active js ==== */
			var airFluebtslick = $('.autocar_test_active');				
			 if(airFluebtslick.length > 0){
			 airFluebtslick.slick({
				infinite: true,
				autoplay: true,
				autoplaySpeed: 3000,
				speed: 2000,					
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows:false,
				dots:false,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
					]
				});
				}

			$('.wirt_TraSlider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				asNavFor: '.airFlue_testiSlider',
				arrows: false,
				dots: true,
				autoplaySpeed: 2000,
				speed: 700,								
				centerMode: true,
				centerPadding: '0',
				focusOnSelect: true,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
				]								
			});
				 
			/* ====  working hours active js ==== */
			var airFluebslick = $('.working_team_active');				
				 if(airFluebslick.length > 0){
				 airFluebslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 6000,
					speed: 2000,					
					slidesToShow: 2,
					slidesToScroll: 2,
					arrows: false,
					centerMode: false,
					centerPadding: '',
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
					}
			
			/* ====  team active js ==== */
			var airFluebslick = $('.team2_active');				
				 if(airFluebslick.length > 0){
				 airFluebslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 3000,
					speed: 700,					
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true,
					centerMode: false,
					centerPadding: '',
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
					}
					
			/* ====  team active js ==== */
	
			var airFluebslick = $('.autocar_team_active');				
				if(airFluebslick.length > 0){
				airFluebslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 3000,
					speed: 1000,					
					slidesToShow: 4,
					slidesToScroll: 1,
					arrows: true,
					centerMode: false,
					centerPadding: '',
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 4,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
					}
					 
			/* ====  working hours active js ==== */
			$('[data-countdown]').each(function() {
			  var $this = $(this), finalDate = $(this).data('countdown');
			  $this.countdown(finalDate, function(event) {
				$this.html(event.strftime('<span class="cdowns days"><span class="time-counts">%-D</span> <p>Days</p></span> <span class="cdowns hour"><span class="time-counts">%-H</span> <p>Hour</p></span> <span class="cdowns minutes"><span class="time-counts">%M</span> <p>Min</p></span> <span class="cdowns second"> <span><span class="time-counts">%S</span> <p>Sec</p></span>'));
			  });
			});	

			/* popup sideber menu */
			var rightma = $(".right_sideber_menu i.openclass");
			var rightmi = $(".right_sideber_menu i.closeclass");
			var rightmir = $(".right_sideber_menu_inner");
			rightma.on('click', function() {
				rightmir.addClass('tx-s-open');
			});
			rightmi.on('click', function() {
				rightmir.removeClass('tx-s-open');

			});	
			
			/* ====  creative project active js ==== */
			var airFluebslick = $('.creative_pro_active');				
				if(airFluebslick.length > 0){
				airFluebslick.slick({
					infinite: true,
					autoplay: false,
					autoplaySpeed: 4000,
					speed: 1000,					
					slidesToShow: 3,
					slidesToScroll: 2,
					arrows: false,
					dots: true,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
					]
				 });
				 }
			
			/* ==== pringting active js ==== */
			new BeerSlider( document.getElementById( "beer_airFluebr_11" ), { start: 50 } );
			
			/* ==== oil circle active js ==== */
			var airFlue_cp = $('.airFlue_circle_idcr1');

				 airFlue_cp.circleProgress({
				 startAngle: -Math.PI / 4 * 3,
				 value: 0.83,
				 size: 150,
				 lineCap: 'round',
				 fill: {  gradient: ["#E53E29", "#E53E29"]}
			});

			var airFlue_cp = $('.airFlue_circle_idcr2');

				 airFlue_cp.circleProgress({
				 startAngle: -Math.PI / 4 * 3,
				 value: 0.93,
				 size: 150,
				 lineCap: 'round',
				 fill: {  gradient: ["#E53E29", "#E53E29"]}
				 });
				 
			var airFlue_cp = $('.airFlue_circle_idcr3');

				 airFlue_cp.circleProgress({
				 startAngle: -Math.PI / 4 * 3,
				 value: 0.73,
				 size: 150,
				 lineCap: 'round',
				 fill: {  gradient: ["#E53E29", "#E53E29"]}
				 });
				 
			var airFlue_cp = $('.airFlue_circle_idcr4');

				 airFlue_cp.circleProgress({
				 startAngle: -Math.PI / 4 * 3,
				 value: 0.83,
				 size: 150,
				 lineCap: 'round',
				 fill: {  gradient: ["#E53E29", "#E53E29"]}
				 });
			 
			/* ====  call circle progress active js ==== */
			 var airFlue_cp = $('.airFlue_circle_idc1');
				 airFlue_cp.circleProgress({
				 startAngle: -Math.PI / 4 * 3,
				 value: 0.83,
				 size: 100,
				 lineCap: 'round',
				 fill: {  gradient: ["#E53E29", "#E53E29"]}
				 });
				 
			var airFlue_cp = $('.airFlue_circle_idcr2');
				 airFlue_cp.circleProgress({
				 startAngle: -Math.PI / 4 * 3,
				 value: 0.93,
				 size: 100,
				 lineCap: 'round',
				 fill: {  gradient: ["#E53E29", "#E53E29"]}
				 });
				 
			var airFlue_cp = $('.airFlue_circle_idcr3');
				 airFlue_cp.circleProgress({
				 startAngle: -Math.PI / 4 * 3,
				 value: 0.73,
				 size: 100,
				 lineCap: 'round',
				 fill: {  gradient: ["#E53E29", "#E53E29"]}
				 });
				 
			var airFlue_cp = $('.airFlue_circle_idcr4');
				 airFlue_cp.circleProgress({
				 startAngle: -Math.PI / 4 * 3,
				 value: 0.83,
				 size: 100,
				 lineCap: 'round',
				 fill: {  gradient: ["#E53E29", "#E53E29"]}
				 });
			 
			/* ====  realstate circle progress active js ==== */
			 var airFlue_cp = $('.airFlue_circle_idcrs1');

				 airFlue_cp.circleProgress({
				 startAngle: -Math.PI / 4 * 3,
				 value: 0.83,
				 size: 150,
				 lineCap: 'round',
				 fill: {  gradient: ["#F5A96E", "#E53E29"]}
				 });
				 
			var airFlue_cp = $('.airFlue_circle_idcr2');

				 airFlue_cp.circleProgress({
				 startAngle: -Math.PI / 4 * 3,
				 value: 0.93,
				 size: 150,
				 lineCap: 'round',
				 fill: {  gradient: ["#F5A96E", "#E53E29"]}
				 });

			var airFlue_cp = $('.airFlue_circle_idcr3');

				 airFlue_cp.circleProgress({
				 startAngle: -Math.PI / 4 * 3,
				 value: 0.73,
				 size: 150,
				 lineCap: 'round',
				 fill: {  gradient: ["#F5A96E", "#E53E29"]}
				 });
				 
			var airFlue_cp = $('.airFlue_circle_idcr4');
			
				 airFlue_cp.circleProgress({
				 startAngle: -Math.PI / 4 * 3,
				 value: 0.83,
				 size: 150,
				 lineCap: 'round',
				 fill: {  gradient: ["#F5A96E", "#E53E29"]}
				 });
			/* ====  oill footer image active js ==== */
			$('.footer_image_act').slick({	

				infinite: true,
				autoplay: true,
				autoplaySpeed: 2000,
				speed: 1000,					
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '',					
				arrows: false,
				dots: true,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
					]
				});
				
			/* ====  project active js ==== */
			var airFluebslick = $('.real_pro_active');				
				 if(airFluebslick.length > 0){
				 airFluebslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 2000,
					speed: 1000,					
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
					}
					 
			// Mouse Direction Hover Iffect
			$('.single_protfolio').directionalHover();

			$('.single_protfolio').directionalHover({
				// CSS class for the overlay
				overlay: "em_port_content",
				// Linear or swing
				easing: "swing",
				speed: 50
			});	
			
			/* ====  Event active js ==== */
			var airFluebslick = $('.eventw_idevent1');				
				if(airFluebslick.length > 0){
				airFluebslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 8000,
					speed: 2000,					
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
					}

			/* ====  low faq carosole active js ==== */
			var airFluebslick = $('.imagess_id1');
				 if(airFluebslick.length > 0){
				 airFluebslick.slick({
					infinite: true,
					autoplay: true,
					default: true,
					autoplaySpeed: 3000,
					speed: 1000,					
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
					}
					
			/* ====  service active js ==== */
			var airFluebslick = $('.airFlue_cslide_idany');				
				if(airFluebslick.length > 0){
				airFluebslick.slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 2000,
					speed: 1000,					
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
						},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
						}
						]
					});
				}		

})(jQuery);




