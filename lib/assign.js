import extend from 'extend'

export default function assign (childProps, newChildren) {
  const newChildProps = {}

  for (let child in newChildren) {
    const oldChild = childProps[child] || {}
    let newChild = newChildren[child]

    if (typeof newChild === 'function') {
      newChild = newChild(oldChild, childProps)
    }

    if (newChild.childProps) {
      newChild.childProps = assign(
        oldChild.childProps || {},
        newChild.childProps
      )
    }

    newChildProps[child] = { ...oldChild, ...newChild }
  }

  return extend({ ...childProps, ...newChildProps })
}
