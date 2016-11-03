/**
 * The movie database
 * No descripton provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as querystring from "querystring";
import * as url from "url";

import * as isomorphicFetch from "isomorphic-fetch";
import * as assign from "core-js/library/fn/object/assign";

interface Dictionary<T> { [index: string]: T; }
export interface FetchAPI { (url: string, init?: any): Promise<any>; }

const BASE_PATH = "https://localhost";

export interface FetchArgs {
    url: string;
    options: any; 
}

export class BaseAPI {
    basePath: string;
    fetch: FetchAPI;

    constructor(fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) {
        this.basePath = basePath;
        this.fetch = fetch;
    }
}

export interface Cast {
    "id": number;
    "name": string;
    "characters"?: Array<string>;
}

export interface Movie {
    "id": number;
    "title": string;
    "ratings"?: MovieRatings;
    "criticsConsensus"?: string;
    "abridgedDirectors"?: Array<string>;
    "abridgedCast"?: Array<Cast>;
    "posters"?: Posters;
}

export interface MovieRatings {
    "criticsScore"?: number;
    "audienceScore"?: number;
}

export interface Posters {
    "thumbnail"?: string;
    "profile"?: string;
    "detailed"?: string;
    "original"?: string;
}

export interface Problem {
    /**
     * An absolute URI that identifies the problem type.  When dereferenced, it SHOULD provide human-readable documentation for the problem type (e.g., using HTML). 
     */
    "type"?: string;
    /**
     * A short, summary of the problem type. Written in english and readable for engineers (usually not suited for non technical stakeholders and not localized); example: Service Unavailable 
     */
    "title"?: string;
    /**
     * The HTTP status code generated by the origin server for this occurrence of the problem. 
     */
    "status"?: number;
    /**
     * A human readable explanation specific to this occurrence of the problem. 
     */
    "detail"?: string;
    /**
     * An absolute URI that identifies the specific occurrence of the problem. It may or may not yield further information if dereferenced. 
     */
    "instance"?: string;
}



/**
 * DefaultApi - fetch parameter creator
 */
