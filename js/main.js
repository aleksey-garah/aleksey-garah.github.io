$(document).ready(function () {

    var scroll = 0;
    $(window).scroll(function (event) {
        scroll = $(window).scrollTop();
        if (scroll > 0) {
            $('.top-navigation').addClass("start-scroll");
        } else {
            $('.top-navigation').removeClass("start-scroll");
        }
    });

    $("#opne-mobile-menu-button").on("click", function (even) {
        $("#mobile-menu").toggleClass("active");
    });

    $("#on-hidden-menu").on("click", function (even) {
        $("#menu").toggleClass("opened");
    });
});