$(document).ready(function () {

    $( "#calculate-dialog" ).dialog({
        autoOpen: false
    });

    $("#open-calculate-window").on("click", function (event) {
        $("#calculate-dialog").dialog("open");
    });

    $(".ui-dialog ").on("click", function (event) {
        $("#calculate-dialog").dialog("close");
    });

    $(".ui-dialog-content").on("click", function (event) {
        event.stopPropagation();
    })
});

$(window).on("load", function () {
    $(".scrollable-content").mCustomScrollbar({
        axis: "x",
        scrollButtons: {
            enable: true
        }
    });
};