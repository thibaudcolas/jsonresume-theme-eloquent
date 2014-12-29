var Handlebars = require('handlebars');
var moment = require('moment');

var formatDate = function(date, format) {
  date = Handlebars.escapeExpression(date || '');
  var html = moment(new Date((date))).format(format);
  return new Handlebars.SafeString(html);
};

module.exports = {
  nl2br: function(content) {
    content = Handlebars.escapeExpression(content || '');
    var html = (content).replace(/\n/g, '<br>');
    return new Handlebars.SafeString(html);
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
  sanitizePhone: function(phone) {
    phone = Handlebars.escapeExpression(phone || '');
    var html = (phone).replace(/[-\s]/g, '');
    return new Handlebars.SafeString(html);
  },
  sanitizeURL: function(url) {
    url = Handlebars.escapeExpression(url || '');
    var html = (url).replace(/http?s:\/\//g, '');
    return new Handlebars.SafeString(html);
  },
  humaneDuration: function(start, end) {
    start = Handlebars.escapeExpression(start || '');
    var endTimestamp = end ? new Date(end).getTime() : Date.now();
    var duration = endTimestamp - (new Date(start).getTime());
    return new Handlebars.SafeString(moment.duration(duration).humanize());
  },
  normalizeNetwork: function(network) {
    network = Handlebars.escapeExpression(network || '');
    network = network.toLowerCase().replace(/\s/g, '');
    return new Handlebars.SafeString(network);
  }
};
