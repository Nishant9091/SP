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
