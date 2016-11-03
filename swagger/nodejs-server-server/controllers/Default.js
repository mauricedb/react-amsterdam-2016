'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.addMovie = function addMovie (req, res, next) {
  Default.addMovie(req.swagger.params, res, next);
};

module.exports.deleteMovieById = function deleteMovieById (req, res, next) {
  Default.deleteMovieById(req.swagger.params, res, next);
};

module.exports.getMovieById = function getMovieById (req, res, next) {
  Default.getMovieById(req.swagger.params, res, next);
};

module.exports.getMovies = function getMovies (req, res, next) {
  Default.getMovies(req.swagger.params, res, next);
};

module.exports.updateMovieById = function updateMovieById (req, res, next) {
  Default.updateMovieById(req.swagger.params, res, next);
};
