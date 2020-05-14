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
    pwd: {
        type: String,
        // 加密
        // set(val) {
        //     return require('bcrypt').hashSync(val, 10)
        // }
    },
    createtime: {
        type: String
    },
});
module.exports = mongoose.model('user', userSchema, 'user')