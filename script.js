


$('.boomrang').mousemove(function(e){

 var moveX= (e.pageX * -1/80);
 var moveY= (e.pageY * -1/90);
  $(this).css('background-position', moveX +'px ' + moveY + 'px ')

  var moveb= (e.pageX * 1/80);
  var movea= (e.pageY * -1/160);
   $('.boomrangsh').css('background-position', moveb +'px ' + movea + 'px ')



})



$(window).scroll(function(){
var scrollval = $(this).scrollTop();    // It will return scroll value
$(".allanim").css("transform",'translate(0px,-'+scrollval/6+'px)');
$(".boomrang").css("transform",'rotate(-'+scrollval/24+'deg)');
$(".boomrangsh").css("transform",'rotate(-'+scrollval/15+'deg)');
$(".x1").css("transform",'translate(0px,-'+scrollval/6+'%)');
$(".x2").css("transform",'rotate(-'+scrollval/7+'deg)');
$(".circle01").css("transform",'translate(0px,-'+scrollval/5+'%)');
$(".circle02").css("transform",'translate(0px,-'+scrollval/4+'%)');
$(".circle03").css("transform",'translate(0px,-'+scrollval/3+'%)');
$(".circle04").css("transform",'translate(0px,-'+scrollval/4+'%)');


});



$(document).ready(function(){
var clicks = 0;
    $('.iconask').click(function(){
      if(clicks == 0){
        $(".ask1").animate(
          {height: '180px'}
          ,200);


      $('.iconask').css( {'transform': 'rotate(180deg)'});
        clicks++;
      }

      else{
        $(".ask1").animate(
          {height: '70px'}
          ,200);

        $('.iconask').css( {'transform': 'rotate(0deg)'});


        clicks--;
      }
    });


var clicks2 = 0;

    $('.iconask2').click(function(){
      if(clicks2 == 0){
        $(".ask2").animate(
          {height: '180px'}
          ,200);


      $('.iconask2').css( {'transform': 'rotate(180deg)'});
        clicks2++;
      }

      else{
        $(".ask2").animate(
          {height: '70px'}
          ,200);

        $('.iconask2').css( {'transform': 'rotate(0deg)'});


        clicks2--;
      }
    });


var clicks3 = 0;

    $('.iconask3').click(function(){
      if(clicks3 == 0){
        $(".ask3").animate(
          {height: '180px'}
          ,200);


      $('.iconask3').css( {'transform': 'rotate(180deg)'});
        clicks3++;
      }

      else{
        $(".ask3").animate(
          {height: '70px'}
          ,200);

        $('.iconask3').css( {'transform': 'rotate(0deg)'});


        clicks3--;
      }
    });

    var clicks4 = 0;


    $('.iconask4').click(function(){
      if(clicks4 == 0){
        $(".ask4").animate(
          {height: '180px'}
          ,200);


      $('.iconask4').css( {'transform': 'rotate(180deg)'});
        clicks4++;
      }

      else{
        $(".ask4").animate(
          {height: '70px'}
          ,200);

        $('.iconask4').css( {'transform': 'rotate(0deg)'});


        clicks4--;
      }
    });


var clicks5 = 0;
    $('.iconask5').click(function(){
      if(clicks5 == 0){
        $(".ask5").animate(
          {height: '180px'}
          ,200);


      $('.iconask5').css( {'transform': 'rotate(180deg)'});
        clicks5++;
      }

      else{
        $(".ask5").animate(
          {height: '70px'}
          ,200);

        $('.iconask5').css( {'transform': 'rotate(0deg)'});


        clicks5--;
      }
    });

var clicks6 = 0;
    $('.iconask6').click(function(){
      if(clicks6 == 0){
        $(".ask6").animate(
          {height: '180px'}
          ,200);


      $('.iconask6').css( {'transform': 'rotate(180deg)'});
        clicks6++;
      }

      else{
        $(".ask6").animate(
          {height: '70px'}
          ,200);

        $('.iconask6').css( {'transform': 'rotate(0deg)'});


        clicks6--;
      }
    });


var clicks7 = 0;
    $('.iconask7').click(function(){
      if(clicks7 == 0){
        $(".ask7").animate(
          {height: '180px'}
          ,200);


      $('.iconask7').css( {'transform': 'rotate(180deg)'});
        clicks7++;
      }

      else{
        $(".ask7").animate(
          {height: '70px'}
          ,200);

        $('.iconask7').css( {'transform': 'rotate(0deg)'});


        clicks7--;
      }
    });


var clicks8 = 0;
    $('.iconask8').click(function(){
      if(clicks8 == 0){
        $(".ask8").animate(
          {height: '180px'}
          ,200);


      $('.iconask8').css( {'transform': 'rotate(180deg)'});
        clicks8++;
      }

      else{
        $(".ask8").animate(
          {height: '70px'}
          ,200);

        $('.iconask8').css( {'transform': 'rotate(0deg)'});


        clicks8--;
      }
    });
});




$(document).ready(function() {
    $(window).scroll(function(){


      $(".image-bg").each( function(i){

            var bottom_of_element = $('.aboutus').offset().top +  $('.tw').outerHeight();
            var bottom_of_element2 = $('.table').offset().top +  $('.titleab').outerHeight();
            var bottom_of_element3 = $('.ask8').offset().top +  $('.ask7').outerHeight();

            var bottom_of_window = $(window).scrollTop() + $(window).height();


            if( bottom_of_window > bottom_of_element ){
                $(this).animate({opacity:1, left:'0px'},2000);
                $(".titleab").animate({opacity:1, left:'0px'},1500);
                $(".textab").animate({opacity:0.3, 'margin-top':'26px'},1500);
                $(".line").animate({width:'50px'},1500);
            }
            if( bottom_of_window > bottom_of_element2 ){
            $(".table").animate({opacity:1, bottom:'0px'},750);
              $(".asktext").animate({opacity:1},750);

            }


      });

    });

    var a = 0;
$(window).scroll(function() {

  var oTop = $('.numbers').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.numtxt').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({countNum: $this.text()}).animate({
          countNum: countTo
        },{
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },complete: function() {
            $this.text(this.countNum);}
        });
    });
    a = 1;
  }

});

});
