$(document).ready(function () {
    $("#catalog-info-tabs").tabs();

    $(".catalog-info-tabs-button").on("click", function (event) {
        $("#catalog-info-tabs").toggleClass("active");
        $(".left-filters-block").removeClass("active");
    });

    $(".left-filters-block-button").on("click", function (event) {
        $(".left-filters-block").toggleClass("active");
        $("#catalog-info-tabs").removeClass("active");
    });

    $("#order-call-dialog").dialog({
        autoOpen: false
    });
    $("#open-order-call-window").on("click", function (event) {
        $("#order-call-dialog").dialog("open");
    });

    //===================================================
    $(".ui-dialog").on("click", function (event) {
        $("#order-call-dialog").dialog("close");
    });

    $(".ui-dialog-content").on("click", function (event) {
        event.stopPropagation();
    });
});
