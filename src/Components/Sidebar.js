import React, { useState, useMemo, useCallback, useReducer } from 'react';
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody, ButtonGroup } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiShoppingCartFill } from 'react-icons/ri';
import { MdFavorite } from 'react-icons/md';
import { GoPackage } from 'react-icons/go';
import { BsFilterCircle, BsSearch } from 'react-icons/bs';
import { Container, Row, Col } from 'reactstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap';


const Sidebar = ({ show, handleShow, handleClose }) => {

    const [selectedOption, setSelectedOption] = useState('');
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
                <div>
                    <DropdownButton id="kids-dropdown" title={selectedOption || "Select Kids Category"}>
                        <Dropdown.Item eventKey="boys" onSelect={(eventKey) => setSelectedOption(eventKey)}>Boys</Dropdown.Item>
                        <Dropdown.Item eventKey="girls" onSelect={(eventKey) => setSelectedOption(eventKey)}>Girls</Dropdown.Item>
                    </DropdownButton>                </div>
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
