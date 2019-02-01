var infinityScroll = {

  config: {
    offset: 0,
    limit: 10,
    // jsonplaceholder is an working example endpoint.
    apiEndpoint: "https://jsonplaceholder.typicode.com/posts?_offset=",
    working: false,
  },

  getContent: function() {
    $.ajax({
      type: "GET",
      url: infinityScroll.setUrl(infinityScroll.config.offset, infinityScroll.config.limit),
      processData: false,
      contentType: "application/json",
      data: '',
      success: function(res) {
        //console.log(res);
        for (var i = 0; i < res.length; i++) {
          // replace title and body with json properties you need to extract from res
          $('body').append( infinityScroll.returnTemplate(res[i].title, res[i].body) );
        }
        // no need to run timeout on first use (page load)
        if(infinityScroll.config.offset !== 0){
          // stop ajax call firing too rapidly. 
          // Don't set too high. If the user scrolls to the bottom before the timeout expires, the scroll trigger won't fire. 
          setTimeout(function() {
            infinityScroll.config.working = false;
          }, 100)
        }
        infinityScroll.config.offset += 5;
      },
      error: function(res) {
        console.log("Something went wrong! - ", res);
      }
    });
  },

  // Get document height (with cross-browser compatibility)
  getDocHeight: function() {
    var D = document;
    return Math.max(
      D.body.scrollHeight, D.documentElement.scrollHeight,
      D.body.offsetHeight, D.documentElement.offsetHeight,
      D.body.clientHeight, D.documentElement.clientHeight
    );
  },

  // create the url endpoint with query parameters 
  setUrl: function(offset, limit) {
    return this.config.apiEndpoint + this.config.offset + "&_limit=" + this.config.limit
  },

  // template used for data fetched from api endpoint
  returnTemplate: function(title, body) {
    return "<div><h1>" + title + "</h1><p>Content: " + body + "</p></div>";
  },

}
