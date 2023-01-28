import React, { useState, useMemo, useCallback, useReducer } from 'react';
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody, ButtonGroup } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiShoppingCartFill } from 'react-icons/ri';
import { MdFavorite } from 'react-icons/md';
import { GoPackage } from 'react-icons/go';
import { BsFilterCircle, BsSearch } from 'react-icons/bs';
import { Container, Row, Col } from 'reactstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap';


const Sidebar = ({ show, handleShow, handleClose, products, selectedFilters, setSelectedFilters }) => {

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


    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            if (selectedFilters.length === 0) return true;
            return selectedFilters.every(filter =>
                product.filters.includes(filter))
        });
    }, [products, selectedFilters])

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
                <div className="dropdown-wrapper">
                    <DropdownButton autoClose={false} role="menuitemcheckbox" id="filters-dropdown" title="Gender">
                        <Dropdown.Menu role='menuitemcheckbox'>
                            <Dropdown.Item itemType="" aria-checked={'false'} role='checkbox' stat eventKey="man" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Man</Dropdown.Item>
                            <Dropdown.Item role='checkbox' eventKey="woman" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Woman</Dropdown.Item>
                        </Dropdown.Menu>
                    </DropdownButton>
                    <DropdownButton autoClose={false} id="filters-dropdown" title="Kids">
                        <Dropdown.Item role='checkbox' eventKey="boys" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>boys</Dropdown.Item>
                        <Dropdown.Item role='checkbox' eventKey="girls" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>girls</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton autoClose={false} id="filters-dropdown" title="Shop by price">
                        <Dropdown.Item role='checkbox' eventKey="0 - 25" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>$0 - $25</Dropdown.Item>
                        <Dropdown.Item role='checkbox' eventKey="$25 - $50" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>$25 - $50</Dropdown.Item>
                        <Dropdown.Item role='checkbox' eventKey="$50 - $100" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>$50 - $100</Dropdown.Item>
                        <Dropdown.Item role='checkbox' eventKey="$100 - $150" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>$100 - $150</Dropdown.Item>
                        <Dropdown.Item role='checkbox' eventKey="$150+" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>$150+</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton autoClose={false} id="filters-dropdown" title="Brand">
                        <Dropdown.Item role='checkbox' eventKey="Nike" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Nike</Dropdown.Item>
                        <Dropdown.Item role='checkbox' eventKey="Jordan" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Jordan</Dropdown.Item>
                        <Dropdown.Item role='checkbox' eventKey="Addidas" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Addidas</Dropdown.Item>
                        <Dropdown.Item role='checkbox' eventKey="Converse" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Converse</Dropdown.Item>
                        <Dropdown.Item role='checkbox' eventKey="Vans" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Vans</Dropdown.Item>
                        <Dropdown.Item role='checkbox' eventKey="Crocs" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Crocs</Dropdown.Item>
                        <Dropdown.Item role='checkbox' eventKey="Designer" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Designer</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton autoClose={false} id="filters-dropdown" title="Color">
                        <Dropdown.Item role='checkbox' eventKey="black" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Black</Dropdown.Item>
                        <Dropdown.Item eventKey="blue" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Blue</Dropdown.Item>
                        <Dropdown.Item eventKey="brown" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Brown</Dropdown.Item>
                        <Dropdown.Item eventKey="green" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Green</Dropdown.Item>
                        <Dropdown.Item eventKey="gray" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Gray</Dropdown.Item>
                        <Dropdown.Item eventKey="multi-color" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Multi-color</Dropdown.Item>
                        <Dropdown.Item eventKey="orange" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Orange</Dropdown.Item>
                        <Dropdown.Item eventKey="pink" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Pink</Dropdown.Item>
                        <Dropdown.Item eventKey="purple" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Purple</Dropdown.Item>
                        <Dropdown.Item eventKey="red" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Red</Dropdown.Item>
                        <Dropdown.Item eventKey="white" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>White</Dropdown.Item>
                        <Dropdown.Item eventKey="yellow" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Yellow</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton autoClose={false} id="filters-dropdown" title="Size">
                        <Row >
                            <Col className="d-flex justify-content-center">
                                <Button className="sizebtn" eventKey="1.0" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>1.0</Button>
                                <Button className="sizebtn" eventKey="1.5" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>1.5</Button>
                                <Button className="sizebtn" eventKey="2.0" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>2</Button>
                            </Col>
                        </Row>

                        <Row >
                            <Col className="d-flex justify-content-center">
                                <Button className="sizebtn" eventKey="2.5" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>2.5</Button>
                                <Button className="sizebtn" eventKey="3.0" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>3</Button>
                                <Button className="sizebtn" eventKey="3.5" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>3.5</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <Button className="sizebtn" eventKey="4.0" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>4</Button>
                                <Button className="sizebtn" eventKey="4.5" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>4.5</Button>
                                <Button className="sizebtn" eventKey="5.0" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>5</Button>
                            </Col>
                        </Row>
                        <Row >
                            <Col className="d-flex justify-content-center">
                                <Button className="sizebtn" eventKey="5.5" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>5.5</Button>
                                <Button className="sizebtn" eventKey="6.0" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>6</Button>
                                <Button className="sizebtn" eventKey="6.5" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>6.5</Button>
                            </Col>
                        </Row>
                        <Row >
                            <Col className="d-flex justify-content-center">
                                <Button className="sizebtn" eventKey="7.0" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>7</Button>
                                <Button className="sizebtn" eventKey="7.5" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>7.5</Button>
                                <Button className="sizebtn" eventKey="8.0" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>8</Button>
                            </Col>
                        </Row>
                        <Row >
                            <Col className="d-flex justify-content-center">
                                <Button className="sizebtn" eventKey="8.5" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>8.5</Button>
                                <Button className="sizebtn" eventKey="9.0" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>9</Button>
                                <Button className="sizebtn" eventKey="9.5" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>9.5</Button>
                            </Col>
                        </Row>
                        <Row >
                            <Col className="d-flex justify-content-center">
                                <Button className="sizebtn" eventKey="10.0" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>10</Button>
                                <Button className="sizebtn" eventKey="10.5" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>10.5</Button>
                                <Button className="sizebtn" eventKey="11.0" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>11</Button>
                            </Col>
                        </Row>
                        <Row >
                            <Col className="d-flex justify-content-center">
                                <Button className="sizebtn" eventKey="11.5" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>11.5</Button>
                                <Button className="sizebtn" eventKey="12.0" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>12</Button>
                                <Button className="sizebtn" eventKey="12.5" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>12.5</Button>
                            </Col>
                        </Row>
                        <Row >
                            <Col className="d-flex justify-content-center">
                                <Button className="sizebtn" eventKey="13.0" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>13</Button>
                                <Button className="sizebtn" eventKey="13.5" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>13.5</Button>
                                <Button className="sizebtn" eventKey="14.0" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>14</Button>
                            </Col>
                        </Row>
                        <Row >
                            <Col className="d-flex justify-content-center">
                                <Button className="sizebtn" eventKey="14.5" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>14.5</Button>
                                <Button className="sizebtn" eventKey="15.0" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>15</Button>
                                <Button className="sizebtn" eventKey="15.5" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>15.5</Button>
                            </Col>
                        </Row>
                        <Row >
                            <Col className="d-flex justify-content-center">
                                <Button className="sizebtn" eventKey="16.0" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>16</Button>
                                <Button className="sizebtn" eventKey="16.5" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>16.5</Button>
                                <Button className="sizebtn" eventKey="17.0" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>17</Button>
                            </Col>
                        </Row>
                        <Row >
                            <Col className="d-flex justify-content-center">
                                <Button className="sizebtn" eventKey="17.5" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>17.5</Button>
                                <Button className="sizebtn" eventKey="18.0" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>18</Button>
                            </Col>
                        </Row>
                    </DropdownButton>
                    <div>
                        {filteredProducts.map(product => (
                            <div key={product.id}>
                                {product.name}
                            </div>
                        ))}
                    </div>
                </div>
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
            <OffcanvasHeader className="justify-content-center mb-3">
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
}

export default Sidebar;
