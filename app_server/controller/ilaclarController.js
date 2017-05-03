var ilac = require('../models/ilac');

module.exports.index = function(req, res) {
        res.render('ilacekle');
    }
    /*
    module.exports.indexPost = function(req, res) {
        console.log("login indexPost Çağırıldı");
        console.log(req.body);
        res.render('login', {
            username: req.body.username,
            password: req.body.password
        });

    }
    */

module.exports.ilacekleGet = function(req, res) {
    console.log('ilacekle');
    res.render('ilacekle');
}
module.exports.ilaceklePost = function(req, res) {
    //console.log('ilacekle Post sayfasi çağırıldı');
    console.log(req.body.resimUrl);
    var yeniilac = new ilac({
        ad: req.body.ad,
        firma: req.body.firma,
        kullanim: req.body.kullanim,
        yanetkiler: req.body.yanetkiler,
        resimUrl: req.body.resimUrl
    });



    yeniilac.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Kayıt Başarılı');
            res.redirect('/ilac/ilaclar')
        }
    })

}

module.exports.ilaclarGet = function(req, res) {
    ilac.find(function(err, results) {
        res.render('ilaclar', { ilaclar: results });
    })
}
module.exports.ilacayrinti = function(req, res) {
    ilac.find({ ad: req.params.ilacAdi }, function(err, results) {
        res.render('ilacayrinti', { ilaclar: results });
    })
}

module.exports.ilacsilGet = function(req, res) {
    console.log('Sil Çağırıldı');
    console.log(req.params.ilacAdi);
    ilac.findOneAndRemove({ ad: req.params.ilacAdi }, function(err) {
        if (err) {
            console.log('Silinemedi');

        } else {
            res.redirect('/ilac/ilaclar');
        }
    })
}