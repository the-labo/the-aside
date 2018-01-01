'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import TheAsideStyle from './TheAsideStyle'
import { htmlAttributesFor, eventHandlersFor } from 'the-component-util'

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
}

TheAside.Style = TheAsideStyle

TheAside.propTypes = {}

TheAside.defaultProps = {}

TheAside.displayName = 'TheAside'

export default TheAside
