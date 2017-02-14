$(document).ready(function () {

    var scroll = 0;
    $(window).scroll(function (event) {
        scroll = $(window).scrollTop();
        if (scroll > 0) {
            $('.top-navigation').addClass("start-scroll");
        } else {
            $('.top-navigation').removeClass("start-scroll");
        }
    });

    $("#opne-mobile-menu-button").on("click", function (even) {
        $("#mobile-menu").toggleClass("active");
    });
});

$(window).on("load", function () {
    hiddenNavBar = {
        $menu: $('#menu'),
        init: function () {
            this.resize();
            $('<div id="on-hidden-menu"><div class="toggle "><span></span></div><ul></ul></div>').hide().insertAfter(".nav-phone-block");
            // toggle
            $('#on-hidden-menu .toggle').click(function () {
                $('#on-hidden-menu').toggleClass('open');
            });

            // win load & resize
            $(window).on('load resize', function () {
                hiddenNavBar.resize();
            });
        },
        resize: function () {
            setTimeout(function () {
                var menuWidth = $('#menu').width();
                var winW = $(".main-navigation-menu").width();

                console.log(menuWidth, winW);

                if (winW > menuWidth) {
                    console.log('init');

                    $('#on-hidden-menu').show();
                    $clone = $('li:not(".on-hidden"):last', $('#menu')).addClass('on-hidden').clone();

                    if ($clone.parent().length == 0) {
                        $clone.prependTo($('#on-hidden-menu ul'));
                    }

                    hiddenNavBar.resize();

                } else if (winW + $('li.on-hidden:first').width() < menuWidth) {
                    $('li.on-hidden:first').removeClass('on-hidden');
                    $('#on-hidden-menu ul li:first').remove();
                }

                if ($('.on-hidden').length == 0) {
                    $('#on-hidden-menu').removeClass('open').hide();
                }
            }, 10);
        }
    };

    hiddenNavBar.init();
});