function formstone(){
  $('.background').background();
  $('.carousel').carousel();
  $('.swap').swap();  
  $(".sticky").sticky();
  //$(".lightbox").lightbox();
  $('.benefit-item').swap({
    collapse: true
  });  
  $(".checkpoint").checkpoint({
    reverse: true
  });
}

function instagram(){
  // 67437a0d2a934c4cba086cd5837bdce9
  jQuery.fn.spectragram.accessData = {
    accessToken: '1119864202.21af4c5.9ee0eee607f84393aa572f4236c64051'
  };
  $('.insta-feed-container').spectragram('getUserFeed',{
    max: 4,
    //size: "small",
    wrapEachWith: '<div class="fs-cell fs-lg-auto fs-md-auto fs-sm-half photo">'
  });
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
  instagram();
  const tilt = $('.js-tilt').tilt({
    maxTilt: 3,
    scale: 1.01,
    //glare: true
  });
  feather.replace({
    'stroke-width': 1,
  });
  var value = $.cookie('closesignup');
  if (value != 'true'){
    setTimeout(function(){
      $('.signup-close').click();  
    },1000);
  }
}

init();