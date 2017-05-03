var ilac = require('../models/ilac');

module.exports.index = function(req, res) {
    res.render('api');
}


module.exports.ilaclarGet = function(req, res) {
    ilac.find(function(err, results) {
        res.json(results);
    })
}
module.exports.ilaclarPost = function(req, res) {
    ilac.find(function(err, results) {
        res.json(results);
    })
}
module.exports.ilacdelete = function(req, res) {
    ilac.findOneAndRemove({ ad: req.params.ilacAdi }, function(err, results) {
        console.log(req.params.ilacAdi);
        if (err) {
            throw err;

        } else {
            res.json(results);
        }
    })
}

module.exports.ilacAdd = function(req, res) {
    console.log('burad');
    console.log(req.body.ilacAdi,
        req.body.firma,
        req.body.kullanim,
        req.body.yanetkiler,
        req.body.resimUrl)

    var yeniilac = new ilac({
        ad: req.body.ilacAdi,
        firma: req.body.firma,
        kullanim: req.body.kullanim,
        yanetkiler: req.body.yanetkiler,
        resimUrl: req.body.resimUrl
    });

    yeniilac.save(function(err) {
        if (err) {
            throw err;
            res.end('hata');
        } else {
            console.log('Kayıt Başarılı');
            res.json('basarili');
        }
    })


}


module.exports.ilacUpdate = function(req, res) {
    var _id = req.params._id;

    ilac.findOneAndUpdate({ _id: _id }, {
        ad: req.params.ilacAdi,
        firma: req.params.firma,
        kullanim: req.params.kullanim,
        yanetkiler: req.params.yanetkiler
    }, function(error, result) {
        if (error) {
            res.end('hata');

        } else {
            res.json(result);
        }
    })
}