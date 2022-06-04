const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	phoneNo: {
		type: Number,
	},
	address: {
		type: String,
	},
	pincode: {
		type: Number,
	},
	country: {
		type: String,
	},
	state: {
		type: String,
	},
	isAdmin: {
		type: Boolean,
		default: false
	}
},{timestamps:true});

const User = mongoose.model('User', UserSchema);

module.exports = User;