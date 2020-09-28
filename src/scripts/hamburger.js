$(".a-hamburger").click(
    function() {
        $(".a-hamburger").toggleClass("transformHam");

        $('.m-header__nav').toggleClass('showMenu');

        $('body,html').toggleClass('disabledScroll');
    }
);