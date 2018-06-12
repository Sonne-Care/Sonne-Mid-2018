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
  feather.replace({
    'stroke-width': 1,
  });
}

init();