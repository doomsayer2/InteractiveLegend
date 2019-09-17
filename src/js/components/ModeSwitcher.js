import React, { Fragment } from 'react';
import { Switch, Tooltip } from 'antd';
import * as d3 from 'd3';

const ModeSwitcher = () => {
  const tooltipText =
    'Toggling the button will show either all hints or let you explore them step by step. However always the current one you have active - stays active';

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
      <Tooltip title={tooltipText} arrowPointAtCenter>
        <small style={{ marginRight: 10 + 'px' }}>All Hints</small>
        <Switch
          checkedChildren={'On'}
          unCheckedChildren={'Off'}
          defaultChecked={false}
          onClick={toggle}
        ></Switch>
      </Tooltip>
    </Fragment>
  );
};

export default ModeSwitcher;
