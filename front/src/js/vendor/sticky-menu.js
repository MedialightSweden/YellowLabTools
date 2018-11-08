window.onscroll = function () {
    navScroll()
};

var navbar = document.getElementById("second-nav");
var sticky = navbar.offsetTop;


function navScroll() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
        document.getElementById("second-nav").classList.add("bg-white");
    } else {
        navbar.classList.remove("sticky");
        document.getElementById("second-nav").classList.remove("bg-white");
    }
}