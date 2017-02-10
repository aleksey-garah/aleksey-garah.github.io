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

    $("#catalog-info-tabs").tabs();

    $(".catalog-info-tabs-button").on("click", function (event) {
        $("#catalog-info-tabs").toggleClass("active")
    });

    $(".left-filters-block-button").on("click", function (event) {
        $(".left-filters-block").toggleClass("active")
    })
});
