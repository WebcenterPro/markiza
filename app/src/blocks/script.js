/**
 * Created by Vasiliy Tsvetkov on 30.11.2016.
 */
$(document).ready(function () {
    var window_width = $(window).width();
    //  var menu_items = $('.navigation.top .navigation__item').children();
    var catalog_items = $('.side-menu-items__item ').children();

    $('.bars').click(function () {
        $('.side-menu').addClass('opened');
    });
    $('.close').click(function () {
        $('.side-menu').removeClass('opened');
    })


    $('.side-menu-items__full > .side-menu-items__item:first-child').click(function() {
        $(this).toggleClass('down');
        $(this).next('.side-menu-items__catalog').slideToggle("slow");

    });


    $(window).resize(function () {
        var window_width = $(window).width();

        if (window_width > 1070) {
            $('.side-menu').removeClass('opened');
        }

        if (window_width < 767) {

            $('.side-menu-items__full > .side-menu-items__item:first-child')
                .addClass("menu-arrow")
                .after($(".side-menu-items__catalog"));

        } else {
            $('.side-menu-items').append($(".side-menu-items__catalog"));
        }

    });


    if (window_width < 767) {

        $('.side-menu-items__full > .side-menu-items__item:first-child')
            .addClass("menu-arrow")
            .after($(".side-menu-items__catalog"));

    }


    /****************************/
    /*****OWL SLIDER INIT********/

    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        navText : ["",""],
        items: 1
        // responsive: {
        //     0: {
        //         items: 1
        //     }
        // }

    });

    /****************************/

});