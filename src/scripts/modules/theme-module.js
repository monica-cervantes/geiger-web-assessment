AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff

    $(function() { 
      var example = $('#bottomMenu').superfish({
        delay: 500,   
      });
      console.log("called");

      $('.destroy').on('click', function(){
        example.superfish('destroy');
      });

      $('.init').on('click', function(){
        example.superfish();
      });

      $('.open').on('click', function(){
        example.children('li:first').superfish('show');
      });

      $('.close').on('click', function(){
        example.children('li:first').superfish('hide');
      });
    })
    
    $(window).on("scroll", function() {
      var offset = $(window).scrollTop();

      if(offset >= 34) {
        $('header').addClass('on-scroll');
      } else {
        $('header').removeClass('on-scroll');
      }
    })
  };

  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
  };

  return {
    init: init,
  };
})();
