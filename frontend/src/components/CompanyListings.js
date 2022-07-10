import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Navbar from "./Navbar";
import '../css/CompanyListings.css';
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fruit from '../images/fruits.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';


const CompanyListings = () => {

    const size = 8;
    const listingArr = [];

    const handleClick = () => {

    }

    return (
        <view className="view">
            <Navbar/>
            <div className='container'>
                <h2 className='header'>
                    Your Produce Listings
                </h2>
                <Row xs={2} md={4} className="rows">
                    {Array.from({ length: size }).map((_, idx) => (
                        <Col className='cols'>
                        <Card>
                            <Card.Img variant="top" src={fruit} />
                            <Card.Body>
                                <Card.Title>card title</Card.Title>
                                <Card.Text>
                                    Quality : 
                                </Card.Text>
                                <Card.Text> 
                                    Price : 
                                </Card.Text>
                                <Link to='info' className='itemview'><Button variant="primary">View</Button></Link>
                            </Card.Body>
                        </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <div>
                <Link to='createlisting' className='addbutton'>
                <button class="createbutton">
                    <span class="buttonText">Create New Listing</span>
                    <i class="ri-check-line icon"></i>
                </button>
                </Link>
            </div>
        </view>
    );
}

export default CompanyListings; 