var TheMovieDatabase = require('./javascript-client');
TheMovieDatabase.ApiClient.instance.basePath = 'http://localhost:8080';
var api = new TheMovieDatabase.DefaultApi();

api.getMovies((error, movies) => {
    if (error) {
        throw error;
    }

    console.log(movies);
})



var movie = {
    "id": 771028554,
    "title": "127 Hours",
    "ratings": {
        "criticsScore": 93,
        "audienceScore": 85
    },
    "criticsConsensus": "As gut-wrenching as it is inspirational, 127 Hours unites one of Danny Boyle's most beautifully exuberant directorial efforts with a terrific performance from James Franco.",
    "posters": {
        "thumbnail": "http://content6.flixster.com/movie/11/15/34/11153440_mob.jpg",
        "profile": "http://content6.flixster.com/movie/11/15/34/11153440_pro.jpg",
        "detailed": "http://content6.flixster.com/movie/11/15/34/11153440_det.jpg",
        "original": "http://content6.flixster.com/movie/11/15/34/11153440_ori.jpg"
    },
    "abridgedCast": [{
        "id": 162653202,
        "name": "James Franco",
        "characters": ["Aron Ralston"]
    }, {
        "id": 347990463,
        "name": "Amber Tamblyn",
        "characters": ["Megan"]
    }, {
        "id": 414200709,
        "name": "Kate Mara",
        "characters": ["Kristi"]
    }, {
        "id": 770681921,
        "name": "Clemence Poesy",
        "characters": ["Rana"]
    }, {
        "id": 364624768,
        "name": "Kate Burton",
        "characters": ["Aron's Mom"]
    }],
    "abridgedDirectors": ["Danny Boyle"]
};


// movie = {};

api.addMovie(movie, (error) => {
    if (error) {
        throw error;
    }
})