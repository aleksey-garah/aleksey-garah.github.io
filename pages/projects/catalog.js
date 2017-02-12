$(document).ready(function () {
    $("#catalog-info-tabs").tabs();

    $(".catalog-info-tabs-button").on("click", function (event) {
        $("#catalog-info-tabs").toggleClass("active")
    });

    $(".left-filters-block-button").on("click", function (event) {
        $(".left-filters-block").toggleClass("active")
    })
});
