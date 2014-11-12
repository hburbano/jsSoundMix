'use strict';

var _ = require('lodash');
var Audiofile = require('./audioFile.model');

// Get list of audioFiles
exports.index = function(req, res) {
    Audiofile.find(function(err, audioFiles) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, audioFiles);
    });
};

// Get a single audioFile
exports.show = function(req, res) {
    Audiofile.findById(req.params.id, function(err, audioFile) {
        if (err) {
            return handleError(res, err);
        }
        if (!audioFile) {
            return res.send(404);
        }
        return res.json(audioFile);
    });
};

// Creates a new audioFile in the DB.
exports.create = function(req, res) {
    Audiofile.create(req.body, function(err, audioFile) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(201, audioFile);
    });
};

// Updates an existing audioFile in the DB.
exports.update = function(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    Audiofile.findById(req.params.id, function(err, audioFile) {
        if (err) {
            return handleError(res, err);
        }
        if (!audioFile) {
            return res.send(404);
        }
        var updated = _.merge(audioFile, req.body);
        updated.save(function(err) {
            if (err) {
                return handleError(res, err);
            }
            return res.json(200, audioFile);
        });
    });
};

// Deletes a audioFile from the DB.
exports.destroy = function(req, res) {
    Audiofile.findById(req.params.id, function(err, audioFile) {
        if (err) {
            return handleError(res, err);
        }
        if (!audioFile) {
            return res.send(404);
        }
        audioFile.remove(function(err) {
            if (err) {
                return handleError(res, err);
            }
            return res.send(204);
        });
    });
};

function handleError(res, err) {
    return res.send(500, err);
}
