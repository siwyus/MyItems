import React, { Component, useRef } from "react";
import PrintItems from "./PrintItems";
import ReactToPrint from "react-to-print";
import { Container } from "react-bootstrap";

class Print extends Component {
  render() {
    return (
      <div className="print">
        <PrintItems />
      </div>
    );
  }
}

const PrintThis = () => {
  const componentRef = useRef();
  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <button className="btn btn-success btn-lg">Print this out!</button>
        )}
        content={() => componentRef.current}
      />
      <Container style={{ display: "none" }}>
        <Print ref={componentRef} />
      </Container>
    </div>
  );
};

export default PrintThis;
