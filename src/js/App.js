import React, { Component, Fragment } from 'react';
import BarChart from './BarChart';
import Legend from './Legend';
import Greeting from './components/Greeting';

import '../css/main.css';
import 'intro.js/introjs.css';
import { ABSTRACT, CONCRETE } from './constants';
import { Empty, LoadingIndicator } from './util';

// Antd
import { Row, Col, Divider, PageHeader, Button, message } from 'antd';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: true, // Used to show the loading indicator of the page
      init: false, // Used to decide if we greet the user or not
      view: ABSTRACT, // Decide which Mode we are in or showing for the user
      mode: 6
    };

    // Bindings here
    this.startMainApp = this.startMainApp.bind(this);
  }

  /**
   * We set the loading indicator to false in order to show that we are ready
   */
  componentDidMount() {
    this.setState({ loading: false });
  }

  /**
   * This method is used in order to start the main application and switch away form the explain screen
   */
  startMainApp() {
    this.setState({ mode: 1, init: false });
    message.success('Good! You are ready to go!');
  }

  changeVis(id) {
    let mode = id;
    if (id > 5) mode = 5;
    if (id === 0) mode = 1;
    if (id < 0) mode = 6;
    this.setState({ mode: mode });
  }

  /**
   * Sets the view for the user
   * @param view to be seen by the user
   */
  setView(view) {
    this.setState({ view: view });
  }

  /**
   * This method is used to catch all the keybord inputs
   * @param event we can catch and react to
   */
  handleKeyBoardInput(event) {
    if (event.key === 'v') {
      if (this.state.view === ABSTRACT) this.setState({ view: CONCRETE });
      if (this.state.view === CONCRETE) this.setState({ view: ABSTRACT });
    }

    if (event.key === '1') this.setState({ mode: 1 });
    if (event.key === '2') this.setState({ mode: 2 });
    if (event.key === '3') this.setState({ mode: 3 });
    if (event.key === '4') this.setState({ mode: 4 });
    if (event.key === '5') this.setState({ mode: 5 });
  }

  render() {
    // noinspection ThisExpressionReferencesGlobalObjectJS
    return (
      <div>
        {this.state.loading ? (
          <LoadingIndicator css="centered" />
        ) : this.state.init ? (
          <div className="App row">
            <div className="column" style={{ marginTop: 10 + '%' }}>
              <Greeting startMainApp={this.startMainApp} />
            </div>
          </div>
        ) : (
          <Fragment>
            <PageHeader
              onBack={() => null}
              title="Onboarding Test"
              subTitle="(C) Universtiy of applied sciences Austria"
              extra={[
                <Button key="2" type="default">
                  Mode 1
                </Button>,
                <Button key="1" type="default">
                  Mode 2
                </Button>
              ]}
            />
            <div id="vizHeader">
              <Row type="flex" justify="start" style={{marginTop: 40 + 'px'}}>
                <Col span={24}>
                  <h1>For the Title</h1>
                </Col>
              </Row>
              <Row type="flex" justify="start">
                <Col span={24}>
                  <h2>For the Introduction</h2>
                </Col>
              </Row>
            </div>
            <Divider />
            <div id="vizMain">
              <Row type="flex" justify="space-between">
                <Col span={16} className="showBorders">
                  <p>Bar Chart</p>
                </Col>
                <Col span={8} className="showBorders">
                  <p>Controls</p>
                </Col>
              </Row>
            </div>
            <div id="vizControls" />
          </Fragment>

          //   <div
          //     className="App row"
          //     onKeyPress={e => this.handleKeyBoardInput(e)}
          //   >
          //     <div style={{ padding: 30 + 'px' }}>
          //       <button
          //         style={{ marginRight: 10 + 'px' }}
          //         className={
          //           this.state.view === ABSTRACT ? 'btn btn-info active' : 'btn'
          //         }
          //         onClick={() => this.setView(ABSTRACT)}
          //       >
          //         {' '}
          //         Abstract
          //       </button>
          //       <button
          //         className={
          //           this.state.view === CONCRETE ? 'btn btn-info active' : 'btn'
          //         }
          //         onClick={() => this.setView(CONCRETE)}
          //       >
          //         {' '}
          //         Concrete
          //       </button>
          //     </div>

          //     <div className="steps-form">
          //       <div className="steps-row setup-panel">
          //         <div className="steps-step">
          //           <button
          //             className={
          //               this.btnIsSelected(1)
          //                 ? 'btn btn-success'
          //                 : 'btn btn-secondary'
          //             }
          //             onClick={() => this.changeVis(1)}
          //           >
          //             1
          //           </button>
          //         </div>
          //         <div className="steps-step">
          //           <button
          //             className={
          //               this.btnIsSelected(2)
          //                 ? 'btn btn-success'
          //                 : 'btn btn-secondary'
          //             }
          //             onClick={() => this.changeVis(2)}
          //           >
          //             2
          //           </button>
          //         </div>
          //         <div className="steps-step">
          //           <button
          //             className={
          //               this.btnIsSelected(3)
          //                 ? 'btn btn-success'
          //                 : 'btn btn-secondary'
          //             }
          //             onClick={() => this.changeVis(3)}
          //           >
          //             3
          //           </button>
          //         </div>
          //         <div className="steps-step">
          //           <button
          //             className={
          //               this.btnIsSelected(4)
          //                 ? 'btn btn-success'
          //                 : 'btn btn-secondary'
          //             }
          //             onClick={() => this.changeVis(4)}
          //           >
          //             4
          //           </button>
          //         </div>
          //         <div className="steps-step">
          //           <button
          //             className={
          //               this.btnIsSelected(5)
          //                 ? 'btn btn-success'
          //                 : 'btn btn-secondary'
          //             }
          //             onClick={() => this.changeVis(5)}
          //           >
          //             5
          //           </button>
          //         </div>
          //       </div>
          //     </div>

          //     <div className="column left" id="legend">
          //       <div>
          //         <Legend
          //           mode={this.state.mode}
          //           view={this.state.view}
          //           cb={i => this.changeVis(i)}
          //         />
          //       </div>
          //     </div>
          //     <div className="double-column right">
          //       <div className="visualization">
          //         <BarChart mode={this.state.mode} view={this.state.view} />
          //       </div>
          //     </div>
          //     <div className="row 2">
          //       <div className="triple-column">
          //         <div className={'controlPanel'}>
          //           <button
          //             id="previous"
          //             className={'btn btn-info'}
          //             onClick={() => this.changeVis(this.state.mode - 1)}
          //             disabled={this.state.mode === 1}
          //           >
          //             {' '}
          //             Previous
          //           </button>
          //           <button
          //             id="next"
          //             className={'btn btn-info'}
          //             onClick={() => this.changeVis(this.state.mode + 1)}
          //             disabled={this.state.mode >= 5}
          //           >
          //             {' '}
          //             Next
          //           </button>
          //           {this.state.mode >= 5 ? (
          //             <Empty />
          //           ) : (
          //             <button
          //               id="skip"
          //               className={'btn btn-secondary'}
          //               onClick={() => this.changeVis(-1)}
          //             >
          //               {' '}
          //               Skip
          //             </button>
          //           )}
          //         </div>
          //       </div>
          //     </div>
          //   </div>
        )}
      </div>
    );
  }
}

export default App;
