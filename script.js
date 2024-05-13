
$(document).ready(function() {
    var $tickerWrapper = $(".tickerwrapper");
    var $list = $tickerWrapper.find(".list");
    var $listClone = $list.clone();
    $list.append($listClone.html());  // Extend the list by adding its clone at the end

    // Calculate the total width of the original list
    function getListWidth() {
        return $list.get(0).scrollWidth;
    }

    // Function to reset and restart the GSAP animation
    function resetAnimation() {
        var listWidth = getListWidth();  // Get the accurate width of the list

        // Animation using GSAP
        gsap.set($list, { x: 0 });
        gsap.to($list, {
            x: -listWidth,
            ease: "linear",  // Consistent scrolling
            duration: 300,  // Speed
            repeat: -1,  // Infinite loops
            overwrite: 'auto'  // Ensure new animation replaces any existing animation
        });
    }

    // Initialize the animation
    resetAnimation();

    // Adjust the animation if the window is resized
    $(window).resize(function() {
        resetAnimation();  // Reset animation on window resize
    });


// color change (three color patterns)
var colorState = 0;

$("#changeColorButton").click(function() {
    if (colorState === 0) {
        // First color scheme
        $("body").css("background-color", "#A48593");
        $(".tickerwrapper").css("background-color", "#A48593");
        $(".education-section h1").css("color", "#5BB88E");
        var buttonColor = "#5BB88E";
        $(".get-in-touch-btn, .tool-btn").css("background-color", buttonColor);
        $(".get-in-touch-btn, .skill-btn, .tool-btn").css("color", "#23201F");
        colorState = 1; // Move to next color state
    } else if (colorState === 1) {
        // Second color scheme
        $("body").css("background-color", "#688763");
        $(".tickerwrapper").css("background-color", "#688763");
        $(".education-section h1").css("color", "#EAD14F");
        var buttonColor = "#EAD14F";
        $(".get-in-touch-btn, .tool-btn").css("background-color", buttonColor);
        $(".get-in-touch-btn, .skill-btn, .tool-btn").css("color", "#23201F");
        colorState = 2; // Move to next color state
    } else {
        // Revert to original colors
        $("body").css("background-color", "#859BA4");
        $(".tickerwrapper").css("background-color", "#859BA4");
        $(".education-section h1").css("color", "#EB7442");
        var buttonColor = "#EB7442";
        $(".get-in-touch-btn, .tool-btn").css("background-color", buttonColor);
        $(".get-in-touch-btn, .skill-btn, .tool-btn").css("color", "#23201F");
        colorState = 0; // Reset to initial state
    }
});


//change color by scrolling 
$(document).ready(function() {
    var header = $('.header');
    var newSection = $('.education-section');
    var section3 = $('.strength');
    var newSectionOffset = newSection.offset().top;
    var section3Offset = section3.offset().top;

    $(window).scroll(function() {
        var currentScroll = $(window).scrollTop() + header.height();

        if (currentScroll > section3Offset) {
            header.addClass('dark-nav-section3'); 
        } else if (currentScroll > newSectionOffset) {
            header.addClass('dark-nav');
            header.removeClass('dark-nav-section3'); 
        } else {
            header.removeClass('dark-nav');
            header.removeClass('dark-nav-section3');
        }
    });
});

});
