# babel-plugin-react-render-error
对 jsx 组件进行错误处理包装，会将所有 React.createElement 调用的外层加上 React.createElement(ErrorBoundary


## Example

**In**

```js
// input code
//  <App name="app">
//    <Index />
//  </App>
React.createElement(App, {name: 'app'}, React.createElement('Index', null))
```

**Out**

```js
"use strict";

// output code
//  <ErrorBoundary>
//    <App name="app">
//      <ErrorBoundary>
//        <Index />
//      </ErrorBoundary>
//    </App>
//  </ErrorBoundary>
React.createElement('ErrorBoundary', null,
  React.createElement('App', {name: 'app'},
    React.createElement('ErrorBoundary', null,
      React.createElement('Index', null))))
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
  "plugins": ["react-render-error", "{\"ErrorBoundaryFile\":\"./ErrorBoundaryFile.js\"}"]
}
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["react-render-error", {ErrorBoundary: () => {}}]
});
```
