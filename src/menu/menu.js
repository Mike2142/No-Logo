
function dropTheMenu1(el, dropMenu){

    if (!$(el).parents().hasClass('active')) {
        $('li').removeClass('active');
        $('.main-block._background-blue').css({top: -200});
        $('.main-block._position-vertical').css({top: -350});

        $('.main-block._background-blue').find( "li" ).removeClass('active2');
        $('.border-arrow').removeClass('active');
        $('.menu3').css({height: 0});
    }

    if ($(el).parent().hasClass('active')) {
        $(el).parent().removeClass('active');
        $(dropMenu).css({top: -200});
        $('#drop-menu-6').css({top: -350});
        $(dropMenu).find( "li" ).removeClass('active2');
        $('.border-arrow').removeClass('active');
        $('.menu3').css({height: 0});
    } else {
        $(el).parent().addClass('active');
        $(dropMenu).css({top: 66});
    }

};