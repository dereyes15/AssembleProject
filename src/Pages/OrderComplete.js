import React from 'react';
import { Button } from 'reactstrap';

const pStyle = {
  padding: '2rem',
  textAlign: 'center'
};

const buttonStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

class OrderComplete extends React.Component {

  render() {
    return (
    <div>
      <h2> Order Complete </h2>

      <hr/>

      <p style={pStyle}> Hooray! Way to order those products. </p>
      <div style={buttonStyle}>
        <Button color="primary" >GO HOME </Button>
      </div>
    </div>
    );
  }
}

export default OrderComplete;
