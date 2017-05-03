var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var kullaniciSchema = new Schema({
    ad: String,
    soyad: String,
    email: String,
    kullaniciAdi: { type: String, require: true, unique: true },
    sifre: { type: String, required: true }
}, { collection: 'kullanicilar' });
var kullanici = mongoose.model('kullanici', kullaniciSchema);
module.exports = kullanici;