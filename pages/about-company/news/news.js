$(document).ready(function () {

    //===========modals============

    $("#order-call-dialog").dialog({
        autoOpen: false
    });
    $("#open-order-call-window").on("click", function (event) {
        $("#order-call-dialog").dialog("open");
    });

    //============================

    $(".ui-dialog").on("click", function (event) {
        $("#order-call-dialog").dialog("close");
    });

    $(".ui-dialog-content").on("click", function (event) {
        event.stopPropagation();
    });
});