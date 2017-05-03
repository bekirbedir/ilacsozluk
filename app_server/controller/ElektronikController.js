/*
module.exports =function()
{
    console.log('ElektronikController Çağırıldı');
} 
kurucu fonksiyon örneği
 */
var path = require ('path');
var expess = require('express');
var router = expess.Router();
  var kisiler = ['Ahmet','Mehmet','Veli','Osman'];
  var data_json = 
  {
    mesaj:'Controllerda Renderda gelen Json Veriler',
      kisiler:kisiler
  }

module.exports.elektro = function(req,res){
console.log(req.kontrol);
  //res.sendFile(path.join(__dirname,'../../elektro.html'));
  res.render('elektronik');
}

module.exports.bilg = function(req,res){
  res.render('bilgisayar',data_json);
}
