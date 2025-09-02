document.addEventListener("DOMContentLoaded", function () {

    var swiper = new Swiper(".swiper-banner", {
        spaceBetween: 12,
        slidesPerView: 11,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        loop: true,
        breakpoints: {
            1: {
                slidesPerView: 3,
            },
            575: {
                slidesPerView: 4,
            },
            768: {
              slidesPerView: 6,
            },
            1210: {
                slidesPerView: 11,
            },
        },
    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    });
    var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        thumbs: {
          swiper: swiper,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });

    
    var swiper = new Swiper(".swiper-banner-right-top", {
        spaceBetween: 10,
        slidesPerView: 1,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
    });
    var swiper = new Swiper(".swiper-banner-bottom", {
        spaceBetween: 10,
        slidesPerView: 1,
        autoplay: {
            delay: 2200,
            disableOnInteraction: false,
        },
        loop: true,
    });


    var swiper = new Swiper(".swiper-banner-ad", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });

    
    var swiper = new Swiper(".swip-product-main", {
        slidesPerView: 5,
        spaceBetween: 25,
        breakpoints: {
            // when window width is >= 640px
            64: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
            // when window width is >= 1024px
            991: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1210: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
        },
    });

    var swiper = new Swiper('.swiper-tab-prod', {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      
    function initSwiperBulletsHover() {
        const bullets = document.querySelectorAll('.swiper-tab-prod .swiper-pagination .swiper-pagination-bullet');
        
        bullets.forEach(bullet => {
          bullet.removeEventListener('mouseenter', bullet._hoverHandler);
          bullet._hoverHandler = () => bullet.click();
          bullet.addEventListener('mouseenter', bullet._hoverHandler);
        });
    }
    var navLink = document.querySelectorAll('.nav-item');
    navLink.forEach(navLink => {
        document.addEventListener('click', () => {
            initSwiperBulletsHover();
        });
    })

    document.addEventListener('click', () => {
        initSwiperBulletsHover();
    });
      



    let catalogList = document.querySelector('.catalog-dropdown .catalog-list');

    if (catalogList) {
      catalogList.addEventListener('click', function () {
        this.classList.toggle('active');
        this.closest('.header-second-row').classList.toggle('active');
        this.closest('body').classList.toggle('active');
        this.closest('body').classList.remove('open-catalog');
      });
    }
  
    var phoneInputs = document.querySelectorAll('input[type="tel"]');
  
    var getInputNumbersValue = function (input) {
        // Return stripped input value вЂ” just numbers
        return input.value.replace(/\D/g, '');
    }
  
    var onPhonePaste = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        var pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            var pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                // Attempt to paste non-numeric symbol вЂ” remove all non-numeric symbols,
                // formatting will be in onPhoneInput handler
                input.value = inputNumbersValue;
                return;
            }
        }
    }
  
    var onPhoneInput = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";
  
        if (!inputNumbersValue) {
            return input.value = "";
        }
  
        if (input.value.length != selectionStart) {
            // Editing in the middle of input, not last symbol
            if (e.data && /\D/g.test(e.data)) {
                // Attempt to input non-numeric symbol
                input.value = inputNumbersValue;
            }
            return;
        }
  
        if ([ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
            var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    }
    var onPhoneKeyDown = function (e) {
        // Clear input after remove last symbol
        var inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            e.target.value = "";
        }
    }
    for (var phoneInput of phoneInputs) {
        phoneInput.addEventListener('keydown', onPhoneKeyDown);
        phoneInput.addEventListener('input', onPhoneInput, false);
        phoneInput.addEventListener('paste', onPhonePaste, false);
    }
    
})