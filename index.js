/**
 * - index.js
 * @author luckydrq(drqzju@gmail.com)
 */
'use strict';

module.exports = Properties;

function Properties(defaults) {
  this.properties = defaults || {};
}

var proto = Properties.prototype;

proto.getProperty = function(key, defaultValue) {
  return this.properties[key] || defaultValue;
};

proto.setProperty = function(key, value) {
  this.properties[key] = value;
  return this;
};

proto.load = function(str) {
  var properties = this;
  str.trim()
    .replace(/^\{/, '')
    .replace(/\}$/, '')
    .split(',')
    .forEach(function(tuple) {
      var pair = tuple.split('=');
      var key = pair[0].trim();
      var value = pair[1].trim();
      properties.setProperty(key, value);
    });
  return properties;
};

proto.toString = function() {
  var properties = this.properties;
  var serial = Object.keys(properties).map(serialize).join(', ');
  return '{' + serial + '}';

  function serialize(key) {
    var value = properties[key];
    return [key, value].join('=');
  }
};
