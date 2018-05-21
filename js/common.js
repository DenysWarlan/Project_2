;(function ($) {
    $(document).ready(function () {
        $('.menu-trigger').click(function () {
            var ui = $('.menu-trigger'),
                nav = $('nav ul');
            nav.slideToggle(768);
            nav.css('display', 'flex');
            ui.toggleClass('open-menu');
            if (ui.hasClass('open-menu')) {
                $('nav').css('height', '100vh');
            }
            else {
                $('nav').css('height', '0');
            }
        });
        $(window).resize(function () {
            if ($(window).width() > 768) {
                $('nav ul').removeAttr('style');
            }
        });
    });
})(jQuery);