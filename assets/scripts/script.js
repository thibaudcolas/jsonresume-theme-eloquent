(function(document, saveAs, smoothScroll, emailScramble, downloadName) {
    'use strict';

    if (window.location.protocol.indexOf('http') !== -1) {
        // Created before download in order to be JS-modifications-free.
        var blob = new Blob(['<!doctype html>' + document.documentElement.outerHTML], {
            type: 'text/html;charset=utf-8'
        });
        document.getElementsByClassName('js-download-trigger')[0].style.display = 'block';

        document.getElementById('js-download').addEventListener('click', function() {
            saveAs(blob, downloadName);
        });
    }

    var mailtoLink = document.querySelectorAll('[data-scrambled-email-link]')[0];
    mailtoLink.href = 'mailto:' + emailScramble.decode(mailtoLink.href.replace('mailto:', ''));

    var phoneLink = document.querySelectorAll('[data-scrambled-phone-link]')[0];
    phoneLink.href = 'tel:' + emailScramble.decode(phoneLink.href.replace('tel:', ''));

    smoothScroll.init({
        speed: 300
    });
})(document, window.saveAs, window.smoothScroll, window.emailScramble, window.downloadName);
