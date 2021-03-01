import React from 'react'

import extend from './extend'

export default Component => ({ childProps, ...props }) => (
  <Component childProps={extend(childProps)} {...props}/>
)
