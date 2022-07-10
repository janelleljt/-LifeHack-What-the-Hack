import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import fruits from '../images/fruits.png'
import '../css/IndivListing.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

function IndivListing(details) {
  return (
    <div>
        <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={fruits} className='indivlisting-img'/>
              <Card.Body className='indivlisting-details'>
                <Card.Title className='indivlisting-title'>{details.price}</Card.Title>
                <Card.Text className='indivlisting-text'>
                    {details.name}
                </Card.Text>
                <Card.Text className='indivlisting-text'>
                    {details.desc}
                </Card.Text>
                <Card.Text className='indivlisting-text'>
                    {details.location}
                </Card.Text>
                <Link to='/info' className='itemview'><Button variant="primary">View</Button></Link>
              </Card.Body>
            </Card>
    </div>
  )
}

export default IndivListing