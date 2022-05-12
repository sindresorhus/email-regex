# email-regex

> Regular expression for matching email addresses

Use it for finding email addresses or checking if something is email like.

[You shouldn't use this for validating emails.](https://davidcel.is/2012/09/06/stop-validating-email.html) Only for hinting to the user.

If you use this on user input, it's up to you to limit the input to some reasonable length to prevent abuse.

## Install

```
$ npm install email-regex
```

## Usage

```js
import emailRegex from 'email-regex';

// Contains an email address
emailRegex().test('unicorn sindresorhus@gmail.com');
//=> true

// Is an email address
emailRegex({exact: true}).test('sindresorhus@gmail.com');
//=> true

'unicorn sindresorhus@gmail.com cake john@doe.com rainbow'.match(emailRegex());
//=> ['sindresorhus@gmail.com', 'john@doe.com']
```

## API

### emailRegex(options?)

Returns a regex for matching email addresses.

#### options

Type: `object`

##### exact

Type: `boolean`\
Default: `false` *(Matches any email address in a string)*

Only match an exact string.

Useful with `RegExp#test` to check if a string is an email address.
