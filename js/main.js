// Menu Toggle
$(document).ready(function() {
  $(".menu-toggle").click(function() {
    $("nav").toggleClass("active");
    $("header h1").toggleClass("active");
    $("header h2").toggleClass("active");
    $("header .logo svg").toggleClass("hide_show");
  });
});

// Navigation Animation
$(document).ready(function() {
  $(window).on("scroll", function() {
    if ($(window).scrollTop()) {
      $("header").addClass("white");
    } else {
      $("header").removeClass("white");
    }
  });
});

// Scroll Top
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $(".scrollTop").fadeIn("slow");
    } else {
      $(".scrollTop").fadeOut("fast");
    }
  });
  //smooth scrolling to top
  $(".scrollTop").click(function() {
    $("html,body").animate({ scrollTop: 0 }, 500);
  });
});

// Bootstrap Tooltips
$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});
