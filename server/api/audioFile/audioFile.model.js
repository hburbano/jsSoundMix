'use strict';

var mongoose = require('mongoose'),
    crate = require('mongoose-crate'),
    LocalFS = require('mongoose-crate-localfs'),
    Schema = mongoose.Schema;


var AudiofileSchema = new Schema({
    name: String,
    MIME: String,
    location: String,
    //Kb
    size: Number,
    //Seconds
    duration: Number
});

AudiofileSchema.plugin(crate, {
    storage: new LocalFS({
        directory: '../'
    }),
    fields: {
        attachment: {}
    }
});

module.exports = mongoose.model('Audiofile', AudiofileSchema);
