import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import fruits from '../images/fruits.png'
import '../css/IndivListing.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function IndivListing() {
  return (
    <div>
        <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={fruits} className='indivlisting-img'/>
              <Card.Body className='indivlisting-details'>
                <Card.Title className='indivlisting-title'>Price</Card.Title>
                <Card.Text className='indivlisting-text'>
                    Item name
                </Card.Text>
                <Card.Text className='indivlisting-text'>
                    Item description
                </Card.Text>
                <Card.Text className='indivlisting-text'>
                    Item area
                </Card.Text>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
    </div>
  )
}

export default IndivListing