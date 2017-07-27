$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay: true
});

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});
 

$(function(){
    $("input[type='submit']").click(function(){
        var email = document.querySelector("input[type='email']");
        if (email.checkValidity() == true) {
            alert("Thank you for subscribing!");
            
            console.log('work');
            return false;
        }
    });
});

// Fix "Skip Link" Focus in Webkit
$(function() {
   $("a[href^='#']").not("a[href='#']").click(function() {
      $("#"+$(this).attr("href").slice(1)+"").focus();
   });
});