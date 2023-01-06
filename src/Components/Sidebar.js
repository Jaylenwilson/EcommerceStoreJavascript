import React, { useState } from 'react';
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiShoppingCartFill } from 'react-icons/ri';
import { MdFavorite } from 'react-icons/md';
import { GoPackage } from 'react-icons/go';
import { BsFilterCircle, BsSearch } from 'react-icons/bs';
import { Container, Row, Col } from 'reactstrap';

export default function Sidebar(props) {

    // TODO
    // 1. create animation that transitions from toolbar to search input
    // 2. add ternary logic that displays which ever tool is selected
    // 3. create style that shows when a tool in toolbar is active

    const [wishListActive, setWishListActive] = useState(false);
    const [shoppingCartActive, setShoppingCartActive] = useState(false);
    const [ordersActive, setOrdersActive] = useState(false);
    const [filtersActive, setFiltersActive] = useState(true);


    return (
        <div>
            <div>
                <Button size='md'
                    color="secondary"
                    onClick={props.handleShow}
                >

                    <GiHamburgerMenu size='32px' />
                </Button>
                <Offcanvas show={props.show}
                    onHide={props.handleClose}                >
                    <OffcanvasHeader closeButton>
                        <ButtonGroup size='md' aria-label="Basic example">
                            <Button className="shoppingcart" variant="primary"><RiShoppingCartFill size='20px' title="Shopping Cart" /></Button>
                            <Button className="favoriteicon" variant="primary"><MdFavorite size='20px' color="white" title="favorites" /></Button>
                            <Button variant="primary"><GoPackage size='20px' title="Shoebox/Orders" /></Button>
                            <Button variant="primary"><BsFilterCircle size='20px' title="Filters" /></Button>
                            <Button variant="primary"><BsSearch size='20px' title="Search" /></Button>
                        </ButtonGroup>
                    </OffcanvasHeader >
                    <OffcanvasBody >
                        {filtersActive ?
                            <Container fluid>
                                <Row className="justify-content-center d-flex align-items-center my-5">
                                    <Col xs={4} className="justify-content-center d-flex align-items-center" sm={4}>
                                        <Button size="large">Men</Button>
                                    </Col>
                                    <Col xs={4} className="justify-content-center d-flex align-items-center" sm={4}>
                                        <Button size="large">Women</Button>
                                    </Col>
                                    <Col xs={4} className="justify-content-center d-flex align-items-center" sm={4}>
                                        <Button size="large">Kids</Button>
                                    </Col>
                                </Row>
                                <h5>Sizes/US:</h5>
                                <Row className="my-3">
                                    <Col xs={2}>
                                        <Button size="small">4</Button>
                                    </Col>
                                    <Col xs={2}>
                                        <Button size="small">4.5</Button>
                                    </Col>
                                    <Col xs={2}>
                                        <Button size="small">5</Button>
                                    </Col>
                                    <Col xs={2}>
                                        <Button size="small">6</Button>
                                    </Col>
                                    <Col xs={2}>
                                        <Button size="small">6.5</Button>
                                    </Col>
                                    <Col xs={2}>
                                        <Button size="small">7</Button>
                                    </Col>
                                </Row>
                                <Row className="my-3">
                                    <Col xs={2}>
                                        <Button size="small">7.5</Button>
                                    </Col>
                                    <Col xs={2}>
                                        <Button size="small">8</Button>
                                    </Col>
                                    <Col xs={2}>
                                        <Button size="small">8.5</Button>
                                    </Col>
                                    <Col xs={2}>
                                        <Button size="small">9</Button>
                                    </Col>
                                    <Col xs={2}>
                                        <Button size="small">9.5</Button>
                                    </Col>
                                </Row>
                                <Row className="my-3">
                                    <Col xs={2}>
                                        <Button size="small">10</Button>
                                    </Col>
                                    <Col xs={2}>
                                        <Button size="small">10.5</Button>
                                    </Col>
                                    <Col xs={2}>
                                        <Button size="small">11</Button>
                                    </Col>
                                    <Col xs={2}>
                                        <Button size="small">11.5</Button>
                                    </Col>
                                    <Col xs={2}>
                                        <Button size="small">12</Button>
                                    </Col>
                                </Row>
                                <Row className="my-3">
                                    <Col xs={2}>
                                        <Button size="small">12.5</Button>
                                    </Col>
                                    <Col xs={2}>
                                        <Button size="small">13</Button>
                                    </Col>
                                    <Col xs={2}>
                                        <Button size="small">14</Button>
                                    </Col>
                                    <Col xs={2}>
                                        <Button size="small">15</Button>
                                    </Col>
                                </Row>
                                <h5>Prices:</h5>
                                <Row className="my-4">
                                    <Col xs={6}>
                                        <Button>Lowest - Highest</Button>
                                    </Col>
                                    <Col xs={6}>
                                        <Button>Highest - Lowest</Button>
                                    </Col>

                                </Row>
                            </Container>
                            : null}
                        {shoppingCartActive ?
                            <Container fluid>
                                <Row>

                                </Row>
                            </Container>
                            : null}

                        { }
                    </OffcanvasBody>
                </Offcanvas>
            </div>

        </div>
    )
}
