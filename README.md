there are many glsl minifiers, but they all need native packages.

this one is very simple and only uses [glsl-tokenizer](https://www.npmjs.com/package/glsl-tokenizer)

run with `node index.js`

### what it does

- remove comments
- remove whitespaces
- remove zeroes from the end of floats
- keep newlines (tbd?)
