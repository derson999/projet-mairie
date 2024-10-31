import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Consulter () {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Button variant="primary">AGENDA</Button>
      </Card.Body>
    </Card>
  );
}

export default Consulter;