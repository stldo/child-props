import assign from './assign'
import get from './get'

export default function (childProps = {}) {
  const extendedChildProps = Object.create(null, {
    assign: {
      configurable: false,
      enumerable: false,
      writable: false,
      value: (...args) => assign(extendedChildProps, ...args)
    },
    get: {
      configurable: false,
      enumerable: false,
      writable: false,
      value: (...args) => get(extendedChildProps, ...args)
    },
  })

  return Object.assign(extendedChildProps, childProps)
}
