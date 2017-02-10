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
});

$(window).on("load", function () {
    $(".team-members-list-container").mCustomScrollbar({
        axis: "x",
        scrollButtons: {
            enable: true
        }
    });
});