(function() {
  
  $(document).ready(function() {
    // init 
    infinityScroll.getContent();  
  });

  $(window).scroll(function() {
    // debugger - comment out next line if not needed
    document.getElementById('debug').innerText = "Fired if == " + ($(window).scrollTop() + $(window).height()) +" && "+ infinityScroll.getDocHeight();
    
    // check if user has scrolled to the bottom of the page
    if ($(window).scrollTop() + $(window).height() == infinityScroll.getDocHeight()) {
      // only fetch the data after the timeout has expired. This stops the event firing too rapidly and returning more than you need. 
      if (infinityScroll.config.working == false) {
        infinityScroll.config.working = true;
        infinityScroll.getContent();
      }
    }
  });

})();