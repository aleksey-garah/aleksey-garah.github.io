$(document).ready(function () {
    var smallImageBlock = $(".galery-small-img");
    var bigImgBlock = $(".galery-big-img");

    smallImageBlock.on("click", function (event) {
        var smallSrc = $(this).children().attr("src");

        $(this).parent().children(".galery-small-img").removeClass("active");
        $(this).addClass("active");

        bigImgBlock.children("img").attr("src", smallSrc);
        bigImgBlock.children("a").attr("href", smallSrc);
    });

    $("#clarify-info-dialog").dialog({
        autoOpen: false
    });
    $("#open-clarify-dialog").on("click", function (event) {
        $("#clarify-info-dialog").dialog("open");
    });

    $("#wanna-same-house-dialog").dialog({
        autoOpen: false
    });
    $("#open-wanna-same-dialog").on("click", function (event) {
        $("#wanna-same-house-dialog").dialog("open");
    });

    $("#order-call-dialog").dialog({
        autoOpen: false
    });
    $("#open-order-call-window").on("click", function (event) {
        $("#order-call-dialog").dialog("open");
    });

    //============================
    $(".ui-dialog").on("click", function (event) {
        $("#order-call-dialog").dialog("close");
        $("#clarify-info-dialog").dialog("close");
        $("#wanna-same-house-dialog").dialog("close");
    });

    $(".ui-dialog-content").on("click", function (event) {
        event.stopPropagation();
    });
});