export const DefaultApiFetchParamCreactor = {
    /** 
     * Add a new movie
     * @param movie The new movie
     */
    addMovie(params: {  movie: Movie; }): FetchArgs {
        // verify required parameter "movie" is set
        if (params["movie"] == null) {
            throw new Error("Missing required parameter movie when calling addMovie");
        }
        const baseUrl = `/movies`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = { method: "POST" };

        let contentTypeHeader: Dictionary<string>;
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["movie"]) {
            fetchOptions.body = JSON.stringify(params["movie"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = contentTypeHeader;
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /** 
     * Delete a movie
     * @param id ID of the movie
     */
    deleteMovieById(params: {  id: number; }): FetchArgs {
        // verify required parameter "id" is set
        if (params["id"] == null) {
            throw new Error("Missing required parameter id when calling deleteMovieById");
        }
        const baseUrl = `/movies/{id}`
            .replace(`{${"id"}}`, `${ params.id }`);
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = { method: "DELETE" };

        let contentTypeHeader: Dictionary<string>;
        if (contentTypeHeader) {
            fetchOptions.headers = contentTypeHeader;
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /** 
     * Returns a single movie
     * @param id ID of the movie
     */
    getMovieById(params: {  id: number; }): FetchArgs {
        // verify required parameter "id" is set
        if (params["id"] == null) {
            throw new Error("Missing required parameter id when calling getMovieById");
        }
        const baseUrl = `/movies/{id}`
            .replace(`{${"id"}}`, `${ params.id }`);
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = { method: "GET" };

        let contentTypeHeader: Dictionary<string>;
        if (contentTypeHeader) {
            fetchOptions.headers = contentTypeHeader;
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /** 
     * Returns all movies
     */
    getMovies(): FetchArgs {
        const baseUrl = `/movies`;
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = { method: "GET" };

        let contentTypeHeader: Dictionary<string>;
        if (contentTypeHeader) {
            fetchOptions.headers = contentTypeHeader;
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
    /** 
     * Update an existing movie
     * @param id ID of the movie
     * @param movie The movie
     */
    updateMovieById(params: {  id: number; movie: Movie; }): FetchArgs {
        // verify required parameter "id" is set
        if (params["id"] == null) {
            throw new Error("Missing required parameter id when calling updateMovieById");
        }
        // verify required parameter "movie" is set
        if (params["movie"] == null) {
            throw new Error("Missing required parameter movie when calling updateMovieById");
        }
        const baseUrl = `/movies/{id}`
            .replace(`{${"id"}}`, `${ params.id }`);
        let urlObj = url.parse(baseUrl, true);
        let fetchOptions: RequestInit = { method: "PUT" };

        let contentTypeHeader: Dictionary<string>;
        contentTypeHeader = { "Content-Type": "application/json" };
        if (params["movie"]) {
            fetchOptions.body = JSON.stringify(params["movie"] || {});
        }
        if (contentTypeHeader) {
            fetchOptions.headers = contentTypeHeader;
        }
        return {
            url: url.format(urlObj),
            options: fetchOptions,
        };
    },
}

/**
 * DefaultApi - functional programming interface
 */
export const DefaultApiFp = {
    /** 
     * Add a new movie
     * @param movie The new movie
     */
    addMovie(params: { movie: Movie;  }): (fetch: FetchAPI, basePath?: string) => Promise<Movie> {
        const fetchArgs = DefaultApiFetchParamCreactor.addMovie(params);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /** 
     * Delete a movie
     * @param id ID of the movie
     */
    deleteMovieById(params: { id: number;  }): (fetch: FetchAPI, basePath?: string) => Promise<any> {
        const fetchArgs = DefaultApiFetchParamCreactor.deleteMovieById(params);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                } else {
                    throw response;
                }
            });
        };
    },
    /** 
     * Returns a single movie
     * @param id ID of the movie
     */
    getMovieById(params: { id: number;  }): (fetch: FetchAPI, basePath?: string) => Promise<Movie> {
        const fetchArgs = DefaultApiFetchParamCreactor.getMovieById(params);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /** 
     * Returns all movies
     */
    getMovies(): (fetch: FetchAPI, basePath?: string) => Promise<Array<Movie>> {
        const fetchArgs = DefaultApiFetchParamCreactor.getMovies();
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
    /** 
     * Update an existing movie
     * @param id ID of the movie
     * @param movie The movie
     */
    updateMovieById(params: { id: number; movie: Movie;  }): (fetch: FetchAPI, basePath?: string) => Promise<Movie> {
        const fetchArgs = DefaultApiFetchParamCreactor.updateMovieById(params);
        return (fetch: FetchAPI = isomorphicFetch, basePath: string = BASE_PATH) => {
            return fetch(basePath + fetchArgs.url, fetchArgs.options).then((response) => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    throw response;
                }
            });
        };
    },
};

/**
 * DefaultApi - object-oriented interface
 */
export class DefaultApi extends BaseAPI {
    /** 
     * Add a new movie
     * @param movie The new movie
     */
    addMovie(params: {  movie: Movie; }) {
        return DefaultApiFp.addMovie(params)(this.fetch, this.basePath);
    }
    /** 
     * Delete a movie
     * @param id ID of the movie
     */
    deleteMovieById(params: {  id: number; }) {
        return DefaultApiFp.deleteMovieById(params)(this.fetch, this.basePath);
    }
    /** 
     * Returns a single movie
     * @param id ID of the movie
     */
    getMovieById(params: {  id: number; }) {
        return DefaultApiFp.getMovieById(params)(this.fetch, this.basePath);
    }
    /** 
     * Returns all movies
     */
    getMovies() {
        return DefaultApiFp.getMovies()(this.fetch, this.basePath);
    }
    /** 
     * Update an existing movie
     * @param id ID of the movie
     * @param movie The movie
     */
    updateMovieById(params: {  id: number; movie: Movie; }) {
        return DefaultApiFp.updateMovieById(params)(this.fetch, this.basePath);
    }
};

/**
 * DefaultApi - factory interface
 */
export const DefaultApiFactory = function (fetch?: FetchAPI, basePath?: string) {
    return {
        /** 
         * Add a new movie
         * @param movie The new movie
         */
        addMovie(params: {  movie: Movie; }) {
            return DefaultApiFp.addMovie(params)(fetch, basePath);
        },
        /** 
         * Delete a movie
         * @param id ID of the movie
         */
        deleteMovieById(params: {  id: number; }) {
            return DefaultApiFp.deleteMovieById(params)(fetch, basePath);
        },
        /** 
         * Returns a single movie
         * @param id ID of the movie
         */
        getMovieById(params: {  id: number; }) {
            return DefaultApiFp.getMovieById(params)(fetch, basePath);
        },
        /** 
         * Returns all movies
         */
        getMovies() {
            return DefaultApiFp.getMovies()(fetch, basePath);
        },
        /** 
         * Update an existing movie
         * @param id ID of the movie
         * @param movie The movie
         */
        updateMovieById(params: {  id: number; movie: Movie; }) {
            return DefaultApiFp.updateMovieById(params)(fetch, basePath);
        },
    }
};
