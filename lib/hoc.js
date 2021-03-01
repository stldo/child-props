import { createElement } from 'react'

import extend from './extend'

export default Component => ({ childProps, ...props }) => createElement(
  Component,
  {
    childProps: extend(childProps),
    ...props
  }
)
