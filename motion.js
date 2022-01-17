$(function(){
  //헤더 메뉴 부분
   $("nav>ul>li>ul").hide();
   $("nav>ul>li h2").click(function(){
      $("nav>ul>li ul").fadeOut()
      $(this).next().fadeIn();
   }); 

  //이벤트 바네이 갤러리 부분
    $(".btn>li").click( function(){  
       $(".event_visual_list").animate({ marginLeft: -500 * $(this).index() });
     } );
});