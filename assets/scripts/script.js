(function(document, domready, saveAs, smoothScroll, downloadName) {
  'use strict';

  domready(function() {
    if(window.location.protocol.indexOf('http') !== -1) {
      // Created before download in order to be JS-modifications-free.
      var blob = new Blob(['<!doctype html>' + document.documentElement.outerHTML], {type: 'text/html;charset=utf-8'});
      document.getElementsByClassName('js-download-trigger')[0].style.display = 'block';
    }

    document.getElementById('js-download').addEventListener('click', function () {
      saveAs(blob, downloadName);
    });

    smoothScroll.init({
      speed: 300
    });
  });
})(document, window.domready, window.saveAs, window.smoothScroll, window.downloadName);
