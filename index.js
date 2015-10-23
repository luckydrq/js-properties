/**!
 *  js-properties - index.js
 *
 * Copyright(c) luckydrq<drqzju@gmail.com>
 *
 * Authors:
 *   luckydrq <drqzju@gmail.com>
 */

'use strict';

/**
 * Module dependencies.
 */

const toMap = require('object-to-map');

class Properties {
  /**
   * constructor
   * @param {Map|Object} defaultProperties
   * @api public
   */
  constructor(defaultProperties) {
    if (defaultProperties && !(defaultProperties instanceof Map)) {
      defaultProperties = toMap(defaultProperties);
    }
    this.properties = defaultProperties || new Map();
  }

  /**
   * #getProperty
   * @param {String} key
   * @param {String} defaultValue
   * @return {String}
   * @api public
   */
  getProperty(key, defaultValue) {
    let value = this.properties.get(key);
    if (value == null) {
      value = defaultValue;
    }
    return value;
  }

  /**
   * #setProperty
   * @param {String} key
   * @param {String} value
   * @return {String}
   * @api public
   */
  setProperty(key, value) {
    this.properties.set(key, value);
    return value;
  }

  /**
   * #load
   *
   */
  load(str) {
    str.trim()
      .replace(/^\{/, '')
      .replace(/\}$/, '')
      .split(',')
      .forEach(function(tuple) {
        let pair = tuple.split('=');
        let key = pair[0].trim();
        let value = pair[1].trim();
        this.setProperty(key, value);
      }, this);
    return this;
  }

  /**
   * #toString
   * @return {String}
   * @api public
   */
  toString() {
    let properties = this.properties;
    let arr = [];
    for (let key of properties.keys()) {
      arr.push(serialize(key));
    }
    return '{' + arr.join(',') + '}';

    function serialize(key) {
      let value = properties.get(key);
      return [key, value].join('=');
    }
  }
}

module.exports = Properties;
