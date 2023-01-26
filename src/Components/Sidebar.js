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
                        <Dropdown.Item eventKey="boys" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>boys</Dropdown.Item>
                        <Dropdown.Item eventKey="girls" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>girls</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="filters-dropdown" title="Shopbyprice">
                        <Dropdown.Item eventKey="$0 - $25" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>$0 - $25</Dropdown.Item>
                        <Dropdown.Item eventKey="$25 - $50" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>$25 - $50</Dropdown.Item>
                        <Dropdown.Item eventKey="$50 - $100" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>$50 - $100</Dropdown.Item>
                        <Dropdown.Item eventKey="$100 - $150" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>$100 - $150</Dropdown.Item>
                        <Dropdown.Item eventKey="$150+" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>$150+</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="filters-dropdown" title="Brand">
                        <Dropdown.Item eventKey="Nike" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Nike</Dropdown.Item>
                        <Dropdown.Item eventKey="Jordan" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Jordan</Dropdown.Item>
                        <Dropdown.Item eventKey="Addidas" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Addidas</Dropdown.Item>
                        <Dropdown.Item eventKey="Converse" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Converse</Dropdown.Item>
                        <Dropdown.Item eventKey="Vans" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Vans</Dropdown.Item>
                        <Dropdown.Item eventKey="Crocs" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Crocs</Dropdown.Item>
                        <Dropdown.Item eventKey="Designer" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Designer</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="filters-dropdown" title="Color">
                        <Dropdown.Item eventKey="black" onSelect={filter => setSelectedFilters([...selectedFilters, filter])}>Black</Dropdown.Item>
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
