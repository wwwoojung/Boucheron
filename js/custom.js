$(function () {
    $('.main_visual .visual_text').removeClass('on');
    $('.main_visual .visual_text').addClass('on');

    $('.main_category .category_itm').slick({
        slidesToShow: 4,
        arrows: false,
    })
})