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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TheMovieDatabase) {
      root.TheMovieDatabase = {};
    }
    root.TheMovieDatabase.Cast = factory(root.TheMovieDatabase.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Cast model module.
   * @module model/Cast
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>Cast</code>.
   * @alias module:model/Cast
   * @class
   * @param id {Integer} 
   * @param name {String} 
   */
  var exports = function(id, name) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;

  };

  /**
   * Constructs a <code>Cast</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Cast} obj Optional instance to populate.
   * @return {module:model/Cast} The populated <code>Cast</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('characters')) {
        obj['characters'] = ApiClient.convertToType(data['characters'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<String>} characters
   */
  exports.prototype['characters'] = undefined;



  return exports;
}));

