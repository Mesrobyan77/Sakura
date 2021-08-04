 jQuery(document).ready(function($){

   let counter = 0; 
      
   function homeTransform() {
      if(counter % 2 == 0) {
         $(".middle-in").css('display','none')
         $(".hamburger").addClass("close")
         $(".menu").css("display","flex")
      }else{
         $(".middle-in").css('display','flex')
         $(".hamburger").removeClass("close")
         $(".menu").css("display","none")
      }
      counter++;
   }

   function aboutTransform() {
      if(counter % 2 == 0) {
         $(".about").css('display','none')
         $(".hamburger").addClass("close")
         $(".about-menu").css("display","flex")
      }else {
         $(".about").css('display','block')
         $(".hamburger").removeClass("close")
         $(".about-menu").css("display","none")
      }
      counter++
   }

   $(".circle-right").click(function(){
      homeTransform()
   })
   
   $(".about-circle-right").click(function(){
      aboutTransform()
   })

 })