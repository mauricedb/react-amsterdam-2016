'use strict';

exports.addMovie = function(args, res, next) {
  /**
   * parameters expected in the args:
  * movie (Movie)
  **/
    var examples = {};
  examples['application/json'] = {
  "criticsConsensus" : "aeiou",
  "ratings" : {
    "audienceScore" : "",
    "criticsScore" : ""
  },
  "posters" : {
    "thumbnail" : "aeiou",
    "original" : "aeiou",
    "detailed" : "aeiou",
    "profile" : "aeiou"
  },
  "abridgedCast" : [ {
    "characters" : [ "aeiou" ],
    "name" : "aeiou",
    "id" : 123456789
  } ],
  "id" : 123456789,
  "abridgedDirectors" : [ "aeiou" ],
  "title" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteMovieById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
  // no response value expected for this operation
  res.end();
}

exports.getMovieById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  **/
    var examples = {};
  examples['application/json'] = {
  "criticsConsensus" : "aeiou",
  "ratings" : {
    "audienceScore" : "",
    "criticsScore" : ""
  },
  "posters" : {
    "thumbnail" : "aeiou",
    "original" : "aeiou",
    "detailed" : "aeiou",
    "profile" : "aeiou"
  },
  "abridgedCast" : [ {
    "characters" : [ "aeiou" ],
    "name" : "aeiou",
    "id" : 123456789
  } ],
  "id" : 123456789,
  "abridgedDirectors" : [ "aeiou" ],
  "title" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getMovies = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/
    var examples = {};
  examples['application/json'] = [ {
  "criticsConsensus" : "aeiou",
  "ratings" : {
    "audienceScore" : "",
    "criticsScore" : ""
  },
  "posters" : {
    "thumbnail" : "aeiou",
    "original" : "aeiou",
    "detailed" : "aeiou",
    "profile" : "aeiou"
  },
  "abridgedCast" : [ {
    "characters" : [ "aeiou" ],
    "name" : "aeiou",
    "id" : 123456789
  } ],
  "id" : 123456789,
  "abridgedDirectors" : [ "aeiou" ],
  "title" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.updateMovieById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (Long)
  * movie (Movie)
  **/
    var examples = {};
  examples['application/json'] = {
  "criticsConsensus" : "aeiou",
  "ratings" : {
    "audienceScore" : "",
    "criticsScore" : ""
  },
  "posters" : {
    "thumbnail" : "aeiou",
    "original" : "aeiou",
    "detailed" : "aeiou",
    "profile" : "aeiou"
  },
  "abridgedCast" : [ {
    "characters" : [ "aeiou" ],
    "name" : "aeiou",
    "id" : 123456789
  } ],
  "id" : 123456789,
  "abridgedDirectors" : [ "aeiou" ],
  "title" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

