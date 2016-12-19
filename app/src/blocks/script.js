$(document).ready(function() {

//    var solution_block__nav_width = $(".solution-block__nav").width()+23;


    /*****OWL SLIDER INIT********/

    $('.slider .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        navText: ["", ""],
        items: 1
        // responsive: {
        //     0: {
        //         items: 1
        //     }
        // }

    });

    $('.owl-carousel.client-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        // margin:30,
        navText: ["", ""],
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }

    });

    //solutions block


});
