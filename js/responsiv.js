$(function (){
    $('.nav_bar .nav_bar_item').mouseover(function (){
       $('.nav_bar .nav_bar_item .sub_menu:visible').hide();
       $(this).find('.sub_menu').show();
    });
    
    isNavBarHidden = true;
    $('.mobile_navs .menu_icon').click(function (){
      if(isNavBarHidden){
          $('.nav_bar').fadeIn("slow");
          isNavBarHidden = false;
      }
      else{
          $('.nav_bar').fadeOut("slow");
          isNavBarHidden = true;
      }
   });
});