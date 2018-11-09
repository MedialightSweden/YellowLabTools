if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(item) {
        var i = this.length;
        while (i--) {
            if (this[i] === item) return i;
        }
        return -1;
    }
}

window.onload = function () {
    allocateBtnActive()
};

function allocateBtnActive() {
    var variable = document.getElementsByClassName("btn");
    var i;
    for (i = 0; i < variable.length; i++) {
        if(variable[i].classList.indexOf && variable[i].classList.indexOf("original") === -1)
        {
            variable[i].classList.add("btn-active");
        }
    }
}