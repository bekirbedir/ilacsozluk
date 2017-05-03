var express = require('express');
var iletisimController = require('../controller/iletisimController');
var router = express.Router();
router.get('/', iletisimController.iletisimGet);
router.post('/', iletisimController.iletisimPost);

module.exports = router;