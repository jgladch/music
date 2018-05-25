import React from 'react'
import PropTypes from 'prop-types'

class Fretboard extends React.Component {
  state = {
    strings: [{
      note: 'E',
    }, {
      note: 'A',
    }, {
      note: 'D',
    }, {
      note: 'G',
    }, {
      note: 'B',
    }, {
      note: 'E',
    }]
  }

  render() {
    const { strings } = this.state

    const frets = Array.apply(null, {length: 21}).map(Number.call, Number)

    const fret = (f, idx) => {
      const isLastString = idx === 5
      const isSecondLastString = idx === 4
      const isLastFret = f === 20

      const style = {
        height: '40px',
        width: '40px',
        borderTop: '3px solid black',
        borderLeft: '3px solid black',
      }

      if (isLastString) {
        style.width = '0px'
        style.borderLeft = 'none'
      }

      if (isSecondLastString) {
        style.borderRight = '3px solid black'
        style.width = '43px'
      }

      if (isLastFret) {
        style.borderBottom = '3px solid black'
        style.height = '43px'
      }

      return (
        <div style={style} />
      )
    }

    const string = (string, idx) => {
      const isLastString = idx === 5
      const style = {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        backgroundColor: 'brown',
      }

      if (isLastString) {
        style.width = '0px'
      }

      return (
        <div>
          <div>{string.note}</div>
          <div
            style={style}
          >
           {frets.map(f => fret(f, idx))}
          </div>
        </div>
      )
    }

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
        }}
      >
        {strings.map((s, idx) => string(s, idx))}
      </div>
    )
  }
}

Fretboard.propTypes = {

}

Fretboard.defaultProps = {

}

export default Fretboard

