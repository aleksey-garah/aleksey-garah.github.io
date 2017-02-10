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

    $("#section-main-prices-table-tabs").tabs();
    $("#catalog-info-tabs").tabs();
    $("#project-card-info-tabs").tabs();

    if ($(window).width() > 1024) {
        $("#main-materials-images-block-tabs").tabs({
            active: 1
        });
    }

    $("#homes-subsection-galery-tabs").tabs();

    $("#slider-range").slider({
        min: 0,
        max: 1000,
        values: [0, 1000],
        range: true,
        stop: function (event, ui) {
            $("input#minCost").val($("#slider-range").slider("values", 0));
            $("input#maxCost").val($("#slider-range").slider("values", 1));
        },

        slide: function (event, ui) {
            $("input#minCost").val($("#slider-range").slider("values", 0));
            $("input#maxCost").val($("#slider-range").slider("values", 1));
        }
    });

});

$(window).on("load", function () {
    $(".team-members-list-container").mCustomScrollbar({
        axis: "x",
        scrollButtons: {
            enable: true
        }
    });
});