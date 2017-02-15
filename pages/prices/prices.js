$(document).ready(function () {
    $("#section-main-prices-table-tabs").tabs();

    $("#order-call-dialog").dialog({
        autoOpen: false
    });
    $("#open-order-call-window").on("click", function (event) {
        $("#order-call-dialog").dialog("open");
    });

    //===============================================
    $(".ui-dialog").on("click", function (event) {
        $("#order-call-dialog").dialog("close");
    });

    $(".ui-dialog-content").on("click", function (event) {
        event.stopPropagation();
    });

    var toggleTabsButton = $(".main-prices-table-tabs-dropdown");
    toggleTabsButton.text($(".ui-tabs-active").text());

    toggleTabsButton.on("click", function (event) {
        $(".section-main-prices-table-content-tabs-headers").toggleClass("active");
        $(this).toggleClass("active");
    });

    $(".ui-tabs-tab").on("click", function (event) {
        toggleTabsButton.text($(this).text());
    });
});
