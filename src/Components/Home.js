import React, { useEffect } from 'react'
import { Container, Row, Col, Card, CardBody, CardText, CardTitle } from 'reactstrap'

const Home = ({ products, setProducts }) => {
    useEffect(() => {
        viewProducts()
    }, [])

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

    return (
        <div className="homewrapper">
            <div className="maincontent">
                <Container fluid>
                    <Row>
                        {products?.map((product, index) => (
                            <Col xs={12} md={6} lg={4} key={index}>
                                <Card className="card">
                                    <img className="cardimg" src={product.image} alt="itemimage" />
                                    <CardTitle className="title">{product.item}</CardTitle>
                                    <CardBody className="card-body">
                                        <h6>{product.description}</h6>
                                        <p className="itemcolor"></p>
                                        <h5 className="price">{product.price}</h5>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Home
