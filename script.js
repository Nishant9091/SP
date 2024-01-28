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

