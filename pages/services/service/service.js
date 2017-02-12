$(document).ready(function () {

    $("#order-call-dialog").dialog({
        autoOpen: false
    });
    $("#open-order-call-window").on("click", function (event) {
        $("#order-call-dialog").dialog("open");
    });

    $("#know-price-dialog").dialog({
        autoOpen: false
    });
    $("#open-know-price-dialog").on("click", function (event) {
        $("#know-price-dialog").dialog("open");
    });

    $("#order-service-dialog").dialog({
        autoOpen: false
    });
    $("#open-order-service-dialog").on("click", function (event) {
        $("#order-service-dialog").dialog("open");
    });
    //===========================================

    $(".ui-dialog").on("click", function (event) {
        $("#order-call-dialog").dialog("close");
        $("#know-price-dialog").dialog("close");
        $("#order-service-dialog").dialog("close");
    });

    $(".ui-dialog-content").on("click", function (event) {
        event.stopPropagation();
    });
});