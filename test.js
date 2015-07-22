'use strict';

var assert = require('assert');
var coubRegex = require('./index');

function test(str) {
  return coubRegex().test(str);
}

var fixtures = {
  plain: {
    ok: [
      'https://coub.com/view/7cwh0',
      'https://www.coub.com/view/7cwh0',
      'http://coub.com/view/7cwh0'
    ],
    not_ok: [
      'NONONO',
      'http://coub/7cwh0',
      'http://coub.com/foo',
    ]
  }
};


describe('coub-regex ->', function() {
  describe('should be ok with ->', function() {
    it('plain url', function(done) {
      fixtures.plain.ok.forEach(function (link) {
        assert.ok(test(link), link);
      });
      done();
    });
  });
  describe('should falied with ->', function() {
    it('plain url', function(done) {
      fixtures.plain.not_ok.forEach(function (link) {
        assert.equal(test(link), false, link);
      });
      done();
    });
  });
});
