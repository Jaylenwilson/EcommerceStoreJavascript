import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { Container, Row, Col, Card, CardBody, CardText, CardTitle } from 'reactstrap'

const Home = ({ products, setProducts, productId, setProductId }) => {

    const viewProducts = async () => {
        try {
            const response = await fetch('http://localhost:3000/product/all', {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Authorization: `${localStorage.getItem('Authorization')}`,
                }),
            })
            const { products } = await response.json()
            if (products) {
                setProducts(products)
                console.log('PRODUCTSID:', products[0].id)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const viewOneProduct = async () => {
        console.log(productId)
        try {
            const response = await fetch(`http://localhost:3000/product/${productId}`, {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Authorization: `${localStorage.getItem('Authorization')}`
                })
            })
            const item = await response.json()
            if (item) {
                console.log(item)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const activatePost = useCallback((p) => {
        setProductId(p)

        setTimeout(() => {
            viewOneProduct()
        }, 1000)
    }, [setProductId, viewOneProduct])

    const productCards = useMemo(() => {
        return products.map((product, index) => (
            <Col xs={12} md={6} lg={4} key={index}>
                <Card onClick={() => { activatePost(product.id) }} className="card">
                    <img className="cardimg" src={product.image} alt="itemimage" />
                    <CardTitle className="title">{product.item}</CardTitle>
                    <CardBody className="card-body">
                        <h6>{product.description}</h6>
                        <p className="itemcolor"></p>
                        <h5 className="price">{product.price}</h5>
                    </CardBody>
                </Card>
            </Col>
        ))
    }, [products, activatePost])

    useEffect(() => {
        viewProducts()
    }, [])

    // useEffect(() => {
    //     viewOneProduct()
    // }, [productId])

    return (
        <div className="homewrapper">
            <div className="maincontent">
                <Container fluid>
                    <Row>
                        {productCards}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Home
