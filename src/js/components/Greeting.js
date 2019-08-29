import React, { Fragment } from 'react';
import { Divider, Button } from 'antd';

const Greeting = ({ startMainApp }) => {
  return (
    <Fragment>
      <h2>FH Logo</h2>
      <Divider />
      <h3>Onboarding Techniques</h3>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
      <Divider />
      <h3>Attention!</h3>
      <h4>Please read the instrcutions before you proceed!</h4>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam
      </p>
      <Divider />
      <Button
        type="default"
        className="btn-greeting"
        size="large"
        shape="round"
        onClick={() => startMainApp()}
      >
        Proceed
      </Button>
    </Fragment>
  );
};

export default Greeting;
