var kullanici = require('../models/kullanici');

module.exports.index = function(req, res) {
    res.render('login');
}

module.exports.indexPost = function(req, res) {
    console.log("login indexPost Çağırıldı");
    console.log(req.body);
    res.render('login', {
        username: req.body.username,
        password: req.body.password
    });

}
module.exports.signUpGet = function(req, res) {
    console.log('signup sayfasi çağırıldı');
    res.render('signup');
}
module.exports.signUpPost = function(req, res) {
    console.log('signupPost sayfasi çağırıldı');
    var yeniKullanici = new kullanici({
        ad: req.body.ad,
        soyad: req.body.soyad,
        email: req.body.email,
        kullaniciAdi: req.body.kullaniciAdi,
        sifre: req.body.sifre
    });
    yeniKullanici.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Kayıt Başarılı');
            res.redirect('/login/kullanicilar')
        }
    })
    console.log(yeniKullanici);
}

module.exports.kullaniciListesi = function(req, res) {
    kullanici.find(function(err, results) {
        res.render('kullanicilar', { kullanicilar: results });
    })
}

module.exports.kullaniciSil = function(req, res) {
    console.log('Sil Çağırıldı');
    console.log(req.params.kullaniciAdi);
    kullanici.findOneAndRemove({ kullaniciAdi: req.params.kullaniciAdi }, function(err) {
        if (err) {
            console.log('Silinemedi');

        } else {
            res.redirect('/login/kullanicilar');
        }
    })
}