import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Demo(props) {
  return (
    <div>
        
        <Card style={{ width: '20rem' }}>
       
      <Card.Body>
        <Card.Img variant='top' src='./2.jpg'/>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
      <button>{props.count}</button>
    </div>
  )
}

export default Demo
