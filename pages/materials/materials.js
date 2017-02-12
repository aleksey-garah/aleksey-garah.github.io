$(document).ready(function () {
    $("#homes-subsection-galery-tabs").tabs();

    var toggleTabsButton = $(".homes-subsection-galery-tabs-dropdown");
    toggleTabsButton.text($(".ui-tabs-active").text());

    toggleTabsButton.on("click", function (event) {
        $("#homes-subsection-galery-tabs-menu").toggleClass("active");
    });

    $("#order-call-dialog").dialog({
        autoOpen: false
    });
    $("#open-order-call-window").on("click", function (event) {
        $("#order-call-dialog").dialog("open");
    });

    //================================================
    $(".ui-dialog").on("click", function (event) {
        $("#order-call-dialog").dialog("close");
    });

    $(".ui-dialog-content").on("click", function (event) {
        event.stopPropagation();
    });
});