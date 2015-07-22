var ready = function() {
    $('.block-hover').mouseenter(function(e) {
        $(this).children('span').fadeIn(300);
    }).mouseleave(function(e) {
        $(this).children('span').fadeOut(300);
    });

    $('.block-hover span').mouseenter(function(e) {
        e.stopPropagation();
    });
};

$(document).ready(ready);
$(document).on('page:load', ready);