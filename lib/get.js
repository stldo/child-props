import assign from './assign'

export default function (childProps, child, newChildren) {
  return newChildren
    ? assign(childProps, { [child]: newChildren })[child]
    : (childProps[child] || {})
}
