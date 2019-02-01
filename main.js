(function() {
  
  $(document).ready(function() {
    // init 
    infinityScroll.getContent();  
  });

  $(window).scroll(function() {
    // debugger - comment out next line if not needed
    document.getElementById('debug').innerText = "Fired if == " + ($(window).scrollTop() + $(window).height()) +" && "+ infinityScroll.getDocHeight();
    
    infinityScroll.checkScrollPosition();

  });

})();