
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