# babel-plugin-react-render-error



## Example

**In**

```js
// input code
```

**Out**

```js
"use strict";

// output code
```

## Installation

```sh
$ npm install babel-plugin-react-render-error
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["react-render-error"]
}
```

### Via CLI

```sh
$ babel --plugins react-render-error script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["react-render-error"]
});
```
