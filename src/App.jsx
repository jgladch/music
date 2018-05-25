import React, { Component } from 'react';

import { Grid, Row, Col, Button } from 'react-bootstrap'

import Fretboard from './fretboard'

class App extends Component {
  render() {
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
                <Button bsStyle="primary">Button!</Button>
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
                <Fretboard />
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
