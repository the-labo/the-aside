'use strict'

import React from 'react'
import { TheAside, TheAsideStyle } from 'the-aside'

class ExampleComponent extends React.PureComponent {
  render () {
    return (
      <div>
        <TheAsideStyle/>
        <TheAside.Container>
          <TheAside.For>
            <div>
              This is the main content aside for
            </div>
          </TheAside.For>
          <TheAside>
            <div style={{
              background: '#F0F0F0',
              padding: '8px',
              width: '128px'
            }}>This is aside
            </div>
          </TheAside>
        </TheAside.Container>
      </div>

    )
  }
}

export default ExampleComponent
