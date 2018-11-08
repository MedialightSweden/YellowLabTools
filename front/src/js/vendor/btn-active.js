window.onload = function () {
    allocateBtnActive()
};

function allocateBtnActive() {
    var variable = document.getElementsByClassName("btn");
    var i;
    for (i = 0; i < variable.length; i++) {
        variable[i].classList.add("btn-active");
    }
}