$(function () {
    $('ul.global-side-menu-list li').each(function() {
        if ($(this).has('ul').length) {
            $(this).addClass('ddown');
        }
    });
});