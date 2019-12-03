
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