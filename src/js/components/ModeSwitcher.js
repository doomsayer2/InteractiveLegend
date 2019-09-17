import React, { Fragment } from 'react';
import { Switch, Icon } from 'antd';
import * as d3 from 'd3';

const ModeSwitcher = () => {
  const toggle = (checked, event) => {
    if (checked) {
      // TODO OTHER IDEA NOW:
      // Render just all steps if this is checked with different classes otherwise render them normally
      d3.selectAll('.ant-steps-item-wait').classed('makeVisible', true);
    } else {
      d3.selectAll('.ant-steps-item-wait').classed('makeVisible', false);
    }
  };

  return (
    <Fragment>
      <small style={{ marginRight: 10 + 'px' }}>Show all</small>
      <Switch
        checkedChildren={'On'}
        unCheckedChildren={'Off'}
        defaultChecked={false}
        onClick={toggle}
      ></Switch>
    </Fragment>
  );
};

export default ModeSwitcher;
