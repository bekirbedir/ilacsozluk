var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var mongoDD = 'mongodb://localhost/NodeProje';
mongoose.connect(mongoDD, function(err, err) {
    if (err) {
        console.log('mongoose hatası:' + err);
    } else {
        console.log('Mongoose Bağlantısı Başarılı: ' + mongoDD);
    }
});