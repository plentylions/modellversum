$(function () {
    $('ul.global-side-menu-list li').each(function() {
        if ($(this).has('ul').length) {
            $(this).addClass('ddown');
            $(this).find("> a").after( '<span class="nav-direction"><i aria-hidden="true" class="fa fa-caret-down"></i></span>' );
        }
    });
});