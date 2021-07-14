$(document).ready(() => {
    $('#currentYear').text(new Date().getFullYear())

    let preloaderFadeOutTime = 2e3

    function hidePreloader() {
        let preloader = $('.spinner-wrapper')
        preloader.fadeOut(preloaderFadeOutTime)
    }

    hidePreloader()
})

$(window).scroll(function () {
    let scroll = $(window).scrollTop()

    if (scroll >= 50) {
        $('.sticky').addClass('nav-sticky')
    }
    else {
        $('.sticky').removeClass('nav-sticky')
    }
});

$('.smoothlink').on('click', function (event) {
    let $anchor = $(this)

    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 0
    }, 1500, 'easeInOutExpo')

    event.preventDefault()
});

let duration = 5e2

$(window).scroll(function () {
    if ($(this).scrollTop() > 2e2) {
        $('.gotop').fadeIn(duration);
    } else {
        $('.gotop').fadeOut(duration)
    }
})

$('.gotop').click(function (event) {
    event.preventDefault()
    $('html').animate({ scrollTop: 0 }, duration)
    return false
})