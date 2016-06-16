var mongoose = require('mongoose');

var settingsSchema = mongoose.Schema({
    'keyNote': String,
    'dataSource': String,
    'dataType': String,
    'comment': String
});

module.exports = mongoose.model('prog272_markley_setting', settingsSchema);
