import React from 'react'
import PropTypes from 'prop-types'

class Fretboard extends React.Component {
  state = {
    fart: true
  }

  render() {
    const { fart }
    return (
      {fart && <div>Fretboard!!</div>}    
    )
  }
}

Fretboard.propTypes = {

}

Fretboard.defaultProps = {

}

export default Fretboard

