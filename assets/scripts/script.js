(function(document, domready, FastClick, smoothScroll) {
  'use strict';

  domready(function() {
    FastClick.attach(document.body);

    smoothScroll.init({
      speed: 300
    });
  });
})(document, window.domready, window.FastClick, window.smoothScroll);
