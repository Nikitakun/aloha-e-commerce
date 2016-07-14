'use strict';

(function() {
  var menu = new Menu();
  var slider = new Slider(pictures);
  var scrolling = function(targetCoord, motion) {
    var distance = window.pageYOffset - targetCoord;
    var velocity = distance * motion;
    window.requestAnimationFrame(function() {
      if (window.pageYOffset !== targetCoord) {
        document.body.scrollTop -= velocity;
        scrolling(targetCoord, motion);
      } else {
        return;
      }
    });
  };

  var ScrollArrow = function() {
    this._arrow = document.querySelector('.scroll-top');
    this._arrow.hidden = true;
    this._scrollInterval;

    this._arrow.addEventListener('click', function() {
      scrolling(0, 0.14);
    });


    window.addEventListener('scroll', function() {
      if (window.pageYOffset >= document.body.clientHeight * 1.5) {
        this._arrow.hidden = false;
      } else if (window.pageYOffset === 0) {
        this._arrow.hidden = true;
      }
    }.bind(this));
  };

  var scroll = new ScrollArrow();
})();
