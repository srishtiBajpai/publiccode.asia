/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */





(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    // $('a.page-scroll').bind('click', function(event) {
    //     var $anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: ($($anchor.attr('href')).offset().top - 50)
    //     }, 1250, 'easeInOutExpo');
    //     event.preventDefault();
    // });



  //  Highlight the top nav as scrolling occurs
    // $('body').scrollspy({
    //     target: '.navbar-fixed-top',
    //     offset: 51
    // })

    // Closes the Responsive Menu on Menu Item Click
    /*$('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });*/

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict

function changeTitlespread(val) {
    document.getElementById('sharetitle-spread').value = val;
    return true;
}

function changeTitleside(val) {
    document.getElementById('sharetitle-side').value = val;
    return true;
}

function showLanguages(){
    var dropdownList = document.getElementById("myDropdown");
    dropdownList.classList.toggle("show");
}

var language = document.querySelector('.language');
language.addEventListener('click', showLanguages);

