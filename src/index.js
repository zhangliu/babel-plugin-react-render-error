const _ = require('lodash')
const tag = 'ErrorBoundary'
export default function({types: t }) {
  return {
    visitor: {
      CallExpression(path, state) {
        if(!isJSXCall(path)) return
        if (isE(path)) return
        if (isE(path.parentPath)) return

        const eNode = t.callExpression(
          t.memberExpression(t.identifier('React'), t.identifier('createElement')),
          path.node.arguments
        )

        path.node.arguments = [
          t.identifier(tag),
          t.nullLiteral(),
          eNode
        ]
      },
    }
  };
}

const isJSXCall = (path) => {
  const className = _.get(path, 'node.callee.object.name')
  const propName = _.get(path, 'node.callee.property.name')
  return (className === 'React') && (propName === 'createElement')
}

const isE = (path) => {
  return _.get(path, 'node.arguments[0].name') === tag
}