import React, { useState, useMemo, useCallback, useReducer } from 'react';
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody, ButtonGroup } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiShoppingCartFill } from 'react-icons/ri';
import { MdFavorite } from 'react-icons/md';
import { GoPackage } from 'react-icons/go';
import { BsFilterCircle, BsSearch } from 'react-icons/bs';
import { Container, Row, Col } from 'reactstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Select from 'react-select';

const genderOptions = [
    { value: 'man', label: 'Man' },
    { value: 'woman', label: 'Woman' }
]

const kidsOptions = [
    { value: 'boy', label: 'Boy' },
    { value: 'girl', label: 'Girl' }
]

const brandOptions = [
    { value: 'nike', label: 'Nike' },
    { value: 'jordan', label: 'Jordan' },
    { value: 'adidas', label: 'Adidas' },
    { value: 'converse', label: 'Converse' },
    { value: 'crocs', label: 'Crocs' },
    { value: 'vans', label: 'Vans' },
    { value: 'designer', label: 'Designer' }
]

const priceOptions = [
    { value: '0-25', label: '$0 - $50' },
    { value: '25-50', label: '$25 - $50' },
    { value: '50-100', label: '$50 - $100' },
    { value: '150-1000', label: '$150+' }
]

const sizeOptions = [
    { value: '1.0', label: '1' },
    { value: '1.5', label: '1.5' },
    { value: '2', label: '2' },
    { value: '2.5', label: '2.5' },
    { value: '3', label: '3' },
    { value: '3.5', label: '3.5' },
    { value: '4', label: '4' },
    { value: '4.5', label: '4.5' },
    { value: '5', label: '5' },
    { value: '5.5', label: '5.5' },
    { value: '6', label: '6' },
    { value: '6.5', label: '6.5' },
    { value: '7', label: '7' },
    { value: '7.5', label: '7.5' },
    { value: '8', label: '8' },
    { value: '8.5', label: '8.5' },
    { value: '9', label: '9' },
    { value: '9.5', label: '9.5' },
    { value: '10', label: '10' },
    { value: '10.5', label: '10.5' },
    { value: '11', label: '11' },
    { value: '11.5', label: '11.5' },
    { value: '12', label: '12' },
    { value: '12.5', label: '12.5' },
    { value: '13', label: '13' },
    { value: '13.5', label: '13.5' },
    { value: '14', label: '14' },
    { value: '14.5', label: '14.5' },
    { value: '15', label: '15' },
    { value: '15.5', label: '15.5' },
    { value: '16', label: '16' },
    { value: '16.5', label: '16.5' },
    { value: '17', label: '17' },
    { value: '17.5', label: '17.5' },
    { value: '18', label: '18' },
]

const colorOptions = [
    { value: 'blue', label: 'Blue' },
    { value: 'brown', label: 'Brown' },
    { value: 'green', label: 'Green' },
    { value: 'gray', label: 'Gray' },
    { value: 'multi-color', label: 'Multi-color' },
    { value: 'orange', label: 'Orange' },
    { value: 'pink', label: 'Pink' },
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'white', label: 'White' },
    { value: 'yellow', label: 'Yellow' }

]

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
                    <Select options={genderOptions} placeholder='Gender' isMulti={true} classNamePrefix='Gender' className='filters' />
                    <Select options={kidsOptions} placeholder='Kids' isMulti={true} classNamePrefix='Kids' className='filters' />
                    <Select options={brandOptions} placeholder='Brand' isMulti={true} classNamePrefix='Brand' className='filters' />
                    <Select options={priceOptions} placeholder='Price' isMulti={true} classNamePrefix='Price' className='filters' />
                    <Select options={colorOptions} placeholder='Colors' isMulti={true} classNamePrefix='Colors' className='filters' />
                    <Select options={sizeOptions} isMulti={true} placeholder='Size' classNamePrefix='Size' className='filters' />
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
