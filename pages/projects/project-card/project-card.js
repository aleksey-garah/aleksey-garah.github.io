$(document).ready(function () {
    $("#project-card-info-tabs").tabs();

    var smallImageBlock = $(".galery-small-img");
    var bigImgBlock = $(".galery-big-img");

    smallImageBlock.on("click", function (event) {
        var smallSrc = $(this).children().attr("src");

        bigImgBlock.children("img").attr("src", smallSrc);
        bigImgBlock.children("a").attr("href", smallSrc);
    })
});