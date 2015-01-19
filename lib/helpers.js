var Handlebars = require('handlebars');
var moment = require('moment');
var encode = require('email-scramble').encode;

var parseText = function(text, pattern, replacement, lowercase) {
  text = Handlebars.escapeExpression(text || '');
  text = text.replace(pattern, replacement);
  text = !!lowercase ? text.toLowerCase() : text;
  return new Handlebars.SafeString(text);
};

var formatDate = function(date, format) {
  date = Handlebars.escapeExpression(date || '');
  date = moment(new Date((date))).format(format);
  return new Handlebars.SafeString(date);
};

module.exports = {
  nl2br: function(content) {
    return parseText(content, /\n/g, '<br>');
  },
  sanitizePhone: function(phone) {
    return parseText(phone, /[-\s]/g, '', true);
  },
  sanitizeURL: function(url) {
    return parseText(url, /http?s:\/\//g, '', true);
  },
  normalizeNetwork: function(network) {
    return parseText(network, /\s/g, '', true);
  },
  normalizeName: function(name) {
    return parseText(name, /\s/g, '', true);
  },
  scrambleEmail: function(email) {
    email = Handlebars.escapeExpression(email || '');
    email = encode(email);
    return new Handlebars.SafeString(email);
  },
  formatMMMMYYYY: function(date) {
    return formatDate(date, 'MMMM YYYY');
  },
  formatMMMDDYYYY: function(date) {
    return formatDate(date, 'MMM DD, YYYY');
  },
  formatYYYY: function(date) {
    return formatDate(date, 'YYYY');
  },
  humaneDuration: function(start, end) {
    start = Handlebars.escapeExpression(start || '');
    var endTimestamp = end ? new Date(end).getTime() : Date.now();
    var duration = endTimestamp - (new Date(start).getTime());
    return new Handlebars.SafeString(moment.duration(duration).humanize());
  },
  mapURL: function(location) {
    var googleMaps = 'https://www.google.com/maps?q=';
    var fields = [
      Handlebars.escapeExpression(location.address || ''),
      Handlebars.escapeExpression(location.postalCode || ''),
      Handlebars.escapeExpression(location.city || ''),
      Handlebars.escapeExpression(location.region || ''),
      Handlebars.escapeExpression(location.countryCode || '')
    ];
    return new Handlebars.SafeString(googleMaps + encodeURIComponent(fields.join(' ').replace(/\s/g, ' ')));
  },
  itemID: function(category, index) {
    category = Handlebars.escapeExpression(category || '');
    index = Handlebars.escapeExpression(index + 1 || 1);
    return new Handlebars.SafeString(category + '-' + index);
  }
};
