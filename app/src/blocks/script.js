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

    $('.news-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        navText: ["", ""],
        items: 1,
        responsive: {
            0: {
                nav: false
            },
            540: {
                nav: true
            }
        }
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


//init slider with thumbnails for item-card, fabric-card, portfolio-card

var itemcard = '.itemcard-slider';
var portfoliocard = '.portfolio-card-slider';
var fabriccard = '.fabric-card-slider';

    $(itemcard ).owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        navText: ["", ""],
        items: 1,
        responsive: {
            0: {
                nav: false
            },
            540: {
                nav: true
            }
        }
    });
    create_thumbnails(itemcard );

    $(fabriccard ).owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        navText: ["", ""],
        items: 1,
        responsive: {
            0: {
                nav: false
            },
            540: {
                nav: true
            }
        }
    });
    create_thumbnails(fabriccard );

    $(portfoliocard).owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        navText: ["", ""],
        items: 1,
        responsive: {
            0: {
                nav: false
            },
            540: {
                nav: true
            }
        }
    });
    create_thumbnails(portfoliocard);


    function create_thumbnails(slider_name){

        // 1) ASSIGN EACH 'DOT' A NUMBER
        dotcount = 1;
        var owl_dot = $(slider_name + ' .owl-dot');
        var owl_item = $(slider_name + ' .owl-item');

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

    }

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

//config button  in  item-card


    $('#configuration').click(function () {

        console.log('click');

        $('.header-tabs li a').removeClass('active');

        $("a[href='#config_calc']").addClass('active');
        $('.tab-pane').removeClass('active');
        $('#config_calc').addClass('active');

    });

//active class in accordion

    $('#accordion .card-header a').click(function () {
        $(this).parent().toggleClass('active');
        $('#accordion .card-header a').not($(this)).parent().removeClass('active');
    });


});



