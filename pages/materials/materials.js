$(document).ready(function () {
    $("#homes-subsection-galery-tabs").tabs();

    var toggleTabsButton = $(".homes-subsection-galery-tabs-dropdown");
    toggleTabsButton.text($(".ui-tabs-active").text());

    toggleTabsButton.on("click", function (event) {
        $("#homes-subsection-galery-tabs-menu").toggleClass("active");
    });

    $(".ui-tabs-tab").on("click", function (event) {
        toggleTabsButton.text($(this).text());
    });

    var smallImageBlock = $(".galery-small-img");

    smallImageBlock.on("click", function (event) {
        var smallSrc = $(this).children().attr("src");
        var bigImgBlock = $(this).parent().parent().children(".galery-big-img");

        $(this).parent().children(".galery-small-img").removeClass("active");
        $(this).addClass("active");

        bigImgBlock.children("img").attr("src", smallSrc);
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