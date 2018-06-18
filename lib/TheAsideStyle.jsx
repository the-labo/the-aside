'use strict'

import c from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { asStyleData } from 'the-component-util'
import { TheStyle } from 'the-style'

/** Style for TheAside */
const TheAsideStyle = ({className, id, options}) => (
  <TheStyle {...{id}}
            className={c('the-aside-style', className)}
            styles={TheAsideStyle.data(options)}
  />
)

TheAsideStyle.displayName = 'TheAsideStyle'
TheAsideStyle.propTypes = {
  /** Style options */
  options: PropTypes.object,
}

TheAsideStyle.defaultProps = {
  options: {},
}

TheAsideStyle.data = (options) => {
  const {ThemeValues} = TheStyle
  const {
    dominantColor = ThemeValues.dominantColor,
  } = options
  return Object.assign({},
    asStyleData('.the-aside', {
      '&': {
        display: 'block',
        flexGrow: 1,
        flexShrink: 0,
        minHeight: 1,
        width: '216px',
      },
    }),
    asStyleData('.the-aside-for', {
      '&': {
        display: 'block',
        flexGrow: 4,
        minWidth: '280px',
      },
    }),
    asStyleData('.the-aside-container', {
      '&': {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
      },
    })
  )
}

export default TheAsideStyle
