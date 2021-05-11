(function($, window, document) {
    "use strict";
    $(function() {
         var      
            $body      = $('body'),
            $hamburger = $('.hamburger'),
            $mainNav   = $('.nav_wrapper');

        $hamburger.click(function() {
            $body.toggleClass('menuopened');
            $('.nav_wrapper').toggleClass('menutoggled');
            $(this).toggleClass('toggled');
            $mainNav.slideToggle('fast');
        });
        $(window).scroll(function() {
             var scroll = $(window).scrollTop();
             if (scroll >= 100) {
                 $("body").addClass("header-fixed");
             }
             if (scroll < 100) {
                 $("body").removeClass("header-fixed");
             }
        });

        var interval = undefined;
        $(document).ready(function () {
            interval = setInterval(getNext, 2000);
            $('#next').on('click', getNext);
            $('#prev').on('click', getPrev);
        });

        function getNext() {
            var $curr = $('.slider li:visible'),
                $next = ($curr.next().length) ? $curr.next() : $('.slider li').first();

            transition($curr, $next);
        }

        function getPrev() {
            var $curr = $('.slider li:visible'),
                $next = ($curr.prev().length) ? $curr.prev() : $('.slider li').last();
            transition($curr, $next);
        }

        function transition($curr, $next) {
            clearInterval(interval);

            $next.css('z-index', 2).fadeIn('slow', function () {
                $curr.hide().css('z-index', 0);
                $next.css('z-index', 1);
            });

        }

    });
}(window.jQuery, window, document));