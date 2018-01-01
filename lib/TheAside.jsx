'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import TheAsideStyle from './TheAsideStyle'
import { htmlAttributesFor, eventHandlersFor } from 'the-component-util'
import { TheContainer } from 'the-container'

/**
 * Aside of the-component
 */
class TheAside extends React.Component {
  render () {
    const s = this
    const {props} = s
    const {
      className,
      children
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

  static For ({
                className,
                children
              }) {
    return (
      <div className={c('the-aside-for', className)}>
        {children}
      </div>
    )
  }

  static Container ({
                      className,
                      children
                    }) {
    return (
      <TheContainer className={c('the-aside-container', className)}>
        {children}
      </TheContainer>
    )
  }
}

TheAside.Style = TheAsideStyle

TheAside.propTypes = {}

TheAside.defaultProps = {}

TheAside.displayName = 'TheAside'

export default TheAside
