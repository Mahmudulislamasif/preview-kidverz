(function ($) {
    "use strict"; // Start of use strict
    /*
         - Aos animation
         - To Top
         - Navbar
        */
    /*-------------------------------------------
        Aos animation
    --------------------------------------------- */
    AOS.init({
        // once: true,
        // whether animation should happen only once - while scrolling down
    });
    /*-------------------------------------------
        To Top
    --------------------------------------------- */
    $('body').append('<div id="toTop" class="btn-top"><i class="fa-solid fa-arrow-up"></i></div>');
    $(window).scroll(function () {
        if ($(this).scrollTop() !== 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    /*-------------------------------------------
        Navbar
    --------------------------------------------- */

    // Navbar collapse hide
    $(".navbar-collapse .collapse-close").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });
    /*-------------------------------------------
        Morphext
    --------------------------------------------- */
    $("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "bounceIn",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 2000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });
    /*-------------------------------------------
        Infiniteslide
    --------------------------------------------- */

    $(function () {
        $('.scroll1').infiniteslide({
            responsive: true,
            speed: 50, //speed this is px/min
        });
        $('.scroll2').infiniteslide({
            direction: 'right',
            responsive: true,
            speed: 50, //speed this is px/min
        });
    });


})(jQuery);