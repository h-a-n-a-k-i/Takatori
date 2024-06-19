$(function () {
    $('.c-mv-slide__list').slick({
        fade: true,
        dots: false,
        arrows: false,
        autoplay: true,
        speed: 3000,
    });

    function isObjectVisible(obj) {
        var windowTop = $(window).scrollTop();
        var windowBottom = windowTop + $(window).height() - 200;
        var objectTop = obj.offset().top;
        var objectBottom = objectTop + obj.outerHeight();

        return (objectTop < windowBottom);
    }

    function checkFadeIn() {
        $('.c-fade-in').each(function () {
            if (isObjectVisible($(this))) {
                $(this).addClass('is-visible');
            }
        })
    }

    $('.c-sp-menu, .l-header-nav__link').on('click', function () {
        $('body').toggleClass('is-clicked');
    });

    checkFadeIn();
    $(window).scroll(function () {
        checkFadeIn();
        if ($(this).scrollTop() >= 100) {
            $('body').addClass('is-scrolled');
        } else {
            $('body').removeClass('is-scrolled');
        }
    });
})