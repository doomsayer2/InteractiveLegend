import React, { Fragment, useEffect, useState } from 'react';
import { Divider, Row, Col, Avatar, Button } from 'antd';
import { MAX_HINTS } from '../shared/constants';

const FinsihStudy = ({ mode }) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (mode === MAX_HINTS - 1) {
      setEnabled(true);
    }
  });

  const onFinishTest = () => {
    const lastLocation = document.referrer;
    window.location.href = lastLocation;
  };

  return (
    <Fragment>
      <Divider />
      <Row type="flex" justify="start">
        <Col span={1}>
          <Avatar
            style={{ backgroundColor: '#005096', verticalAlign: 'middle' }}
            size="large"
          >
            FHStp
          </Avatar>
        </Col>
        <Col span={16}>
          <p style={{ fontStyle: 'italic' }}>
            "If you are finished with exploring the visualization please click
            the button below and go back to your survey if you are not
            redirected automatically. <strong>Thank You!</strong>"
          </p>
        </Col>
      </Row>
      <Row type="flex" justify="start">
        <Col span={4} push={20}>
          <Button disabled={!enabled} type="primary" shape="round" block onClick={onFinishTest}>
            Done
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
};

export default FinsihStudy;
