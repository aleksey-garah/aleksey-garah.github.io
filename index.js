$(document).ready(function () {

    $("#section-interactive-tabs").tabs();

    $(".interactive-item-number-left").tooltip({
        position: {my: "left+15 center", at: "right center"}
    });

    $(".interactive-item-number-right").tooltip({
        position: {my: "right-15 center", at: "left center"}
    });

    //===========modals============
    $("#calculate-dialog").dialog({
        autoOpen: false
    });
    $("#open-calculate-window").on("click", function (event) {
        $("#calculate-dialog").dialog("open");
    });

    $("#order-call-dialog").dialog({
        autoOpen: false
    });
    $("#open-order-call-window").on("click", function (event) {
        $("#order-call-dialog").dialog("open");
    });

    $("#connect-with-worker-dialog").dialog({
        autoOpen: false
    });
    $("#open-connect-with-worker-dialog").on("click", function (event) {
        $("#connect-with-worker-dialog").dialog("open");
    });

    //============================

    $(".ui-dialog").on("click", function (event) {
        $("#calculate-dialog").dialog("close");
        $("#order-call-dialog").dialog("close");
        $("#connect-with-worker-dialog").dialog("close");
    });

    $(".ui-dialog-content").on("click", function (event) {
        event.stopPropagation();
    });
});

$(window).on("load", function () {
    $(".scrollable-content").mCustomScrollbar({
        axis: "x",
        scrollButtons: {
            enable: true
        }
    });

    $(".team-members-list-item").on("click", function (event) {
        $(".team-members-list-item").removeClass("active");
        $(this).addClass("active");

        $(".team-member-block-image").children().attr("src", $(this).children("img").attr("src"));
        $(".team-member-block-fio").text($(this).children(".team-members-list-item-fio").text());
        $(".team-member-block-title").text($(this).children(".team-members-list-item-title").text());
    });
});