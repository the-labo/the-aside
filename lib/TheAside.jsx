'use strict'

import c from 'classnames'
import React from 'react'
import { eventHandlersFor, htmlAttributesFor } from 'the-component-util'
import { TheContainer } from 'the-container'
import TheAsideStyle from './TheAsideStyle'

/**
 * Aside of the-component
 */
class TheAside extends React.Component {
  static Container ({
                      children,
                      className,
                    }) {
    return (
      <TheContainer className={c('the-aside-container', className)}>
        {children}
      </TheContainer>
    )
  }

  static For ({
                children,
                className,
              }) {
    return (
      <div className={c('the-aside-for', className)}>
        {children}
      </div>
    )
  }

  render () {
    const {props} = this
    const {
      children,
      className,
    } = props
    return (
      <aside {...htmlAttributesFor(props, {except: ['className']})}
             {...eventHandlersFor(props, {except: []})}
             className={c('the-aside', className)}
      >
        {children}
      </aside>
    )
  }
}

TheAside.Style = TheAsideStyle

TheAside.propTypes = {}

TheAside.defaultProps = {}

TheAside.displayName = 'TheAside'

export default TheAside
