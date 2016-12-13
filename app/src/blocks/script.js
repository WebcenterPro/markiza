/**
 * Created by Vasiliy Tsvetkov on 30.11.2016.
 */
$(document).ready(function () {
    var window_width = $(window).width();
    //  var menu_items = $('.navigation.top .navigation__item').children();
    // var catalog_items = $('.side-menu-items__item ').children();

    $('.bars').click(function () {
        $('.side-menu').addClass('opened');
    });
    $('.side-menu-top .close').click(function () {
        $('.side-menu').removeClass('opened');
        $('.sub-menu').removeClass('_show');
    })
    $('.sub-menu .close').click(function () {
        $('.sub-menu').removeClass('_current').removeClass('_show');
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
$(".side-menu-items__catalog li").click(function(){



   var id = $(this).children().attr('href');
   $(id).addClass('_show').addClass('_current');
    // $(".sub-menu").not($(id)).removeClass('_current').delay(1000).removeClass('_show');

});


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