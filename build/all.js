
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

function dropTheMenu2(el){

    if (!$(el).parents().hasClass('active2')) {
        $('li').removeClass('active2');
        $('.border-arrow').removeClass('active');
        $('.menu3').css({height: 0});
        $('.menu3').find( "li" ).removeClass('active3');
        $('.menu3__drop-menu').removeClass('active');
    }

    if ($(el).parent().hasClass('active2')) {
        $(el).parent().removeClass('active2');
        $(el).siblings('.border-arrow').removeClass('active');
        $(el).siblings(".menu3").css({height: 0});
    } else {
        $(el).parent().addClass('active2');
        $(el).siblings('.border-arrow').addClass('active');
        $(el).siblings(".menu3").css({height: 230});
    }

};

function dropTheMenu3( el, dropMenu ){

    if (!$(el).parents().hasClass('active3')) {
        $('li').removeClass('active3');
        $('.menu3__drop-menu').removeClass('active');
    }

    if ($(el).parent().hasClass('active3')) {
        $(el).parent().removeClass('active3');
        $(dropMenu).removeClass('active');

    } else {
        $(el).parent().addClass('active3');
        $(dropMenu).addClass('active');
    }

};