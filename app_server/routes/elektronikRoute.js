var expess = require('express');
var router = expess.Router();
var elektrikController = require('../controller/ElektronikController');

router.use(function(req,res,next){
req.kontrol=true;
next();
})

router.get('/bilg',elektrikController.bilg);
router.get('/',elektrikController.elektro);
module.exports= router;