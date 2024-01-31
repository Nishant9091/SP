document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("stickyNavbar");
    var sticky = navbar.offsetTop + 80;

    window.onscroll = function () {
        if (window.pageYOffset > sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    };
});


// counter
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerText = "0";
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 200;
        if (count < target) {
            counter.innerText = `${Math.ceil(count + increment)}`;
            setTimeout(updateCounter, 1);
        } else counter.innerText = target;
    };
    updateCounter();
});

// swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // when window width is <= 576px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is <= 768px
        768: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is <= 992px
        992: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    }
});


var customSwiper = new Swiper('.custom-swiper', {
    slidesPerView: 5, // Number of slides per view
    spaceBetween: 20, // Space between slides
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        // when window width is <= 576px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        576: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is <= 768px
        768: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is <= 992px
        992: {
            slidesPerView: 4,
            spaceBetween: 10
        }
    }
});