const rot = (charRot, numRot, str) => {
  var numbers = "0123456789";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var regexNumber = /[0-9]/;
  var regexLowercase = /[a-z]/;
  var regexUppercase = /[A-Z]/;

  str = String(str);

  if (charRot < 0) {
    charRot += 26;
  }
  if (numRot < 0) {
    numRot += 10;
  }
  var length = str.length; // note: no need to account for astral symbols
  var index = -1;
  var result = "";
  var character;
  var currentPosition;
  var shiftedPosition;
  while (++index < length) {
    character = str.charAt(index);
    if (regexNumber.test(character)) {
      currentPosition = numbers.indexOf(character);
      shiftedPosition = (currentPosition + numRot) % 10;
      result += numbers.charAt(shiftedPosition);
    } else if (regexLowercase.test(character)) {
      currentPosition = lowercase.indexOf(character);
      shiftedPosition = (currentPosition + charRot) % 26;
      result += lowercase.charAt(shiftedPosition);
    } else if (regexUppercase.test(character)) {
      currentPosition = uppercase.indexOf(character);
      shiftedPosition = (currentPosition + charRot) % 26;
      result += uppercase.charAt(shiftedPosition);
    } else {
      result += character;
    }
  }
  return result;
};

const isServedOnline = window.location.protocol.startsWith("http");

document.querySelector("[data-download-resume]").hidden = !isServedOnline;

const mailtoLink = document.querySelector("[data-scrambled-email-link]");
mailtoLink.href =
  "mailto:" + rot(13, 5, mailtoLink.href.replace("mailto:", ""));

const phoneLink = document.querySelector("[data-scrambled-phone-link]");
phoneLink.href = "tel:" + rot(13, 5, phoneLink.href.replace("tel:", ""));
