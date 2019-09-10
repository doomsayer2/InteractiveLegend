import React, { Component } from 'react';
import StepContent from './components/StepContent';
import equal from 'fast-deep-equal';
import { getData, getAllHints } from './shared/DataProvider';
import '../css/legend.css';

import { Steps, Row } from 'antd';
const { Step } = Steps;

// Do this before in order to make sure we have it
const hintsText = getAllHints().text;

export default class Legend extends Component {
  constructor(props) {
    super(props);
    this.state = { text: getData(props.mode).text };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      !equal(this.props.mode, prevProps.mode) ||
      !equal(this.props.view, prevProps.view)
    ) {
      this.setState({
        text: getData(this.props.mode).text
      });
    }
  }

  getBtnClass(mode) {
    return this.props.mode === mode
      ? 'txtModeBtn btn btn-success'
      : 'txtModeBtn btn btn-secondary';
  }

  onChange = (current) => {
    console.log('onChange:', current);
  };

  render() {
    const { mode } = this.props;

    return (
      <div>
        <Row type="flex" justify="start" style={{marginTop: 20 + 'px'}}>
          <Steps
            direction="vertical"
            onChange={this.onChange}
            current={mode}
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
    // noinspection ThisExpressionReferencesGlobalObjectJS
    // return <div><h2>Understanding Barcharts</h2>
    //     <br/>
    //     {this.props.mode >= 1 ? <div className={"txtMode"}>
    //         <div>
    //             <button tabIndex={-1} className={this.getBtnClass(1)} onClick={() => this.props.cb(1)}>1</button>
    //         </div>
    //         <div dangerouslySetInnerHTML={{__html: this.state.text.one}}/>
    //     </div> : <Empty/>}
    //     {this.props.mode >= 2 ? <div className={"txtMode"}>
    //         <div>
    //             <button tabIndex={-1} className={this.getBtnClass(2)} onClick={() => this.props.cb(2)}>2</button>
    //         </div>
    //         <div dangerouslySetInnerHTML={{__html: this.state.text.two}}/>
    //     </div> : <Empty/>}
    //     {this.props.mode >= 3 ? <div className={"txtMode"}>
    //         <div>
    //             <button tabIndex={-1} className={this.getBtnClass(3)} onClick={() => this.props.cb(3)}>3</button>
    //         </div>
    //         <div dangerouslySetInnerHTML={{__html: this.state.text.three}}/>
    //     </div> : <Empty/>}
    //     {this.props.mode >= 4 ? <div className={"txtMode"}>
    //         <div>
    //             <button tabIndex={-1} className={this.getBtnClass(4)} onClick={() => this.props.cb(4)}>4</button>
    //         </div>
    //         <div dangerouslySetInnerHTML={{__html: this.state.text.four}}/>
    //     </div> : <Empty/>}
    //     {this.props.mode >= 5 ? <div className={"txtMode"}>
    //         <div>
    //             <button tabIndex={-1} className={this.getBtnClass(5)} onClick={() => this.props.cb(5)}>5</button>
    //         </div>
    //         <div dangerouslySetInnerHTML={{__html: this.state.text.five}}/>
    //     </div> : <Empty/>}
    // </div>
  }
}
