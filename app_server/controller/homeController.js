/*
module.exports =function()
{
    console.log('ElektronikController Çağırıldı');
} 
kurucu fonksiyon örneği
 */

var ilaclar = require('../models/ilac');
var path = require('path');
var kisiler = ['Ahmet', 'Mehmet', 'Veli', 'Osman'];
var data_json = {
    mesaj: 'Controllerda Renderda gelen Json Veriler',
    kisiler: kisiler
}

module.exports.index = function(req, res) {
    ilaclar.find(function(err, results) {
        res.render('home', { ilaclar: results });

    })
}
module.exports.login = function(req, res) {
    // res.sendFile(path.join(__dirname,'../../login.html'));
    res.render('bootstrap', data_json);
}