var Handlebars = require("handlebars");
var encode = require("email-scramble").encode;
const dayjs = require("dayjs");
var duration = require("dayjs/plugin/duration");
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
dayjs.extend(duration);

var parseText = function (text, pattern, replacement, lowercase) {
  text = Handlebars.escapeExpression(text || "");
  text = text.replace(pattern, replacement);
  text = !!lowercase ? text.toLowerCase() : text;
  return new Handlebars.SafeString(text);
};

var formatDate = function (date, format) {
  date = Handlebars.escapeExpression(date || "");
  date = dayjs(date).format(format);
  return new Handlebars.SafeString(date);
};

module.exports = {
  nl2br: function (content) {
    return parseText(content, /\n/g, "<br>");
  },
  sanitizePhone: function (phone) {
    return parseText(phone, /[-\s]/g, "", true);
  },
  sanitizeURL: function (url) {
    return parseText(url, /http?s:\/\//g, "", true);
  },
  normalizeNetwork: function (network) {
    return parseText(network, /\s/g, "", true);
  },
  colorNetwork: function (network) {
    const colors = {
      github: "#454545",
      twitter: "#33ccff",
      linkedin: "#007bb6",
      skype: "#12a5f4",
      stackoverflow: "#8e8e92",
      soundcloud: "#e8822d",
      pinterest: "#bd091f",
      vimeo: "#17b3e8",
      behance: "#2c98cf",
      codepen: "#1c1c1c",
      foursquare: "#fa4778",
      reddit: "#545454",
      spotify: "#acd200",
      dribbble: "#ce366f",
      facebook: "#4b6daa",
      angellist: "#000000",
      bitbucket: "#205081",
    };
    const networkSlug = parseText(network, /\s/g, "", true);
    return colors[networkSlug];
  },
  normalizeName: function (name) {
    return parseText(name, /\s/g, "", true);
  },
  obfuscateText: function (html) {
    html = Handlebars.escapeExpression(html || "");
    html =
      html.substring(0, 4) + "<span hidden>1337</span>" + html.substring(4);
    return new Handlebars.SafeString(html);
  },
  scrambleText: function (text) {
    text = Handlebars.escapeExpression(text || "");
    text = encode(text);
    return new Handlebars.SafeString(text);
  },
  scramblePhone: function (phone) {
    return encode(parseText(phone, /[-\s]/g, "", true));
  },
  formatMMMMYYYY: function (date) {
    return formatDate(date, "MMMM YYYY");
  },
  formatMMMDDYYYY: function (date) {
    return formatDate(date, "MMM DD, YYYY");
  },
  formatYYYY: function (date) {
    return formatDate(date, "YYYY");
  },
  humaneDuration: function (start, end) {
    start = Handlebars.escapeExpression(start || "");
    return new Handlebars.SafeString(
      dayjs.duration(dayjs(end).diff(dayjs(start))).humanize()
    );
  },
  mapURL: function (location) {
    var googleMaps = "https://www.google.com/maps?q=";
    var fields = [
      Handlebars.escapeExpression(location.address || ""),
      Handlebars.escapeExpression(location.postalCode || ""),
      Handlebars.escapeExpression(location.city || ""),
      Handlebars.escapeExpression(location.region || ""),
      Handlebars.escapeExpression(location.countryCode || ""),
    ];
    return new Handlebars.SafeString(
      googleMaps + encodeURIComponent(fields.join(" ").replace(/\s+/g, " "))
    );
  },
  itemID: function (category, index, length) {
    category = Handlebars.escapeExpression(category || "");
    index = Handlebars.escapeExpression(length - index);
    return new Handlebars.SafeString(category + "-" + index);
  },
  truncate: function (text, length) {
    text = Handlebars.escapeExpression(text || "");
    text = text.substring(0, length);
    return new Handlebars.SafeString(text);
  },
};
