import React from 'react'

class Intervals extends React.Component {
  

  render() {
    const { intervals, handleClick } = this.props

    const interval = (i, idx) => {
      const style = {
        padding: '5px 10px',
        border: '1px solid black',
        borderRadius: '3px',
        marginRight: '5px',
      }

      if (i.selected) {
        style.backgroundColor = 'grey'
      }

      return (
        <div key={JSON.stringify(i, idx)}>
          <div
            style={style}
            onClick={() => handleClick(idx)}
          >{i.roman}</div>
        </div>
      )
    }

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          width: '100%',
        }}
      >
        {intervals.map((i, idx) => interval(i, idx))}
      </div>
    )
  }
}


export default Intervals

