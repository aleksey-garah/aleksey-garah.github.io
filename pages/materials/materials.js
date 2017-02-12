$(document).ready(function () {
    $("#homes-subsection-galery-tabs").tabs();

    var toggleTabsButton = $(".homes-subsection-galery-tabs-dropdown");
    toggleTabsButton.text($(".ui-tabs-active").text());

    toggleTabsButton.on("click", function (event) {
        $("#homes-subsection-galery-tabs-menu").toggleClass("active");
    })
});