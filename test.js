'use strict';
var assert = require('assert');
var linkToImport = require('./');

it('should returns updated html', function () {
  var html = [
    '<html>',
    '<head>',
    '<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,300,300italic,400italic,500,500italic,700,700italic">',
    '<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Inconsolata:400,700">',
    '<link rel="import" href="bower_components/polymer/polymer.html">',
    '</head>',
    '</html>'
  ].join('\n');

  var tack = linkToImport(html, function (href, attr) {
    return 'https:' + href + '/newaddr';
  });

  assert(tack.links.length === 3);
  assert(!/<link rel="stylesheet"/.test(tack.html), 'Oops the link should not be keeping');
  assert(/<link rel="import"/.test(tack.html), 'Oops the link should be keeping');
  assert(/newaddr/.test(tack.html), 'Updated href value should be existed');
});
