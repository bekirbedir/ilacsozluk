var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chatSchema = new Schema({
    nick: String,
    msg: String,
    kime: { type: String, default: 'all' },
    created: { type: Date, default: Date.now }
}, { collection: 'messages' });
var chat = mongoose.model('chat', chatSchema);
module.exports = chat;