import React, { Component } from 'react';
import equal from 'fast-deep-equal';
import StepContent from './components/StepContent';
import { makeLegendBoxes } from './shared/d3Manipulations';
import { getData, getAllHints } from './shared/DataProvider';
import '../css/legend.css';

import { Steps, Row } from 'antd';
const { Step } = Steps;

// Do this before in order to make sure we have it
const hintsText = getAllHints().text;

export default class Legend extends Component {
  constructor(props) {
    super(props);
    this.state = { data: getData(props.mode).data };
  }

  componentDidMount() {
    makeLegendBoxes();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      !equal(this.props.mode, prevProps.mode)
    ) {
      this.setState({
        data: getData(this.props.mode).data
      });
    }
  }

  onChange = current => {
    console.log('onChange:', current);
  };

  render() {
    const { mode } = this.props;

    return (
      <div>
        <Row type="flex" justify="start" style={{ marginTop: 20 + 'px' }}>
          <Steps
            direction="vertical"
            onChange={this.onChange}
            current={mode}
            className={'stepsContainer'}
          >
            {hintsText.map((item, idx) => (
              <Step
                id={`step-${idx}`}
                key={idx}
                title={<StepContent content={item[`h${idx + 1}`]} />}
                status={mode === idx ? 'process' : 'wait'}
                onClick={() => this.props.cb(idx)}
              />
            ))}
          </Steps>
        </Row>
      </div>
    );
  }
}
