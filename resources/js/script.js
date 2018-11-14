$(function () {
    $('ul.global-side-menu-list li').each(function() {
        if ($(this).has('ul').length) {
            $(this).addClass('ddown');
            if( !$(this).find("> .nav-direction").length ){
                $(this).find("> a").after( '<span class="nav-direction"><i aria-hidden="true" class="fa fa-caret-down"></i></span>' );
            }
        }
    });

    $('ul.global-side-menu-list').on('click', '.nav-direction', function () {
        let subMenu = $(this).closest('li').find("> ul");
        if (subMenu.length) {
            subMenu.slideToggle("slow");
        }
        return false;
    });
});