import React, { useState } from 'react'
import { Container, Row, Col, Card, CardBody, CardText, CardTitle, } from 'reactstrap';
import { useEffect } from 'react'

// Home page fetches all fo the products data and displays to the DOM

const Home = (props) => {

    // useEffect to call view products function every time the page re-renders
    useEffect(() => {
        viewProducts()
    }, [])

    const viewProducts = async () => {
        await fetch("http://localhost:3000/product/all", {
            method: 'GET',
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: `${localStorage.getItem("Authorization")}`
            })
        })
            // converting data to json 
            // if there is data set props.data to data.products 27 - 32
            .then(data => data.json())
            .then(data => {
                if (data.products) {
                    props.setProducts(data.products)
                    console.log("PRODUCTSID:", data.products[0].id)
                }
            })
            .catch((err) => console.log(err))
    }

    //Map function mapping eåch product into cards for display 39 -59

    const productsMap = () => {
        return props.products?.map((product, index) => {
            return (
                <Col md={4}>
                    <Card className="card" key={index}>
                        <img className="cardimg" src={product.image} alt="itemimage" />
                        <CardTitle className='title'>{product.item}</CardTitle>
                        <CardBody className="card-body">
                            <h6>{product.description}</h6>
                            <p className='itemcolor'></p>
                            <h5 className='price'>{product.price}</h5>
                        </CardBody>
                    </Card>
                </Col>
            )

        })
    }

    return (
        <div className="homewrapper">
            <div className="maincontent">
                <Container fluid>
                    <Row >
                        {productsMap()}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Home
