(function(document, domready, saveAs, smoothScroll, downloadName) {
  'use strict';

  domready(function() {

    document.getElementById('js-download').addEventListener('click', function () {
      var blob = new Blob([document.documentElement.outerHTML], {type: 'text/html;charset=utf-8'});
      saveAs(blob, downloadName);
    });

    if(window.location.protocol.indexOf('http') === -1) {
      document.getElementsByClassName('js-download-trigger')[0].style.display = 'none';
    }

    smoothScroll.init({
      speed: 300
    });
  });
})(document, window.domready, window.saveAs, window.smoothScroll, window.downloadName);
