$(document).ready(function() {
    $(function() {
        $('.menu-wrapper').on('click', function() {
            $('.hamburger-menu').toggleClass('animate');
            $('.adaptive').slideToggle();
        });
    });
});