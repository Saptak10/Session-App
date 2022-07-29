var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// const autoIncrement = require('mongoose-auto-increment');
const sessionSchema = new Schema({
	name: String,
	date: String,
	start: String,
	end: String,
	course: [String],
});

// autoIncrement.initialize(mongoose.connection);
const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;