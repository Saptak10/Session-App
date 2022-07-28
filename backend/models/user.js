var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
	  name: String,
    type: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;