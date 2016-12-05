/**
 * Created by Vasiliy Tsvetkov on 30.11.2016.
 */
$(document).ready( function(){


    $('.bars').click(function(){
        $('.side-menu').addClass('opened');
    });
    $('.close').click(function () {
        $('.side-menu').removeClass('opened');
    })
});