import React, { Component, Fragment } from 'react';
import VegaChart from './VegaChart';
import Legend from './Legend';
import Greeting from './components/Greeting';
import ModeSwitcher from './components/ModeSwitcher';
import { d3Showcase } from './shared/d3Manipulations';
import { LoadingIndicator } from './shared/util';
import { CONCRETE, MAX_HINTS, VIZ_DESC } from './shared/constants';

import '../css/main.css';

// Antd
import { Row, Col, Divider, PageHeader, Button, message } from 'antd';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: true, // Used to show the loading indicator of the page
      init: false, // Used to decide if we greet the user or not
      view: CONCRETE, // Decide which Mode we are in or showing for the user
      mode: 0 // Show at which explain step we are
    };

    // Bindings here
    this.startMainApp = this.startMainApp.bind(this);
  }

  /**
   * We set the loading indicator to false in order to show that we are ready.
   */
  componentDidMount() {
    this.setState({ loading: false });
  }

  /**
   * This method is used in order to start the main application and switch away form the explain screen.
   */
  startMainApp() {
    this.setState({ mode: 0, init: false });
    message.success('Good! You are ready to go!');
  }

  /**
   * This method prevents the user from going over too many steps.
   * @param id of the current step we are in
   */
  changeVis(id) {
    let mode = id;
    if (id > MAX_HINTS) mode = MAX_HINTS;
    if (id < 0) mode = 0;
    this.setState({ mode: mode });
  }

  /**
   * This method is used to catch all the keybord inputs
   * @param event we can catch and react to
   */
  // handleKeyBoardInput(event) {
  //   if (event.key === '1') this.setState({ mode: 1 });
  //   if (event.key === '2') this.setState({ mode: 2 });
  //   if (event.key === '3') this.setState({ mode: 3 });
  //   if (event.key === '4') this.setState({ mode: 4 });
  //   if (event.key === '5') this.setState({ mode: 5 });
  // }

  render() {
    const { mode, view } = this.state;
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
              onBack={() => this.setState({ init: true })}
              title="Onboarding Test"
              subTitle="(C) Universtiy of applied sciences Austria"
              extra={[<p>FH LOGO</p>, <ModeSwitcher />]}
            />
            <div id="vizHeader" style={{ marginTop: 40 + 'px' }}>
              {/* <Row type="flex" justify="start">
                <Col span={24}>
                  <h1>{VIZ_TITLE}</h1>
                </Col>
              </Row> */}
              <Row type="flex" justify="start">
                <Col span={24}>
                  <h2>{VIZ_DESC}</h2>
                </Col>
              </Row>
            </div>
            <Row type="flex" justify="end">
              <Col span={24} className="pullRight">
                <Button
                  id="previous"
                  type="primary"
                  onClick={() => this.changeVis(mode - 1)}
                  disabled={mode === 0}
                >
                  Previous
                </Button>
                <Button
                  id="next"
                  type="primary"
                  onClick={() => this.changeVis(mode + 1)}
                  disabled={mode >= MAX_HINTS - 1}
                >
                  Next
                </Button>
              </Col>
            </Row>
            <Divider />
            <div id="vizMain">
              <Row type="flex" justify="space-between">
                <Col span={16}>
                  <Row>
                    <Col span={24}>
                      <VegaChart mode={mode} view={view} chartID={1} />
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <VegaChart mode={mode} view={view} chartID={2} />
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>
                      <VegaChart mode={mode} view={view} chartID={3} />
                    </Col>
                  </Row>
                </Col>
                <Col span={8}>
                  <Legend mode={mode} view={view} cb={i => this.changeVis(i)} />
                </Col>
              </Row>
            </div>
            <div id="vizControls" style={{ marginTop: 40 + 'px' }}>
              <p>Probably a Footer or so...</p>
            </div>
          </Fragment>

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
