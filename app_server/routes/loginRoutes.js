var express = require('express');
var ctrlLogin = require('../controller/loginController');

var router = express.Router();
router.get('/', ctrlLogin.index);
router.post('/', ctrlLogin.indexPost);
router.get('/signup', ctrlLogin.signUpGet);
router.get('/kullanicilar', ctrlLogin.kullaniciListesi);
router.post('/signup', ctrlLogin.signUpPost);
router.get('/kullaniciSil/:kullaniciAdi', ctrlLogin.kullaniciSil);


module.exports = router;