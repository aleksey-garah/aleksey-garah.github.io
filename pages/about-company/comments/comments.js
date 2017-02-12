$(document).ready(function () {
    if ($(window).width() > 1024) {
        $("#main-materials-images-block-tabs").tabs({
            active: 1
        });
    } else {
        $("#main-materials-images-block-tabs").tabs({
            active: 0
        });
    }
});