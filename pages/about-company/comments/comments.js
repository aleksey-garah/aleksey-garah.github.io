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

    if ($(window).width() > 1024) {
        $("#main-materials-images-block-tabs").tabs({
            active: 1
        });
    } else {
        $("#main-materials-images-block-tabs").tabs({
            active: 0
        });
    }
});