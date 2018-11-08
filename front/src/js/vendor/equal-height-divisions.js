$(window).on("load resize", function () {
    /*-- Set Height ---*/
    var heights = $(".FF").map(function () {
            return $(this).height();
        }).get(),
        maxHeight = Math.max.apply(null, heights) + 'px';
    if ($('#visMd').is(":visible")) {
        setTimeout(function () {
            $(".FF").height(maxHeight);
        }, 400);
    } else {
        $(".FF").css({'height': 'auto'});
    }
});
