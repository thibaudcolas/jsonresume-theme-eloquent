(function(document, saveAs, smoothScroll, emailScramble, downloadName) {
  'use strict';

  if (window.location.protocol.indexOf('http') !== -1) {
    // Created before download in order to be JS-modifications-free.
    var blob = new Blob(['<!doctype html>' + document.documentElement.outerHTML], {type: 'text/html;charset=utf-8'});
    document.getElementsByClassName('js-download-trigger')[0].style.display = 'block';

    document.getElementById('js-download').addEventListener('click', function () {
      saveAs(blob, downloadName);
    });
  }

  var decode = emailScramble.decoder(12);

  var linkText = document.querySelectorAll('[data-scrambled-email]')[0];
  var mailtoLink = document.querySelectorAll('[data-scrambled-mailto]')[0];
  var encodedMail = mailtoLink.href.replace('mailto:', '');
  mailtoLink.href = 'mailto:' + decode(encodedMail);
  linkText.innerHTML = decode(encodedMail).split('@').join('@<span style="display:none;">foo</span>');


  smoothScroll.init({
    speed: 300
  });
})(document, window.saveAs, window.smoothScroll, window.emailScramble, window.downloadName);
