'use strict'

import React from 'react'
import { TheAside, TheAsideStyle } from 'the-aside'

class ExampleComponent extends React.PureComponent {
  render () {
    return (
      <div>
        <TheAsideStyle/>
        <TheAside id='my-component'>
        </TheAside>
      </div>

    )
  }
}

export default ExampleComponent
