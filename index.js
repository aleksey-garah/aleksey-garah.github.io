$(document).ready(function () {
    var commentsCarusel = $(".comments-carusel");
    var commentsPrev = $(".comments-prev-control");
    var commentsNext = $(".comments-next-control");

    commentsCarusel.owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    commentsNext.click(function() {
        commentsCarusel.trigger('next.owl.carousel');
    });

    commentsPrev.click(function() {
        commentsCarusel.trigger('prev.owl.carousel', [300]);
    });

    var partnersCarusel = $(".partners-carusel");
    var partnersPrev = $(".partners-prev-control");
    var partnersNext = $(".partners-next-control");

    partnersCarusel.owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });

    partnersNext.click(function() {
        partnersCarusel.trigger('next.owl.carousel');
    });

    partnersPrev.click(function() {
        partnersCarusel.trigger('prev.owl.carousel', [300]);
    });
});

$(window).on("load", function () {

});