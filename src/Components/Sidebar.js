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
                <div>
                    <DropdownButton role='menuitemcheckbox' id="filters-dropdown" title="Gender">
                        <Dropdown.Item eventKey="man" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Man</Dropdown.Item>
                        <Dropdown.Item role='menuitemcheckbox' eventKey="woman" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Woman</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="filters-dropdown" title="Kids">
                        <Dropdown.Item eventKey="man" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Man</Dropdown.Item>
                        <Dropdown.Item eventKey="woman" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Woman</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="filters-dropdown" title="Shopbyprice">
                        <Dropdown.Item eventKey="man" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Man</Dropdown.Item>
                        <Dropdown.Item eventKey="woman" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Woman</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="filters-dropdown" title="Brand">
                        <Dropdown.Item eventKey="man" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Man</Dropdown.Item>
                        <Dropdown.Item eventKey="woman" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Woman</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="filters-dropdown" title="Color">
                        <Dropdown.Item eventKey="man" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Man</Dropdown.Item>
                        <Dropdown.Item eventKey="woman" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Woman</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="filters-dropdown" title="Size">
                        <Dropdown.Item eventKey="man" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Man</Dropdown.Item>
                        <Dropdown.Item eventKey="woman" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Woman</Dropdown.Item>
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
}

export default Sidebar;
