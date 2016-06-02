// Color Variables
var primary1: "#2AAEBC";
var primary2: "#97FF7F";
var primary3: "#FF544F";
var primary4: "#FFFFFF";
var secondary1: "#000815";
var secondary2: "#383838";
var secondary3: "#B0BFBE";
var secondary4: "#EEEEDD";


// jQuery for page scrolling feature - requires jQuery Easing plugin
// $(function() {
//     $('a.page-scroll').bind('click', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 1500, 'easeInOutExpo');
//         event.preventDefault();
//     });
// });

// JQuery for navigation bar
$(window).load(function() {
  console.log($(window).height());
  // if ($(window).height() > 950) {
  //
  // }
  



   $(window).scroll(function(event) {
    if ($(window).scrollTop() >= $(window).height()) {
      console.log("success");
      $("nav").css("background-color", "black");
      // $(".nav li a:active").css("color", primary2);
    } else {
      $("nav").css("background-color", "transparent");
      // $(".nav li a").css("color", "white")
    }
    if ($(window).scrollTop() >= $(window).height()) {
      $(".nav li a.active").css("color", primary2);
    } else {
      $(".nav li a").css("color", "white");
    }
  });
});
