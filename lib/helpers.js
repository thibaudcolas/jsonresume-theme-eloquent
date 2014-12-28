var Handlebars = require('handlebars');
var moment = require('moment');
var _ = require('lodash');

module.exports = {
  nl2br: function(content) {
    content = content || '';
    var html = (content).replace(/\n/g, '<br>');
    return new Handlebars.SafeString(html);
  },
  formatMMMMYYYY: function(date) {
    date = date || '';
    var html = moment(new Date((date))).format('MMMM YYYY');
    return new Handlebars.SafeString(html);
  },
  formatMMMDDYYYY: function(date) {
    date = date || '';
    var html = moment(new Date((date))).format('MMM DD, YYYY');
    return new Handlebars.SafeString(html);
  },
  formatYYYY: function(date) {
    date = date || '';
    var html = moment(new Date((date))).format('YYYY');
    return new Handlebars.SafeString(html);
  },
  mapURL: function(location) {
    var googleMaps = 'https://www.google.com/maps?q=';
    var fields = [
      location.address || '',
      location.postalCode || '',
      location.city || '',
      location.region || '',
      location.countryCode || ''
    ];
    return new Handlebars.SafeString(googleMaps + encodeURIComponent(fields.join(' ').replace(/\s/g, ' ')));
  },
  sanitizePhone: function(phone) {
    phone = phone || '';
    var html = (phone).replace(/[-\s]/g, '');
    return new Handlebars.SafeString(html);
  },
  sanitizeURL: function(url) {
    url = url || '';
    var html = (url).replace(/http?s:\/\//g, '');
    return new Handlebars.SafeString(html);
  },
  humaneDuration: function(start, end) {
    start = start || '';
    var endTimestamp = end ? new Date(end).getTime() : Date.now();
    var duration = endTimestamp - (new Date(start).getTime());
    return new Handlebars.SafeString(moment.duration(duration).humanize());
  }
};
