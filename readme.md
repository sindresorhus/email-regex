# email-regex [![Build Status](https://travis-ci.org/sindresorhus/email-regex.svg?branch=master)](https://travis-ci.org/sindresorhus/email-regex)

> Regular expression for matching email addresses

Use it for finding email addresses or checking if something is email like.

[You shouldn't use this for validating emails.](http://davidcel.is/blog/2012/09/06/stop-validating-email-addresses-with-regex/) Only for hinting to the user.


## Install

```sh
$ npm install --save email-regex
```


## Usage

```js
var emailRegex = require('email-regex');

// contains an email address
emailRegex().test('unicorn sindresorhus@gmail.com');
//=> true

// is an email address
emailRegex({exact: true}).test('sindresorhus@gmail.com');
//=> true

'unicorn sindresorhus@gmail.com cake john@doe.com rainbow'.match(emailRegex());
//=> ['sindresorhus@gmail.com', 'john@doe.com']
```


## API

### emailRegex([options])

Returns a regex for matching email addresses.

#### options

##### matchStart

Type: `boolean`<br>
Default: `false`

Only match pattern at the beginning of input string.

##### matchEnd

Type: `boolean`<br>
Default: `false`

Only match pattern at the end of input string.

##### exact

Type: `boolean`<br>
Default: `false` *(Matches any email address in a string)*

Only match an exact string.<br>
Useful with `RegExp#test` to check if a string is an email address.<br>
This is a shorthand for setting both `matchStart` and `matchEnd` to `true`.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
