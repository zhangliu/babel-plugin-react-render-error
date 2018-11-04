const _ = require('lodash')
let ErrorBoundary

export default function({types: t }) {
  return {
    visitor: {
      CallExpression(path, {opts: {excludes = [], ErrorBoundaryTag = 'ErrorBoundary'}}) {
        ErrorBoundary = ErrorBoundaryTag
        if(!isJSXCall(path)) return
        if (isExcludes(path, [ErrorBoundary])) return
        if (isExcludes(path, excludes)) removeErrorBoundary(path)
        if (isExcludes(path.parentPath, excludes.concat([ErrorBoundary]))) return

        const eNode = t.callExpression(
          t.memberExpression(t.identifier('React'), t.identifier('createElement')),
          path.node.arguments
        )

        const key = getKey(path)
        path.node.arguments = [
          t.identifier(ErrorBoundary),
          key ? t.objectExpression([key]) : t.nullLiteral(),
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

const isExcludes = (path, excludes) => {
  const name = _.get(path, 'node.arguments[0].name')
  return excludes.includes(name)
}

const removeErrorBoundary = (path) => {
  const args = _.get(path, 'node.arguments', [])
  for (let i = 0; i < args.length; i++) {
    const childName = _.get(args[i], 'arguments[0].name')
    if (childName === ErrorBoundary) {
      args[i] = args[i].arguments[2]
    }
  }
}

const getKey = (path) => {
  const props =  _.get(path, 'node.arguments[1].properties', [])
  const key = props.find(p => p.key.name === 'key')
  return key
}