var routeElektronik = require('./elektronikRoute');
var routeLogin = require('./loginRoutes');
var routeHome = require('./homeRoute');
var routeIletisim = require('./iletisimRoute');
var ilacRoute = require('./ilacRoute');
var apiRoute = require('./apiRoute');


module.exports = function(app) {

    app.use('/elektronik', routeElektronik);
    app.use('/', routeHome);
    app.use('/login', routeLogin);
    app.use('/iletisim', routeIletisim);
    app.use('/ilac', ilacRoute);
    app.use('/api', apiRoute);
}