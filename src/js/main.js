function formstone(){
  $('.background').background();
  $('.carousel').carousel();
  $('.swap').swap();  
  $(".sticky").sticky();
  $(".lightbox").lightbox();
}

function headerScroll(){
  $(window).scroll(function() {   
    var scroll = $(window).scrollTop();
    if (scroll >= 60) {
      $("#header").addClass("active");
    } else { 
      $("#header").removeClass("active");
    }
  });
}

function init(){
  formstone();
  headerScroll();
  const tilt = $('.js-tilt').tilt({
    maxTilt: 3,
    scale: 1.01,
    //glare: true
  });
  feather.replace({
    'stroke-width': 1,
  });
}

init();