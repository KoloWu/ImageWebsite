var isScroll = {
    init: function (_el) {
      this.start(_el);
      $(window).on('scroll', function () {
        isScroll.start(_el)
      });
    },
    start: function (_el) {
      var self = this;
      $(_el).each(function () {
        var _self = $(this);
        var isScrollTop = $(window).scrollTop();
        var isWindowHeiget = $(window).height() * 0.9;
        var _class = $(this).data('animation');
        if (isScrollTop + isWindowHeiget > $(this).offset().top) {
          _self.addClass(_class);
        }
      });
    }
  }
  $(document).ready(function () {
           isScroll.init('.anima');
       });