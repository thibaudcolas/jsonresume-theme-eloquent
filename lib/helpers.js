var Handlebars = require('handlebars');
var moment = require('moment');

module.exports = {
  nl2br: function(value) {
    value = value || '';
    var html = (value).replace(/\n/g, '<br>');
    return new Handlebars.SafeString(html);
  },
  formatMMMMYYYY: function(value) {
    value = value || '';
    var html = moment(new Date((value))).format('MMMM YYYY');
    return new Handlebars.SafeString(html);
  },
  formatMMMDDYYYY: function(value) {
    value = value || '';
    var html = moment(new Date((value))).format('MMM DD, YYYY');
    return new Handlebars.SafeString(html);
  },
  sanitizePhone: function(value) {
    value = value || '';
    var html = (value).replace(/[-\s]/g, '');
    return new Handlebars.SafeString(html);
  },
  sanitizeURL: function(value) {
    value = value || '';
    var html = (value).replace(/http?s:\/\//g, '');
    return new Handlebars.SafeString(html);
  },
};
