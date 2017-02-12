$(document).ready(function () {

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