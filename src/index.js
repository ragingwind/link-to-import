'use strict';

const dom5 = require('dom5');
const pred = dom5.predicates;

function flattenAttr(attrs) {
  var res = {};
  attrs.forEach(attrs => {
    res[attrs.name] = attrs.value;
  });
  return res;
}

function extractHref(link, rel) {
  var href = null;

  if (link.attrs) {
    var attrs = flattenAttr(link.attrs);

    if (attrs.href && (!rel || rel === attrs.rel)) {
      href = attrs.href;
    }
  }

  return href;
}

function linkToImport(html, evaluate) {
  var doc = dom5.parse(html);
  var res = {
    html: html,
    links: []
  };

  res.links = dom5.queryAll(doc, pred.hasTagName('link'));

  if (res.links) {
    res.links.forEach(link => {
      var href = extractHref(link, 'stylesheet');
      if (href) {
        var style = dom5.constructors.element('style');
        dom5.setTextContent(style, '@import url(' + (evaluate ? evaluate(href) : href) + ')');
        dom5.replace(link, style);
      }
    });

    res.html = dom5.serialize(doc);
  }

  return res;
}

module.exports = linkToImport;
