var express = require('express');
var apiController = require('../controller/apiController');
var router = express.Router();

router.get('/', apiController.index);
router.get('/ilaclar', apiController.ilaclarGet);
router.post('/ilaclar', apiController.ilaclarPost);
router.post('/ilacekle', apiController.ilacAdd);
router.delete('/delete/:ilacAdi', apiController.ilacdelete);
router.put('/update/:_id/:ilacAdi/:firma/:kullanim/:yanetkiler', apiController.ilacUpdate);

module.exports = router;