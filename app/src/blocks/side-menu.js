$(document).ready(function() {
var catalog_item = $(".side-menu-items__catalog li");
var window_width = $(window).width();


var closeSub = function(){
    catalog_item.removeClass('menu-arrow active');
    $('.sub-menu').removeClass('_current').removeClass('_show');
    $('.sub-menu-wrap').removeClass('_show');
};

$('.bars').click(function () {
    $('.side-menu').addClass('opened');
});

$('.side-menu-top .close').click(function () {
    $('.side-menu').removeClass('opened');
    closeSub();

});

$('.sub-menu-wrap .close').click(function () {
    closeSub();
    if(window_width < 600) {
        $('.side-menu').removeClass('small-view');
    }
});


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



    catalog_item.click(function(){

        if(window_width < 600) {
         $('.side-menu').addClass('small-view');
        }

        catalog_item.removeClass('menu-arrow active');
        $(this).addClass('menu-arrow active');

        $('.sub-menu-wrap').addClass('_show');
        var id = $(this).children().attr('href');
        $(id).addClass('_show').addClass('_current');
        $(".sub-menu").not(id).removeClass('_current');

        setTimeout(function () {
            $(".sub-menu").not(id).removeClass('_show').removeClass('_current');
        }, 300);


    });
});
