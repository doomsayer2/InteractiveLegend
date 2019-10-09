import React, { Component, Fragment } from 'react';
import VegaLite from 'react-vega-lite';
import { Handler } from 'vega-tooltip';
import { getData } from './shared/DataProvider';

export default class VegaChart extends Component {
  constructor(props) {
    super(props);

    let initialSize = VegaChart.getScreenAppropriateSize(window.innerWidth);
    let fallbackSize = { width: 500, height: 500 };

    this.state = {
      width:
        initialSize && initialSize.width
          ? initialSize.width
          : fallbackSize.width,
      height:
        initialSize && initialSize.height
          ? initialSize.height
          : fallbackSize.height,
      cfg: getData(props.chartID)
    };

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  static getScreenAppropriateSize(windowWidth) {
    if (windowWidth <= 400) return { width: 175, height: 60 };
    if (windowWidth > 400 && windowWidth <= 768)
      return { width: 200, height: 80 };
    if (windowWidth > 768 && windowWidth <= 992)
      return { width: 300, height: 120 };
    if (windowWidth > 992 && windowWidth <= 1200)
      return { width: 400, height: 150 };
    if (windowWidth > 1200) return { width: 700, height: 150 };
  }

  updateDimensions() {
    let size = VegaChart.getScreenAppropriateSize(window.innerWidth);
    if (size && size.width && size.height)
      this.setState({ width: size.width, height: size.height });
  }

  render() {
    return (
      <Fragment>
        <VegaLite
          width={this.state.width}
          height={this.state.height}
          spec={this.state.cfg.spec}
          data={this.state.cfg.data}
          tooltip={new Handler().call}
          className={`vegaViz${this.props.chartID}`}
        />
      </Fragment>
    );
  }
}
