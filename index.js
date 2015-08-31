var fs = require('fs');
var Handlebars = require('handlebars');

var partials = require('./lib/partials');
var helpers = require('./lib/helpers');

Handlebars.registerPartial(partials);
Handlebars.registerHelper(helpers);

module.exports = {
    render: function(resume) {
        var template = fs.readFileSync(__dirname + '/resume.hbs', 'utf-8');

        return Handlebars.compile(template)({
            resume: resume,
        });
    },
};
