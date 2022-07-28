var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Session = new Schema({
	date: String,
	start: String,
	end: String,
	course: [String],
});

const Session = new mongoose.model('Session', Session);

module.exports = Session;