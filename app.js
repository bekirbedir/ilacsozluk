var fs = require('fs');
var path = require('path');
var bodyparser = require('body-parser');
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
//mail servisi
var nodemailer = require('nodemailer');
var db = require('./app_server/models/db');

var app = express();
var server = require('http').createServer(app);

var io = require('socket.io')(server);
server.listen(3000);
//??????????????????????????????????????????

var chat = require('./app_server/models/chat');


io.sockets.on('connection', function(socket) {
    console.log('birisi bağlandi');
    var sorgu = chat.find({ $or: [{ "kime": 'data' }, { "kime": "all" }] });
    sorgu.sort('created').exec(function(err, results) {

        socket.emit('loadOldMsgs', results);
    })
    socket.on('sendMessage', function(data, callback) {
        var msg = data.trim();
        console.log(msg);


        var newMsg = new chat({ msg: msg, nick: socket.nickname });
        newMsg.save(function(err) {
            if (err) throw err;
            io.sockets.emit('newMessage', { "msg": msg, "nick": 'nick2' });

        })
    });


    /*
        function updateNicknames() {

            io.sockets.emit('usernames', Object.keys(users));

        } */

    socket.on('disconnect', function(data) {
        if (!socket.nickname) return;
        delete users[socket.nickname];

        updateNicknames();
    })

})

//??????????????????????????????????????????????



app.use('/public', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './app_server/views'));
app.use(ejsLayouts);
//post verileri için
app.use(bodyparser.urlencoded({ extended: false }));
//json objeler için
app.use(bodyparser.json());
//bu alanda yönlendiricilerin hepsi çağrıldı
require('./app_server/routes/routeManager')(app);

/*
var kullanici = require('./app_server/models/kullanici');
var yeniKullanici = new kullanici({
    ad: "Bekir",
    soyad: "Bedir",
    kullaniciAdi: "ahmet",
    sifre: "12345"
});
yeniKullanici.save(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Kayıt Başarılı');
    }
})  */
/*
var ilac = require('./app_server/models/ilac');
var yeniilac = new ilac({
    ad: "ALPROS",
    firma: "Koçak Farma",
    kullanim: "kullanım",
    yanEtkiler: "yanetkiler",
    resimUrl: "urlkismi"
});

yeniilac.save(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Kayıt Başarılı');
    }
})


app.use(function(req, res, next) {
    console.log('Yeni Saat...:' + Date.now() + " " + req.url);
    next();
}) */
/*
var chat = require('./app_server/models/chat');
var yenichat = new chat({
    nick: "ALPROS",
    msg: "Koçak Farma"
});

yenichat.save(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Kayıt Başarılı');
    }
}) */