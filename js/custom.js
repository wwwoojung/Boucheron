$(function () {
    $('.main_visual .visual_text').removeClass('on');
    $('.main_visual .visual_text').addClass('on');

    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();

        if (sct > 0) {
            $('.header_wrap').addClass('on')
        } else {
            $('.header_wrap').removeClass('on')
        }
    })

    $('.main_category .category_itm').slick({
        slidesToShow: 4,
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        centerMode: true,
        centerPadding: '0',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 625,
                settings: {
                    slidesToShow: 1,
                    autoplaySpeed: 3000,
                    speed: 900,
                }
            }
        ]
    })

    $('.main_category .category_itm').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.main_category .category_name li').removeClass('on');
        $('.main_category .category_name li').eq(nextSlide).addClass('on');
    });

    $('.main_category .category_name a').on('click', function (e) {
        e.preventDefault();

        let idx = $(this).parent().index();

        $('.main_category .category_name li').removeClass('on');
        $(this).parent().addClass('on');

        $('.main_category .category_itm').slick('slickGoTo', idx);
    })

    $('.main_event .event_con .material-symbols-outlined').on('click', function () {
        $(this).toggleClass('on');
    })

    $('#footer .footer_top .more_btn').on('click', function () {
        $('#footer .footer_top .right_con .country_box').addClass('on');
    })

    $('#footer .footer_top .right_con .country_box .close').on('click', function () {
        $('#footer .footer_top .right_con .country_box').removeClass('on');
    })
})