import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { ModalTitle, Modal, ModalBody, ModalHeader, ModalFooter, } from 'react-bootstrap'
import { Container, Row, Col, Card, CardBody, CardText, CardTitle, } from 'reactstrap'
import Sidebar from './Sidebar';


const Home = ({ products, setProducts, productId, setProductId, clickedProduct, setClickedProduct, showDetails, setShowDetails }) => {
    const [selectedFilters, setSelectedFilters] = useState([]);

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
            }
        } catch (err) {
            console.log(err)
        }
    }

    const viewOneProduct = async () => {
        console.log(productId)
        console.log("Clicked Product:", clickedProduct)
        if (!productId && clickedProduct) return;
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
                setClickedProduct(item)
                console.log("Clicked item ", clickedProduct)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const activateDetails = (p) => {
        setProductId(p)
        setShowDetails(true)
        console.log("Show details state:", showDetails)
    }


    const productCards = () => {
        return products.map((product, index) => (
            <Col xs={12} md={6} lg={4} key={index}>
                <Card onClick={() => { activateDetails(product.id) }} className="card">
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
    }

    const productDetails = () => {
        if (clickedProduct && clickedProduct.product) {
            return (
                <>
                    <ModalHeader closeButton>
                        <h5>{clickedProduct.product.item}</h5>
                    </ModalHeader>
                    <ModalBody>
                        <img className="cardimg" src={clickedProduct.product.image} alt='product' />

                        <Container>
                            <Row className="mt-2 d-flex align-items-center">
                                <p>{clickedProduct.product.description}</p>
                            </Row>
                            <Row>
                                <p>{clickedProduct.product.price}</p>
                            </Row>
                        </Container>
                    </ModalBody>
                </>
            )
        }
        return <div>No Product details found</div>
    }



    useEffect(() => {
        viewProducts()
    }, [])

    useEffect(() => {
        viewOneProduct()
    }, [productId])

    useEffect(() => {
        console.log(clickedProduct)
    }, [clickedProduct])

    return (
        <div className="homewrapper">
            <div className="sidebarwrapper">
                <Container fluid>
                    <Col>
                        <Sidebar selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} products={products} />
                    </Col>
                </Container>
            </div>
            <div className="maincontent">
                <Container fluid>
                    <Row>
                        {productCards()}
                    </Row>
                </Container>
            </div>

            <Modal size={'xxl'} show={showDetails} onHide={() => setShowDetails(false)}>
                {productDetails()}
            </Modal>
        </div>
    )
}

export default Home
