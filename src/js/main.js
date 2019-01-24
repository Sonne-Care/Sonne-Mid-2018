function formstone(){
  $('.background').background();
  $('.carousel').carousel();
  $('.swap').swap();  
  //$("input[type=checkbox], input[type=radio]").checkbox();
  $(".sticky").sticky();
  //$(".lightbox").lightbox();
  $('.benefit-item').swap({
    collapse: true
  });  
  $(".checkpoint").checkpoint({
    reverse: true
  });
  $(".lightbox").lightbox({
    mobile: true,
    viewer: false
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

function masonry(){
  var $grid = $('.faq-grid').masonry({
  itemSelector: '.faq-block',
  olumnWidth: '.faq-block',
  });

  $grid.on( 'click', '.faq-block', function() {
  // change size of item via class
  $( this ).toggleClass('faq-block--gigante');
  // trigger layout
  $grid.masonry();
  });

  $grid.on( 'layoutComplete', function( event, laidOutItems ) {
  console.log( 'Masonry layout complete with ' + laidOutItems.length + ' items' );
  });
}

function init(){
  formstone();
  headerScroll();
  instagram();
  masonry();
  //const tilt = $('.js-tilt').tilt({
  //  maxTilt: 3,
  //  scale: 1.01,
  //  //glare: true
  //});
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

$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results==null){
    return null;
  }
  else{
    return decodeURI(results[1]) || 0;
  }
}

init();