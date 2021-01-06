$('.resp__menu').click(function() {
  alert("J'ai pas encore fait le vrai menu et l'overlay donc clique pas sur le menu ! Des bisous");
});


$(function() {
  console.log( "ready!" );

  // init controller
  var controller = new ScrollMagic.Controller();

  // build scene
  new ScrollMagic.Scene({
                triggerElement: "#anim-down",
                triggerHook: 0.9, // show, when scrolled 10% into view
                
                offset: 50 // move trigger to center of element
              })
              .setClassToggle("#anim-down", "visible") // add class to reveal
              .addTo(controller);
              
  new ScrollMagic.Scene({
                triggerElement: "#l-reveal",
                triggerHook: 0.9, // show, when scrolled 10% into view
                
                offset: 50 // move trigger to center of element
              })
              .setClassToggle("#l-reveal", "visible") // add class to reveal
              .addTo(controller); 
              
  new ScrollMagic.Scene({
                triggerElement: "#t-reveal",
                triggerHook: 0.9, // show, when scrolled 10% into view
                
                offset: 50 // move trigger to center of element
              })
              .setClassToggle("#t-reveal", "visible") // add class to reveal
              .addTo(controller); 


});

$(function() {

  var rellax = new Rellax('.rellax-element', {
    breakpoints:[576, 768, 1201]
    });
    
  var rellax = new Rellax('.rellax-title',{
    center: true
    });
  

});



