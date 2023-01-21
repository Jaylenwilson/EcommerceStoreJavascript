import React, { useState, useMemo, useCallback, useReducer } from 'react';
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody, ButtonGroup } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiShoppingCartFill } from 'react-icons/ri';
import { MdFavorite } from 'react-icons/md';
import { GoPackage } from 'react-icons/go';
import { BsFilterCircle, BsSearch } from 'react-icons/bs';
import { Container, Row, Col } from 'reactstrap';

const Sidebar = ({ show, handleShow, handleClose }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'SHOW_WISHLIST':
                return {
                    ...state,
                    section: 'wishlist',
                    showWishlist: true,
                    showShoppingCart: false,
                    showOrders: false,
                    showFilters: false,
                    showSearch: false,
                };
            case 'SHOW_SHOPPING_CART':
                return {
                    ...state,
                    section: 'shopping_cart',
                    showWishlist: false,
                    showShoppingCart: true,
                    showOrders: false,
                    showFilters: false,
                    showSearch: false,
                };
            case 'SHOW_ORDERS':
                return {
                    ...state,
                    section: 'orders',
                    showWishlist: false,
                    showShoppingCart: false,
                    showOrders: true,
                    showFilters: false,
                    showSearch: false,
                };
            case 'SHOW_FILTERS':
                return {
                    ...state,
                    section: 'filters',
                    showWishlist: false,
                    showShoppingCart: false,
                    showOrders: false,
                    showFilters: true,
                    showSearch: false,
                };
            case 'SHOW_SEARCH':
                return {
                    ...state,
                    section: 'search',
                    showWishlist: false,
                    showShoppingCart: false,
                    showOrders: false,
                    showFilters: false,
                    showSearch: true,
                };
            default:
                return state;
        }
    }, {
        section: 'filters',
        showWishlist: false,
        showShoppingCart: false,
        showOrders: false,
        showFilters: true,
        showSearch: false,
    });

    const section = useMemo(() => {
        if (state.showWishlist) {
            return <div>Wish List</div>;
        }
        if (state.showShoppingCart) {
            return <div>Shopping Cart</div>;
        }
        if (state.showOrders) {
            return <div>Orders</div>;
        }
        if (state.showFilters)
            return (
                <Container fluid>
                    <Row className="gendercontainer justify-content-center d-flex align-items-center my-5">
                        <Col xs={4} className="justify-content-center d-flex align-items-center p-0" sm={4}>
                            <Button className="gender-filter" size="large">Men</Button>
                        </Col>
                        <Col xs={4} className="justify-content-center d-flex align-items-center p-0" >
                            <Button className="gender-filter" size="large">Women</Button>
                        </Col>
                        <Col xs={4} className="justify-content-center d-flex align-items-center p-0" >
                            <Button className="gender-filter" size="large">Kids</Button>
                        </Col>
                    </Row>
                    <h5>Sizes/US:</h5>
                    <Row className="my-3 justify-content-center">
                        <Col xs={6}>
                            <Button size="medium">4</Button>
                        </Col>
                        <Col xs={6}>
                            <Button size="medium">4.5</Button>
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-center">
                        <Col xs={6}>
                            <Button size="medium">5</Button>
                        </Col>
                        <Col xs={6}>
                            <Button size="medium">6</Button>
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-center">
                        <Col xs={6}>
                            <Button size="medium">6.5</Button>
                        </Col>
                        <Col xs={6}>
                            <Button size="medium">7</Button>
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-center">
                        <Col xs={6}>
                            <Button size="medium">7.5</Button>
                        </Col>
                        <Col xs={6}>
                            <Button size="medium">8</Button>
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-center">
                        <Col xs={6}>
                            <Button size="medium">8.5</Button>
                        </Col>
                        <Col xs={6}>
                            <Button size="medium">9</Button>
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-center">
                        <Col xs={6}>
                            <Button size="medium">9.5</Button>
                        </Col>
                        <Col xs={6}>
                            <Button size="medium">10</Button>
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-center">
                        <Col xs={6}>
                            <Button size="medium">10.5</Button>
                        </Col>
                        <Col xs={6}>
                            <Button size="medium">11</Button>
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-center">
                        <Col xs={6}>
                            <Button size="medium">11.5</Button>
                        </Col>
                        <Col xs={6}>
                            <Button size="medium">12</Button>
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-center">
                        <Col xs={6}>
                            <Button size="medium">12.5</Button>
                        </Col>
                        <Col xs={6}>
                            <Button size="medium">13</Button>
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-center">
                        <Col xs={6}>
                            <Button size="medium">14</Button>
                        </Col>
                        <Col xs={6}>
                            <Button size="medium">15</Button>
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
            );
        if (state.showSearch) {
            return (
                <div>
                    {/* search input */}
                </div>
            );
        }
        return null;
    }, [state]);

    const handleShowWishlist = useCallback(() => {
        dispatch({ type: 'SHOW_WISHLIST' });
    }, []);

    const handleShowShoppingCart = useCallback(() => {
        dispatch({ type: 'SHOW_SHOPPING_CART' });
    }, []);

    const handleShowOrders = useCallback(() => {
        dispatch({ type: 'SHOW_ORDERS' });
    }, []);

    const handleShowFilters = useCallback(() => {
        dispatch({ type: 'SHOW_FILTERS' });
    }, []);

    const handleShowSearch = useCallback(() => {
        dispatch({ type: 'SHOW_SEARCH' });
    }, []);

    return (
        <div className="sidebar">
            <OffcanvasHeader className="justify-content-center">
                <ButtonGroup size="md" aria-label="Basic example">
                    <Button className="sidenavbtn" variant="primary" onClick={handleShowShoppingCart}>
                        <RiShoppingCartFill size="20px" title="Shopping Cart" />
                    </Button>
                    <Button className="sidenavbtn" variant="primary" onClick={handleShowWishlist}>
                        <MdFavorite size="20px" title="favorites" />
                    </Button>
                    <Button className="sidenavbtn" variant="primary" onClick={handleShowOrders}>
                        <GoPackage size="20px" title="Shoebox/Orders" />
                    </Button>
                    <Button className="sidenavbtn" variant="primary" onClick={handleShowFilters}>
                        <BsFilterCircle size="20px" title="Filters" />
                    </Button>
                    <Button className="sidenavbtn" variant="primary" onClick={handleShowSearch}>
                        <BsSearch size="20px" title="Search" />
                    </Button>
                </ButtonGroup>
            </OffcanvasHeader>
            <div>
                {section}
            </div>
        </div>

    );
};

export default Sidebar;
