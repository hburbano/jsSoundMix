/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
    Thing.create({
        name: 'MEAN Stack',
        info: 'Para agilizar el desarrollo se utiliza Yeoman que produce ahorros significativos con la inclusion del respectivo boiler plate.'
    }, {
        name: 'Login and registration',
        info: 'Se implementa los modulos de registro y login.'
    }, {
        name: 'Oauth',
        info: 'Se implementa el login con Google y Facebook, pendiente crear las app con los respectivos proveedores.'
    });
});

User.find({}).remove(function() {
    User.create({
        provider: 'local',
        name: 'Demo user',
        email: 'demo@example.com',
        password: 'demo'
    }, {
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@example.com',
        password: 'admin'
    }, function() {
        console.log('finished populating users');
    });
});
