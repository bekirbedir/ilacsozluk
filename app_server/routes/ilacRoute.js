var express = require('express');
var ilacController = require('../controller/ilaclarController');

var router = express.Router();
router.get('/', ilacController.ilacsilGet);
//router.post('/', ctrlLogin.indexPost);
//router.get('/signup', ctrlLogin.signUpGet);
//router.get('/kullanicilar', ctrlLogin.kullaniciListesi);
router.post('/ilacekle', ilacController.ilaceklePost);
router.get('/ilacekle', ilacController.ilacekleGet);
router.get('/ilaclar', ilacController.ilaclarGet);
router.delete('/ilacsil/:ilacAdi', ilacController.ilacsilGet);
router.get('/ilacsil/:ilacAdi', ilacController.ilacsilGet);
router.get('/ayrinti/:ilacAdi', ilacController.ilacayrinti);


module.exports = router;