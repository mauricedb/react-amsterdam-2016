var TheMovieDatabase = require('./javascript-client');
TheMovieDatabase.ApiClient.instance.basePath = 'http://localhost:8080';
var api = new TheMovieDatabase.DefaultApi();

api.getMovies((error, movies) => {
    if (error) {
        throw error;
    }

    console.log(movies);
});


var movie = {
    "id": 771028554,
    "title": "127 Hours",
    "criticsConsensus": "As gut-wrenching as it is inspirational, 127 Hours unites one of Danny Boyle's most beautifully exuberant directorial efforts with a terrific performance from James Franco.",
    "posters": {
        "original": "http://content6.flixster.com/movie/11/15/34/11153440_ori.jpg"
    },
    "abridgedCast": [{
        "id": 162653202,
        "name": "James Franco",
        "characters": ["Aron Ralston"]
    }, {
        "id": 364624768,
        "name": "Kate Burton",
        "characters": ["Aron's Mom"]
    }],
    "abridgedDirectors": ["Danny Boyle"]
};

api.addMovie(movie, (error) => {
    console.log('Error:', error);
});
