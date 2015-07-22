'use strict';
/**
 * Welcome to the coub-regex!
 * 
 * coub videos can use one of three URL schemes:
 * https://coub.com/view/*
 */

module.exports = function coubRegex () {
  var regex = /(http|https)?:\/\/(www\.)?coub\.com\/view\/([a-zA-Z\d]+)/;

  return regex;
};
