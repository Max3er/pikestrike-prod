scrollButton();
function scrollButton() {
    $(".bt-book").click(function () {
        $('html,body').animate({
            scrollTop: $("#howto").offset().top
        }, 'slow');
    });
}

scrollLink();
function scrollLink() {
    $(".contactus").click(function () {
        $('html,body').animate({
            scrollTop: $("#contactus").offset().top
        }, 'slow');
    });
}

scrollOffers();
function scrollOffers() {
    $(".scrollOffers").click(function () {
        $('html,body').animate({
            scrollTop: $("#scrollOffers").offset().top
        }, 'slow');
    });
}

