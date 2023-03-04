/* Sticky Navigation */
$(function() {
  
  var sticky = $('.sticky');
  var contentOffset;
  var nav_height;
  
  if (sticky.length) {
    
    if ( sticky.data('offset') ) {
      contentOffset = sticky.data('offset');
    }
    else {
      contentOffset = sticky.offset().top;
    }
    nav_height = sticky.height();
  }
  
  var scrollTop = $(window).scrollTop();
  var window_height = $(window).height();
  var doc_height = $(document).height();
  
  $(window).bind('resize', function() {
    scrollTop = $(window).scrollTop();
    window_height = $(window).height();
    doc_height = $(document).height();
    navHeight();
  });
  
  $(window).bind('scroll', function() {
    stickyNav();
  });
  
  function navHeight() {
    sticky.css('max-height', window_height + 'px');
  }
  
  function stickyNav() {
    scrollTop = $(window).scrollTop();
    if (scrollTop > contentOffset) {
      sticky.addClass('fixed');
    }
    else {
      sticky.removeClass('fixed');
    }
  }
  
});

$('document').ready(function() {
  var nav_height = 70;
  
  $("a[data-role='smoothscroll']").click(function(e) {
    e.preventDefault();
    
    var position = $($(this).attr("href")).offset().top - nav_height;
    
    $("body, html").animate({
      scrollTop: position
    }, 1000 );
    return false;
  });
});

$('document').ready(function() {
  // Back to top
  var backTop = $(".back-to-top");
  
  $(window).scroll(function() {
    if($(document).scrollTop() > 400) {
      backTop.css('visibility', 'visible');
    }
    else if($(document).scrollTop() < 400) {
      backTop.css('visibility', 'hidden');
    }
  });
  
  backTop.click(function() {
    $('html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
});


$('document').ready(function() {
  
  // Loader
  $(window).on('load', function() {
    $('.loader-container').fadeOut();
  });
  
  // Tooltips
  $('[data-toggle="tooltip"]').tooltip();
  
  // Popovers
  $('[data-toggle="popover"]').popover();
  
  // Page scroll animate
  new WOW().init();
});

$('document').ready(function() {
  $('#testimonials').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
  });
});


/*
 *  Counter
 *
 *  Require(" jquery.animateNumber.min.js ", " jquery.waypoints.min.js ")
 */
$(document).ready(function() {
  var counterInit = function() {
    if ( $('.counter-section').length > 0 ) {
      $('.counter-section').waypoint( function( direction ) {

        if( direction === 'down' && !$(this.element).hasClass('animated') ) {

          var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
          $('.number').each(function(){
            var $this = $(this),
              num = $this.data('number');
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step
              }, 5000
            );
          });
          
        }

      } , { offset: '95%' } );
    }

  }

  counterInit();
});

// darkmode
let darkMode = localStorage.getItem('darkMode')

const enableDarkMode=()=>{
  $(":root").css({"--light":"black" , "--dark":"white" , "--headingColor":"white" , "--textColor":"#aba9bb" })
  $("page-footer h5").css({"color":"white"})
  $(".btn").css({"color":"white"})
  $(".navBars").css({"color":"white"})
  $(".headerUp").css({"box-shadow":"0px 5px 10px #f5f5f540"})
  $(".nav-item a").css({"color":"white"})
  $(".card-blog").css({"border":"2px solid grey"})
  $(".card-blog").css({"box-shadow":"0px 2px 6px #f5f5f540"})
  $(".card").css({"box-shadow":"0px 2px 10px #C6B9C6"})
  
 
  $("#dmBtn i").addClass("fa-sun")
  $("#dmBtn i").removeClass("fa-moon")
  
  localStorage.setItem('darkMode',"enabled")
}
const disableDarkMode=()=>{
  $(":root").css({"--light":"white" , "--dark":"black" , "--headingColor":"black" , "--textColor":"#898798" })
  $("page-footer h5").css({"color":"white"})
  $(".btn").css({"color":""})
  $(".card-blog").css({"border":""})
  $(".navBars").css({"color":""})
  $(".headerUp").css({"box-shadow":"0px 5px 10px #48464640"})
  $(".nav-item a").css({"color":"black"})

  $(".card-blog").css({"box-shadow":"0 2px 6px #645f8829"})
  // $(".navbar-float").css({"box-shadow":"0 2px 6px #645f8829"})

  $("#dmBtn i").removeClass("fa-sun")
  $("#dmBtn i").addClass("fa-moon")

  localStorage.setItem('darkMode',null)
}

if(darkMode==="enabled"){
  enableDarkMode()
}
else{
  disableDarkMode()
}

$("#dmBtn").click(function() {
  darkMode=localStorage.getItem("darkMode")
  
  if(darkMode!=="enabled"){
    enableDarkMode();
  }
  else{
    disableDarkMode()
  }
});


// Javascript for Scroll to Top Button in the Home Page 
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(document.body.scrollTop > 20  || document.documentElement.scrollTop> 20) {
    mybutton.style.display = "block";
  }
  else{
    mybutton.style.display = "none"
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;

}