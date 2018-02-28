
 var imgLarge = false;

$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
       // $(this).fadeTo(5000, 1, function(){
          $(this).fadeIn(2000);
    });
    
    //Esemeny kivaltasok
      $("p").click();
    
    });

    
   /* $("img").on("click", function(){
        $(this).toggleClass("big-image");
    });*/

    $(".preview-holder img").on("click", function() {
        var div = $(this).parent().clone();
        div.addClass("big-image").on("click", function() {
          $(this).remove();
        });
        $(document.body).append(div);
      });