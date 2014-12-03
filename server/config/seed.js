/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Audiofile = require('../api/audioFile/audioFile.model');

Thing.find({}).remove(function () {
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

User.find({}).remove(function () {
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
    }, function () {
        console.log('finished populating users');
    });
});

Audiofile.find({}).remove(function () {
    Audiofile.create({
        name: 'sanghied.mp3',
        MIME: 'audio/x-mpeg-3',
        location: 'assets/demo/sanghied.mp3',
        duration: 98,
        size: 1534
    }, {
        name: 'applewhite.mp3',
        MIME: 'audio/x-mpeg-3',
        location: 'assets/demo/applewhite.mp3',
        duration: 108,
        size: 1702
    }, {
        name: 'java.mp3',
        MIME: 'audio/x-mpeg-3',
        location: 'assets/demo/applewhite.mp3',
        duration: 117,
        size: 1836
    }, {
        name: 'wheels.mp3',
        MIME: 'audio/x-mpeg-3',
        location: 'assets/demo/wheels.mp3',
        duration: 124,
        size: 1954
    }, {
        name: 'peacepipe.mp3',
        MIME: 'audio/x-mpeg-3',
        location: 'assets/demo/peacepipe.mp3',
        duration: 130,
        size: 2044
    }, {
        name: 'riverrock.mp3',
        MIME: 'audio/x-mpeg-3',
        location: 'assets/demo/riverrock.mp3',
        duration: 131,
        size: 2067
    }, function () {
        console.log('finished populating users');
    });
});
