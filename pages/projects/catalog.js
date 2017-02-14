$(document).ready(function () {
    $("#catalog-info-tabs").tabs();

    var inpfot = $("#flores-ot");
    var inpfdo = $("#flores-do");
    var inprot = $("#rooms-ot");
    var inprdo = $("#rooms-do");
    var inppot = $("#price-ot");
    var inppdo = $("#price-do");


    $("#number-flors-slider").ionRangeSlider({
        type: "double",
        onStart: function (data) {
            inpfot.val(data.from);
            inpfdo.val(data.to);
        },
        onChange: function (data) {
            inpfot.val(data.from);
            inpfdo.val(data.to);
        },
        onUpdate: function (data) {
            inpfot.val(data.from);
            inpfdo.val(data.to);
        }
    });

    $("#price-slider").ionRangeSlider({
        type: "double",
        onStart: function (data) {
            inppot.val(data.from);
            inprdo.val(data.to);
        },
        onChange: function (data) {
            inppot.val(data.from);
            inppdo.val(data.to);
        },
        onUpdate: function (data) {
            inppot.val(data.from);
            inppdo.val(data.to);
        }
    });

    $("#number-rooms-slider").ionRangeSlider({
        type: "double",
        onStart: function (data) {
            inprot.val(data.from);
            inprdo.val(data.to);
        },
        onChange: function (data) {
            inprot.val(data.from);
            inprdo.val(data.to);
        },
        onUpdate: function (data) {
            inprot.val(data.from);
            inprdo.val(data.to);
        }
    });

    var sliderflors = $("#number-flors-slider").data("ionRangeSlider");
    var sliderprices = $("#price-slider").data("ionRangeSlider");
    var sliderrooms = $("#number-rooms-slider").data("ionRangeSlider");


   inpfot.on("blur change", function (event) {
       sliderflors.update({
           from: parseInt($(this).val())
       })
   });
   inpfdo.on("blur change", function (event) {
       sliderflors.update({
           to: parseInt($(this).val())
       })
   });

   inprot.on("blur change", function (event) {
       sliderrooms.update({
           from: parseInt($(this).val())
       })
   });
   inprdo.on("blur change", function (event) {
       sliderrooms.update({
           to: parseInt($(this).val())
       })
   });

   inppot.on("blur change", function (event) {
       sliderprices.update({
           from: parseInt($(this).val())
       })
   });
   inppdo.on("blur change", function (event) {
       sliderprices.update({
           to: parseInt($(this).val())
       })
   });


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
