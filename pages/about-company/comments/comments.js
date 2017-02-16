$(document).ready(function () {

    if ($(window).width() > 1024) {
        $("#main-materials-images-block-tabs").tabs({
            active: 1
        });
    } else {
        $("#main-materials-images-block-tabs").tabs({
            active: 0
        });
    }

    $("#order-call-dialog").dialog({
        autoOpen: false
    });
    $("#open-order-call-window").on("click", function (event) {
        $("#order-call-dialog").dialog("open");
    });

    //====================================================
    $(".ui-dialog").on("click", function (event) {
        $("#order-call-dialog").dialog("close");
    });

    $(".ui-dialog-content").on("click", function (event) {
        event.stopPropagation();
    });

    var toggleTabsButton = $(".materials-images-block-tabs-dropdown");
    toggleTabsButton.text($(".ui-tabs-active").text());

    toggleTabsButton.on("click", function (event) {
        $("#materials-images-block-tabs-menu").toggleClass("active");
        $(this).toggleClass("active");
    });

    $(".ui-tabs-tab").on("click", function (event) {
        toggleTabsButton.text($(this).text());
    });
});

$(window).on("load", function () {
    $(".scrollable-content").mCustomScrollbar({
        axis: "x",
        scrollButtons: {
            enable: true
        }
    });

    $(".comment-senders-list-item").on("click", function (event) {
        $(".comment-senders-list-item").removeClass("active");
        $(this).addClass("active");

        $(".main-materials-text-block-header-image").children().attr("src", $(this).children("img").attr("src"));
        $(".text-block-header-fio").text($(this).children(".comment-senders-list-item-fio").text());
        $(".text-block-header-location").text($(this).children(".comment-senders-list-item-title").text());
    });
});