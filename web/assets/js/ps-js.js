$(function () {
    var shrinkHeader = 300;
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('.header').addClass('shrink');
        } else {
            $('.header').removeClass('shrink');
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});

$(function () {
    var shrinkHeader = 300;
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('.navPanelToggle').addClass('shrink');
        } else {
            $('.navPanelToggle').removeClass('shrink');
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});

$(function () {
    var shrinkHeader = 300;
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('.logo-mini').addClass('shrink');
        } else {
            $('.logo-mini').removeClass('shrink');
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});