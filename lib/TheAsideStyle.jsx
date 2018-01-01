'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import TheStyle from 'the-style'
import { asStyleData } from 'the-component-util'

/** Style for TheAside */
const TheAsideStyle = ({id, className, options}) => (
  <TheStyle {...{id}}
            className={c('the-aside-style', className)}
            styles={TheAsideStyle.data(options)}
  />
)

TheAsideStyle.displayName = 'TheAsideStyle'
TheAsideStyle.propTypes = {
  /** Style options */
  options: PropTypes.object
}

TheAsideStyle.defaultProps = {
  options: {}
}

TheAsideStyle.data = (options) => {
  const {ThemeValues} = TheStyle
  const {
    dominantColor = ThemeValues.dominantColor
  } = options
  return Object.assign({},
    asStyleData('.the-aside', {
      '&': {
        display: 'block'
      }
    }),
    asStyleData('.the-aside-for', {
      '&': {
        display: 'block',
        flexGrow: 1
      }
    }),
    asStyleData('.the-aside-container', {
      '&': {
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap'
      }
    })
  )
}

export default TheAsideStyle
