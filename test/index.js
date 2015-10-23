/**!
 *  js-properties - test/index.js
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

const assert = require('assert');
const Properties = require('..');

describe('js properties', function() {
  it('should support default properties', function() {
    let props = new Properties({ a: 1});
    assert.equal(props.getProperty('a'), 1);
    let map = new Map;
    map.set('b', 2);
    let props2 = new Properties(map);
    assert.equal(props2.getProperty('b'), 2);
  });

  it('should getProperty', function() {
    let props = new Properties;
    props.setProperty('a', 1);
    assert.equal(props.getProperty('a'), 1);
    assert.equal(props.getProperty('b'), undefined);
    assert.equal(props.getProperty('b', 2), 2);
  });

  it('should setProperty', function() {
    let props = new Properties;
    let value = props.setProperty('a', 1);
    assert.equal(value, 1);
    assert.equal(props.getProperty('a'), 1);
  });

  it('should load');

  it('should toString', function() {
    var props = new Properties;
    props.setProperty('a', 1);
    props.setProperty('b', 2);
    assert.equal(props.toString(), '{a=1,b=2}');
  });
});
