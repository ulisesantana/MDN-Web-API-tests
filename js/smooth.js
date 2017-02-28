/**
 * Created by ulisesantana on 28/02/17.
 */
$(document).on("click",".smooth",function(a){
  a.preventDefault();
  let b="#"+this.getAttribute("data-target");
  $("html, body").animate({scrollTop:$(b).offset().top},1e3)
});