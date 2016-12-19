$(document).ready(function() {

//    var solution_block__nav_width = $(".solution-block__nav").width()+23;


    /*****OWL SLIDER INIT********/

    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: ["", ""],
        items: 1
        // responsive: {
        //     0: {
        //         items: 1
        //     }
        // }

    });

    $('.client-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        navText: ["", ""],
        items: 6,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }

    });

    //solutions block


});
