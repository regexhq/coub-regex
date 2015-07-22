# coub-regex [![Build Status](https://travis-ci.org/isRuslan/coub-regex.svg?branch=master)](https://travis-ci.org/isRuslan/coub-regex)
> The correct coub video id regex.

[![NPM](https://nodei.co/npm/coub-regex.png?compact=true)](https://nodei.co/npm/coub-regex/)

## Install 

```sh
$ npm install coub-regex
$ npm test
```


## Play online
 - https://regex101.com/r/tK5aZ5/1
 - http://regexr.com/3bei9

## Usage
> All use-cases are avaliable in [tests](./test.js)

```js
var coubRegex = require('coub-regex');

// plain link
coubRegex().test('https://coub.com/view/7cwhu');
//=> true

// get video ID
coubRegex().exec('https://coub.com/view/7cwh0')[3];
//=> 62092214
```



## Thanks
> You can match coub due to these people:

<table>
<thead>
<tr><th align="left">Name</th><th>GitHub</th><th>Twitter</th></tr>
</thead>
<tbody>
<tr><td align="left">Ruslan Ismagilov</td><td><a href="https://github.com/isRuslan">@isRuslan</a></td><td><a href="http://twitter.com/is_ruslan">@is_ruslan</a></td></tr>
</tbody>
</table>

## License
MIT © [Ruslan Ismagilov](https://github.com/isRuslan)
