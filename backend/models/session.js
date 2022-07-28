var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Session = new Schema({
	time: String,
	duration: String,
	course: [String],

});

const Session = new mongoose.model('Session', Session);

module.exports = Session;