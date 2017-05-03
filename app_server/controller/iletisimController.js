  module.exports.iletisimGet = function(req, res) {
      res.render('iletisim')
  }
  module.exports.iletisimPost = function(req, res) {

      console.log(req.body)
      console.log("burada");
      var nodemailer = require('nodemailer');
      // create reusable transporter object using the default SMTP transport
      var transporter = nodemailer.createTransport({
          service: 'yandex',
          auth: {
              user: 'mbekirbedir@yandex.com',
              pass: '123abcd'
          }
      });
      var mailOptions = {
          from: '"Foo 👻" <mbekirbedir@yandex.com>', // sender address
          to: 'bekirbedir25@gmail.com', // list of receivers
          subject: req.body.iletisimAd + '✔', // Subject line
          text: req.body.iletisimMesaj, // plain text body
          html: '<b>Hello world ?</b> <p>' + req.body.iletisimMesaj + '</p>' // html body
      };
      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
      });
      res.render('iletisim')



  }