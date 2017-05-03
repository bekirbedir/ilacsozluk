var expess = require('express');
var router = expess.Router();
var homecont = require('../controller/homeController');
router.get('/',homecont.index);
router.get('/giris',homecont.login);

module.exports= router;