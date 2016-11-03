# TheMovieDatabase.DefaultApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMovie**](DefaultApi.md#addMovie) | **POST** /movies | 
[**deleteMovieById**](DefaultApi.md#deleteMovieById) | **DELETE** /movies/{id} | 
[**getMovieById**](DefaultApi.md#getMovieById) | **GET** /movies/{id} | 
[**getMovies**](DefaultApi.md#getMovies) | **GET** /movies | 
[**updateMovieById**](DefaultApi.md#updateMovieById) | **PUT** /movies/{id} | 


<a name="addMovie"></a>
# **addMovie**
> Movie addMovie(movie)



Add a new movie

### Example
```javascript
var TheMovieDatabase = require('the_movie_database');

var apiInstance = new TheMovieDatabase.DefaultApi();

var movie = new TheMovieDatabase.Movie(); // Movie | The new movie


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addMovie(movie, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **movie** | [**Movie**](Movie.md)| The new movie | 

### Return type

[**Movie**](Movie.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteMovieById"></a>
# **deleteMovieById**
> deleteMovieById(id)



Delete a movie

### Example
```javascript
var TheMovieDatabase = require('the_movie_database');

var apiInstance = new TheMovieDatabase.DefaultApi();

var id = 789; // Integer | ID of the movie


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteMovieById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| ID of the movie | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getMovieById"></a>
# **getMovieById**
> Movie getMovieById(id)



Returns a single movie

### Example
```javascript
var TheMovieDatabase = require('the_movie_database');

var apiInstance = new TheMovieDatabase.DefaultApi();

var id = 789; // Integer | ID of the movie


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMovieById(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| ID of the movie | 

### Return type

[**Movie**](Movie.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getMovies"></a>
# **getMovies**
> [Movie] getMovies()



Returns all movies

### Example
```javascript
var TheMovieDatabase = require('the_movie_database');

var apiInstance = new TheMovieDatabase.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMovies(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Movie]**](Movie.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateMovieById"></a>
# **updateMovieById**
> Movie updateMovieById(idmovie)



Update an existing movie

### Example
```javascript
var TheMovieDatabase = require('the_movie_database');

var apiInstance = new TheMovieDatabase.DefaultApi();

var id = 789; // Integer | ID of the movie

var movie = new TheMovieDatabase.Movie(); // Movie | The movie


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateMovieById(idmovie, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| ID of the movie | 
 **movie** | [**Movie**](Movie.md)| The movie | 

### Return type

[**Movie**](Movie.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

