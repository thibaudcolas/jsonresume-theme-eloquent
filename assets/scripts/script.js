(function(document, domready, saveAs, smoothScroll) {
  'use strict';

  domready(function() {

    document.getElementById('js-download').addEventListener('click', function () {
      var blob = new Blob([document.documentElement.outerHTML], {type: 'text/html;charset=utf-8'});
      saveAs(blob, 'resume.html');
    });

    smoothScroll.init({
      speed: 300
    });
  });
})(document, window.domready, window.saveAs, window.smoothScroll);
