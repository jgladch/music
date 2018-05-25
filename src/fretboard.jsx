import React from 'react'
import PropTypes from 'prop-types'
import _ from 'underscore'

const double = [12]
const dots = [3, 5, 7, 9, 15, 17]

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
      const isSingleFretDot = _.contains(dots, f) && idx === 2
      const isDoubleFretDot = _.contains(double, f) && (idx === 1 || idx === 3)
      const isFretDot = isSingleFretDot || isDoubleFretDot

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
        <div style={style}>
          {isFretDot && 
            <div style={{
              width: '6px',
              height: '6px',
              backgroundColor: 'black',
              position: 'relative',
              top: '15px',
              left: '15px',
              borderRadius: '3px',
            }} />
          }
        </div>
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

