import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap'

import Fretboard from './fretboard'
import Intervals from './intervals'

class App extends Component {
  state = {
    intervals: [{
      name: 'First',
      roman: 'I',
      selected: true,
      type: 'first',
    }, {
      name: 'minor Second',
      roman: 'ii',
      selected: false,
      type: 'second',
    }, {
      name: 'major Second',
      roman: 'II',
      selected: false,
      type: 'second',
    }, {
      name: 'minor Third',
      roman: 'iii',
      selected: false,
      type: 'third',
    }, {
      name: 'major Third',
      roman: 'III',
      selected: false,
      type: 'third',
    }, {
      name: 'Fourth',
      roman: 'IV',
      selected: false,
      type: 'fourth',
    }, {
      name: 'devils Fourth',
      roman: 'ivº',
      selected: false,
      type: 'fourth',
    }, {
      name: 'Fifth',
      roman: 'IV',
      selected: false,
      type: 'fifth',
    }, {
      name: 'minor Sixth',
      roman: 'vi',
      selected: false,
      type: 'sixth',
    }, {
      name: 'major Sixth',
      roman: 'VI',
      selected: false,
      type: 'sixth',
    }, {
      name: 'minor Seventh',
      roman: 'vii',
      selected: false,
      type: 'seventh',
    }, {
      name: 'major Seventh',
      roman: 'VII',
      selected: false,
      type: 'seventh',
    }]
  }

  handleIntervalClick = (idx) => {
    const { intervals } = this.state
    intervals[idx].selected = !intervals[idx].selected

    this.setState({ intervals })
  }

  render() {
    const { intervals } = this.state

    return (
      <Grid fluid>
        <Row>
          <Col xs={8}>
            <Row>
              <Col xs={12}>
                <div>Root</div>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <div>Intervals</div>
                <Intervals intervals={intervals} handleClick={this.handleIntervalClick} />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <div>Circle?</div>
              </Col>
            </Row>
          </Col>
          <Col xs={4}>
            <Row>
              <Col xs={12}>
                <div>Fretboard</div>
                <Fretboard intervals={intervals} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
