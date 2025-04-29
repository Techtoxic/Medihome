jQuery(function ($) {
    'use strict';

	jQuery(document).on('ready', function () {

        // Offcanvas Responsive Menu
		const list = document.querySelectorAll('.offcanvas-body .menu-item');
		function accordion(e) {
			e.stopPropagation(); 
			if(this.classList.contains('active')){
				this.classList.remove('active');
			}
			else if(this.parentElement.parentElement.classList.contains('active')){
				this.classList.add('active');
			}
			else {
				for(let j=0; j < list.length; j++){
					list[j].classList.remove('active');
				}
				this.classList.add('active');
			}
		}
		for(let j = 0; j < list.length; j++ ){
			list[j].addEventListener('click', accordion);
		}

        $('.search-bar.main-menu__search.search-toggler').on('click', function(){
            $('.mobile-navbar .offcanvas-header .close-btn').click();
        });

        // Popup Video
		$('.video-btn').magnificPopup({
			disableOn: 320,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

         // Go to Top
		$(function(){
			// Scroll Event
			$(window).on('scroll', function(){
				var scrolled = $(window).scrollTop();
				if (scrolled > 300) $('#backtotop').addClass('active');
				if (scrolled < 300) $('#backtotop').removeClass('active');
			});

			// Click Event
			$('#backtotop').on('click', function() {
				$("html, body").animate({ scrollTop: "0" },  500);
			});
		});

        // Check if elements with the class "search-toggler" exist
        const searchTogglers = document.querySelectorAll(".search-toggler");
        if (searchTogglers.length > 0) {
        // Attach a click event listener to each "search-toggler" element
        searchTogglers.forEach((searchToggler) => {
            searchToggler.addEventListener("click", function (e) {
            e.preventDefault();
            
            // Toggle the class "active" on elements with the class "search-popup"
            const searchPopup = document.querySelector(".search-popup");
            if (searchPopup) {
                searchPopup.classList.toggle("active");
            }

            // Remove the class "expanded" from elements with the class "mobile-nav__wrapper"
            const mobileNavWrapper = document.querySelector(".mobile-nav-wrapper");
            if (mobileNavWrapper) {
                mobileNavWrapper.classList.remove("expanded");
            }
            });
        });

        // Preloader
        // const getPreloaderId = document.getElementById('preloader');
        // if (getPreloaderId) {
        //     getPreloaderId.style.display = 'none';
        // }

        // Counter Js
        try {
            if ("IntersectionObserver" in window) {
                let counterObserver = new IntersectionObserver(function (entries, observer) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                        let counter = entry.target;
                        let target = parseInt(counter.innerText);
                        let step = target / 200;
                        let current = 0;
                        let timer = setInterval(function () {
                            current += step;
                            counter.innerText = Math.floor(current);
                            if (parseInt(counter.innerText) >= target) {
                            clearInterval(timer);
                            }
                        }, 10);
                        counterObserver.unobserve(counter);
                        }
                    });
                });

                let counters = document.querySelectorAll(".counter");
                    counters.forEach(function (counter) {
                    counterObserver.observe(counter);
                });
            }
        } catch {}
        
        // Plus Minus JS
        try {
            var resultEl = document.querySelector(".resultSet"),
            plusMinusWidgets = document.querySelectorAll(".add-to-cart-counter");
                for (var i = 0; i < plusMinusWidgets.length; i++) {
                    plusMinusWidgets[i].querySelector(".minusBtn").addEventListener("click", clickHandler);
                    plusMinusWidgets[i].querySelector(".plusBtn").addEventListener("click", clickHandler);
                    plusMinusWidgets[i].querySelector(".count").addEventListener("change", changeHandler);
                }
                function clickHandler(event) {
                    var countEl = event.target.parentNode.querySelector(".count");
                    if (event.target.className.match(/\bminusBtn\b/)) {
                        countEl.value = Number(countEl.value) - 1;
                    } 
                    else if (event.target.className.match(/\bplusBtn\b/)) {
                        countEl.value = Number(countEl.value) + 1;
                    }
                    triggerEvent(countEl, "change");
                };
                function changeHandler(event) {
                resultEl.value = 0;
                for (var i = 0; i < plusMinusWidgets.length; i++) {
                    resultEl.value = Number(resultEl.value) + Number(plusMinusWidgets[i].querySelector('.count').value);
                }
            };
            function triggerEvent(el, type){
                if ('createEvent' in document) {
                    var e = document.createEvent('HTMLEvents');
                    e.initEvent(type, false, true);
                    el.dispatchEvent(e);
                } 
                else {
                    var e = document.createEventObject();
                    e.eventType = type;
                    el.fireEvent('on'+e.eventType, e);
                }
            }
        } catch {}

        };
    });

    $( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/widget', function( $scope ) {

            // Testimonial Swiper JS
            var swiper = new Swiper(".testimonial-slider, .cch-testimonial-slider", {
                loop: true,
                spaceBetween: 25,
                slidesPerView: 1,
                autoHeight: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".testimonial-button-next",
                    prevEl: ".testimonial-button-prev",
                },
            });

            // Lab Test Swiper JS
            var swiper = new Swiper(".lab-test-slider", {
                loop: true,
                spaceBetween: 25,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                scrollbar: {
                    el: ".swiper-scrollbar",
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 1
                    },
                    1200: {
                        slidesPerView: 2
                    },
                    1600: {
                        slidesPerView: 3
                    },
                }
            });
			
			var swiper = new Swiper(".lab-test-slider-two", {
                loop: true,
                spaceBetween: 25,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                scrollbar: {
                    el: ".swiper-scrollbar",
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 4
                    },
                    1600: {
                        slidesPerView: 5
                    },
                }
            });

           var swiper = new Swiper(".doctor-slider", {
                loop: false,
                spaceBetween: 25,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                navigation: {
                    prevEl: ".doctor-button-prev",
                    nextEl: ".doctor-button-next",
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 4
                    },
                }
            });
            
			var swiper = new Swiper(".ser-doctor-slider", {
                loop: true,
                spaceBetween: 25,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                scrollbar: {
                    el: ".swiper-scrollbar",
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 1
                    },
                    1200: {
                        slidesPerView: 2
                    },
                    1600: {
                        slidesPerView: 3
                    },
                }
            });
			
            // General Hospital Slider JS
            var swiper = new Swiper(".general-hospital-slider", {
                effect: "fade",
                loop: true,
                grabCursor: true,
                spaceBetween: 0,
                speed: 1200,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".general-hospital-button-next",
                    prevEl: ".general-hospital-button-prev",
                },
            });

            // Blog Swiper JS
            var swiper = new Swiper(".blog-slider", {
                loop: true,
                spaceBetween: 100,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                navigation: {
                    prevEl: ".blog-button-prev",
                    nextEl: ".blog-button-next",
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 2
                    },
                    1200: {
                        slidesPerView: 2
                    },
                }
            });

            // Shop Swiper JS
            var swiper = new Swiper(".shop-slider-swiper", {
                loop: true,
                spaceBetween: 25,
                pagination: {
                    el: ".shop-pagination",
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 4
                    },
                }
            });

            // Quote Swiper JS
            var swiper = new Swiper(".quote-slider", {
                loop: true,
                spaceBetween: 25,
                slidesPerView: 1,
                autoHeight: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".quote-button-next",
                    prevEl: ".quote-button-prev",
                },
            });

            // DC Testimonials Slider JS
            var swiper = new Swiper(".dc-testimonials-slider", {
                loop: true, 
                spaceBetween: 25,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".testimonial-button-prev",
                    prevEl: ".testimonial-button-next",
                },
            });

            // DC Treatment Slider JS
            var swiper = new Swiper(".dc-treatment-slider", {
                loop: true, 
                spaceBetween: 25,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".treatment-button-prev",
                    prevEl: ".treatment-button-next",
                },
            });

            //  Cancer Treatment Slider JS
            var swiper = new Swiper(".cancer-treatment-slider", {
                loop: true, 
                spaceBetween: 25,
                autoHeight: true,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".slider-button-prev",
                    prevEl: ".slider-button-next",
                },
            });

            // Cancer Testimonials Slider JS
            var swiper = new Swiper(".cancer-testimonials-slider", {
                loop: true,
                spaceBetween: 25,
                autoHeight: true,
                slidesPerView: 1,
                pagination: {
                    el: ".testimonials-pagination",
                    clickable: true,
                },
            });

            // Conditions Slider JS
            var swiper = new Swiper(".conditions-slider", {
                loop: true, 
                spaceBetween: 25,
                autoHeight: true,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".conditions-button-prev",
                    prevEl: ".conditions-button-next",
                },
            });

            // Maternity Clinic Slider JS
            var swiper = new Swiper(".maternity-clinic-slider", {
                loop: true, 
                spaceBetween: 25,
                autoHeight: true,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".maternity-clinic-slider-pagination",
                    clickable: true,
                },
            });
            
            // scrollCue
            scrollCue.init();

            /* Start "Eye Care Hospital Demo JS" & "Child Care Hospital Demo JS" */
    
            // Eye Care Hospital Slider JS
            var swiper = new Swiper(".eye-care-hospital-slider", {
                loop: true, 
                slidesPerView: 1,
                spaceBetween: 25,
                effect: "fade",
                speed: 1200,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".slider-button-prev",
                    prevEl: ".slider-button-next",
                },
            });

            // ECH Services JS
            var swiper = new Swiper(".ech-services-slider", {
                loop: false,
                spaceBetween: 25,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 4
                    },
                }
            });

            // ECH Review Slider JS
            var swiper = new Swiper(".ech-review-slider", {
                loop: true, 
                spaceBetween: 25,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".review-button-prev",
                    prevEl: ".review-button-next",
                },
            });

            // ECH Blog JS
            var swiper = new Swiper(".ech-blog-slider", {
                loop: false,
                spaceBetween: 25,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".blog-button-prev",
                    prevEl: ".blog-button-next",
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 1
                    },
                    992: {
                        slidesPerView: 2
                    },
                    1200: {
                        slidesPerView: 3
                    },
                }
            });

            // CCH Services JS
            var swiper = new Swiper(".cch-services-slider", {
                loop: false,
                spaceBetween: 35,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 1
                    },
                    992: {
                        slidesPerView: 2
                    },
                    1200: {
                        slidesPerView: 3
                    },
                }
            });

            // CCH Blog JS
            var swiper = new Swiper(".cch-blog-slider", {
                loop: true,
                spaceBetween: 35,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".blog-button-prev",
                    prevEl: ".blog-button-next",
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 1
                    },
                    992: {
                        slidesPerView: 2
                    },
                    1200: {
                        slidesPerView: 3
                    },
                }
            });

            // MC Testimonials Slider JS
            var swiper = new Swiper(".mc-testimonials-slider", {
                loop: true, 
                spaceBetween: 25,
                autoHeight: true,
                autoplay: {
                    delay: 8000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".testimonials-button-prev",
                    prevEl: ".testimonials-button-next",
                },
            });

            // Cancer Team Slider JS
            var swiper = new Swiper(".cancer-team-slider", {
                loop: true,
                spaceBetween: 25,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                scrollbar: {
                    el: ".swiper-scrollbar",
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 3
                    },
                }
            });

            // PH Team Slider JS
            var swiper = new Swiper(".mc-team-slider", {
                loop: true,
                spaceBetween: 25,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".team-button-prev",
                    prevEl: ".team-button-next",
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 2
                    },
                    1200: {
                        slidesPerView: 3
                    },
                    1600: {
                        slidesPerView: 4
                    },
                }
            });

            // PH Services Slider JS
            var swiper = new Swiper(".ph-services-slider", {
                loop: true,
                spaceBetween: 25,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 5
                    },
                }
            });

            const getPreloaderId = document.getElementById('preloader');
            if (getPreloaderId) {
                getPreloaderId.style.display = 'none';
            }
            

        });
	});

    // Header Sticky
    try {
        window.addEventListener('scroll', event => {
            const height = 150;
            const { scrollTop } = event.target.scrollingElement;
            document.querySelector('#navbar').classList.toggle('is-sticky', scrollTop >= height);
        }); 
    } catch {}

    // Tooltip JS
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
        
}(jQuery));