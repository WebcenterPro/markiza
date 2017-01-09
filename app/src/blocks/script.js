$(document).ready(function () {

    /*****OWL SLIDER INIT********/

    $('.main-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        navText: ["", ""],
        items: 1
    });


    $('.owl-carousel.client-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        // margin:30,
        navText: ["", ""],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            850: {
                items: 6
            },
            1070: {
                items: 5
            },
            1350: {
                items: 6
            },
            1500: {
                items: 7
            }
        }

    });


//init slider for item-card  with thumbnails


    $('.itemcard-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        navText: ["", ""],
        items: 1
    });

    // 1) ASSIGN EACH 'DOT' A NUMBER
    dotcount = 1;
    var owl_dot = $('.itemcard-slider .owl-dot');
    var owl_item = $('.itemcard-slider .owl-item');

    owl_dot.each(function () {
        $(this).addClass('dotnumber' + dotcount);
        $(this).attr('data-info', dotcount);
        dotcount = dotcount + 1;
    });

    // 2) ASSIGN EACH 'SLIDE' A NUMBER
    slidecount = 1;

    owl_item.not('.cloned').each(function () {
        $(this).addClass('slidenumber' + slidecount);
        slidecount = slidecount + 1;
    });

    // SYNC THE SLIDE NUMBER IMG TO ITS DOT COUNTERPART (E.G SLIDE 1 IMG TO DOT 1 BACKGROUND-IMAGE)
    owl_dot.each(function () {

        grab = $(this).data('info');

        slidegrab = jQuery('.slidenumber' + grab + ' img').attr('src');
        //  console.log(slidegrab);

        $(this).css("background-image", "url(" + slidegrab + ")");

    });

    // THIS FINAL BIT CAN BE REMOVED AND OVERRIDEN WITH YOUR OWN CSS OR FUNCTION, I JUST HAVE IT
    // TO MAKE IT ALL NEAT
    amount = owl_dot.length;
    gotowidth = 98 / amount;

    owl_dot.css("width", gotowidth + "%");
    newwidth = owl_dot.width() / 1.5;

    owl_dot.height(newwidth);


    /*******************************************************************/
//switcher in item-card

    $('.manage-switch input').click(function () {
        $(this).parent().prev().toggleClass('gray-switch');
        $(this).parent().next().toggleClass('gray-switch');
        $(this).parent().parent().siblings().toggleClass('__hidden');
    });

    $("#wind-check").click(function () {
        $(this).parent().next().toggleClass('__hidden');
    });

});
