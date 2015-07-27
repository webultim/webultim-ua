$(function(){
    $('.cs-style-3 li').on('mouseenter', function(){
        $(this).find('figcaption').css({top: 'auto'});
    });
    $('.close-modal').on('click', function(){
        $('.cs-style-3').find('figcaption').css({top: '0'});
    });
});