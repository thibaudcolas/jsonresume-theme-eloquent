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

  var mailText = document.querySelectorAll('[data-scrambled-email-text]')[0];
  var mailtoLink = document.querySelectorAll('[data-scrambled-email-link]')[0];
  var decodedMail = emailScramble.decode(mailtoLink.href.replace('mailto:', ''));
  mailtoLink.href = 'mailto:' + decodedMail;
  mailText.innerHTML = decodedMail;
  mailText.setAttribute('itemprop', 'email');

  var phoneText = document.querySelectorAll('[data-scrambled-phone-text]')[0];
  var phoneLink = document.querySelectorAll('[data-scrambled-phone-link]')[0];
  phoneLink.href = 'tel:' + emailScramble.decode(phoneLink.href.replace('tel:', ''));
  phoneText.innerHTML = emailScramble.decode(phoneText.innerHTML);
  phoneText.setAttribute('itemprop', 'telephone');

  smoothScroll.init({
    speed: 300
  });
})(document, window.saveAs, window.smoothScroll, window.emailScramble, window.downloadName);
