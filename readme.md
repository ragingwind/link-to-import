# link-to-import [![Build Status](https://travis-ci.org/ragingwind/link-to-import.svg?branch=master)](https://travis-ci.org/ragingwind/link-to-import)

> Change link of have relationship with external stylesheet into @import CSS at-rule


## Install

```
$ npm install --save link-to-import
```


## Usage

```js
// > '<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Inconsolata:400,700">'

var linkToImport = require('link-to-import');
var tack = linkToImport(html, function(href, attr) {
  // return updated url value if you want to
  return href + '/changeurl';
});

console.log(tack.html, tack.link);
// > '<style>@import url("//fonts.googleapis.com/css?family=Inconsolata:400,700")</style>
```

## API

### linkToImport(html, evaluate)

#### html

HTML string that includes links

#### evaluate

To evaluate a link which could be updated or not

## Return

Return updated html with link information

```
{
  html: String
  link: []
}
```

## License

MIT © [Jimmy Moon](http://ragingwind.me)
