var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var kullaniciSchema = new Schema({
    ad: String,
    firma: String,
    kullanim: String,
    yanEtkiler: String,
    resimUrl: String
}, { collection: 'ilaclar' });
var ilac = mongoose.model('ilac', kullaniciSchema);
module.exports = ilac;