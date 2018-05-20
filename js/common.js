$(document).ready(function() {
    $('.menu-trigger').click(function() {
        var ui = $('.menu-trigger');
        $('nav ul').slideToggle(768);
        $('nav ul').css('display', 'flex');
        ui.toggleClass('open-menu');
    });
    $(window).resize(function() {
        if (  $(window).width() > 768 ) {
            $('nav ul').removeAttr('style');
        }
    });//end resize
});//end ready