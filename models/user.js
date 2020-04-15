var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userid: {
        type: Number,
        unique: true
    },
    username: {
        type: String
    },
    createtime: {
        type: String
    },
});
module.exports = mongoose.model('user', userSchema, 'user')