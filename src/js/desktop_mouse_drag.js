$(function() {
  var widget;
  var X;
  var Y;
  var Xdest;
  var Ydest;
  var ismousedown = false;
  $(document).on({
    mousedown: function(event) {
      if ($(event.target).attr('class') == 'dtmouse') {
        X = event.pageX;
        Y = event.pageY;
        $('body').append('<div class="widget" style="top:' + Y + 'px; left: ' + X + 'px;"></div>');
        widget = $('.widget').last();
        ismousedown = true;
      }
    },
    mousemove: function(event) {
      if (ismousedown == true) {
        Xdest = event.pageX;
        Ydest = event.pageY;
        widget.width(Math.abs(Xdest - X));
        widget.height(Math.abs(Ydest - Y));
        widget.css({
          'width': Math.abs(Xdest - X) + '!important',
          'height': Math.abs(Ydest - Y) + '!important',
          'top': Math.min(Y,Ydest),
          'left': Math.min(X, Xdest),
          'display': 'block',
          'border': '2px dashed #ccc'
        });
      }
    },
    mouseup: function(event) {
      ismousedown = false;
      $(".widget").remove();
}
  });

});