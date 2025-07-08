# email-regex

> Regular expression for matching email addresses

Use it for finding email addresses or checking if something is email like.

[You shouldn't use this for validating emails.](https://davidcel.is/articles/stop-validating-email-addresses-with-regex) Only for hinting to the user.

## Install

```sh
npm install email-regex
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

## Important

If you run the regex against untrusted user input in a server context, you should [give it a timeout](https://github.com/sindresorhus/super-regex). It's also a good idea to limit the input to a reasonable length.

**I do not consider [ReDoS](https://blog.yossarian.net/2022/12/28/ReDoS-vulnerabilities-and-misaligned-incentives) a valid vulnerability for this package.**
