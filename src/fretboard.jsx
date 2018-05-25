import React from 'react'
import _ from 'underscore'

const double = [12]
const dots = [3, 5, 7, 9, 15, 17]
const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
const INTERVAL_COLOR_MAP = {
  first: 'red',
  second: 'grey',
  third: 'blue',
  fourth: 'yellow',
  fifth: 'purple',
  sixth: 'orange',
  seventh: 'green',
}

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
    }],
    rootNote: 'A',
  }

  handleClick = (fretIdx, strIdx) => {
    console.log('starting at: ', fretIdx, strIdx)
  }

  render() {
    const { strings, rootNote } = this.state
    const { intervals } = this.props

    const frets = Array.apply(null, {length: 21}).map(Number.call, Number)

    const fret = (f, idx) => {
      const isLastString = idx === 5
      const isSecondLastString = idx === 4
      const isFirstFret = f === 0
      const isLastFret = f === 20
      const isSingleFretDot = _.contains(dots, f) && idx === 2
      const isDoubleFretDot = _.contains(double, f) && (idx === 1 || idx === 3)
      const isFretDot = isSingleFretDot || isDoubleFretDot


      const string = strings[idx]
      const { note } = string
      const startNoteIndex = _.indexOf(notes, note)
      const rootIndex = _.indexOf(notes, rootNote)
      const currentNoteIndex = ((startNoteIndex + f) % 12)
      const intervalIndex = currentNoteIndex - rootIndex
      const currentNote = notes[currentNoteIndex]
      const currentInterval = intervals[intervalIndex]
      const { selected, type, roman } = currentInterval

      let style = {
        position: 'relative'
      }

      if (!isFirstFret) {
        style.height = '40px'
        style.width = '40px'
        style.borderTop = '3px solid black',
        style.borderLeft = '3px solid black',
        style.backgroundColor = 'brown'
      }

      if (isLastString) {
        style.width = '0px'
        style.borderLeft = 'none'
      }

      if (isSecondLastString && !isFirstFret) {
        style.borderRight = '3px solid black'
        style.width = '43px'
      }

      if (isLastFret) {
        style.borderBottom = '3px solid black'
        style.height = '43px'
      }

      return (
        <div
          style={style}
          onClick={() => this.handleClick(f, idx)}
          key={JSON.stringify({ f, idx, type: 'fret' })}
        >
          {selected && !isFirstFret &&
            <div
              style={{
                width: '25px',
                height: '25px',
                borderRadius: '12px',
                backgroundColor: INTERVAL_COLOR_MAP[type],
                position: 'relative',
                left: '-14px',
                top: '8px',
                border: '1px solid black',
              }}
            >
              <span style={{ paddingLeft: '10px', textAlign: 'center' }}>{roman}</span>
            </div>
          }
          {isFretDot && !isFirstFret &&
            <div
              style={{
                width: '6px',
                height: '6px',
                backgroundColor: 'black',
                position: 'absolute',
                top: '15px',
                left: '15px',
                borderRadius: '3px',
              }}
            />
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
      }

      if (isLastString) {
        style.width = '0px'
      }

      return (
        <div key={JSON.stringify({ string, idx })}>
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

export default Fretboard

