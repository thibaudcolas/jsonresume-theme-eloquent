import saveAs from 'browser-saveas';
import emailScramble from 'email-scramble';

const document = global.document;
const downloadName = global.downloadName;
const isServedOnline = global.location.protocol.indexOf('http') !== -1;

if (isServedOnline) {
    // Created before download in order to be JS-modifications-free.
    const blob = new Blob(
        ['<!doctype html>' + document.documentElement.outerHTML],
        {
            type: 'text/html;charset=utf-8',
        }
    );
    document.getElementsByClassName('js-download-trigger')[0].style.display =
        'block';

    document.getElementById('js-download').addEventListener('click', () => {
        saveAs(blob, downloadName);
    });
}

const mailtoLink = document.querySelectorAll('[data-scrambled-email-link]')[0];
mailtoLink.href =
    'mailto:' + emailScramble.decode(mailtoLink.href.replace('mailto:', ''));

const phoneLink = document.querySelectorAll('[data-scrambled-phone-link]')[0];
phoneLink.href =
    'tel:' + emailScramble.decode(phoneLink.href.replace('tel:', ''));
