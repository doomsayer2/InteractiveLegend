import React, { Fragment } from 'react';
import { Divider, Button, Row, Col } from 'antd';

const Greeting = ({ startMainApp }) => {
  return (
    <Fragment>
      <Row type="flex" justify="start">
        <Col span={22}>
          <h3>Study by University of Applied Sciences Austria</h3>
        </Col>
        <Col span={2}>
          <img id="fhLogo" alt="FH Logo" src="fh_logo.svg" />
        </Col>
      </Row>
      <Divider />
      <Row type="flex" justify="start">
        <h4>Onboarding Techniques</h4>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </Row>
      <Divider />
      <Row type="flex" justify="start">
        <h4>Attention!</h4>
        <h5>Please read the instrcutions before you proceed!</h5>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam
        </p>
      </Row>
      <Divider />
      <Row type="flex" justify="center">
        <Button
          type="default"
          className="btn-greeting"
          size="large"
          shape="round"
          onClick={() => startMainApp()}
        >
          Proceed
        </Button>
      </Row>
    </Fragment>
  );
};

export default Greeting;
