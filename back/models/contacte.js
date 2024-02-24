let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    num: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);
 