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


// 1. create filter options
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

const Sidebar = (props) => {

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

    // function to apply filters
    //1. filter thru products array targeting only selected filters
    // 2. this requires an event handler that gets the value of the selected filter when there is a change
    // 3. then when a filter is selcetd we want to set the state of selected filters
    //4. then we want to find products that match the selected filters and display them
    const filteredProducts = props.products.filter(
        product => product.brand === props.selectedBrand
            && product.price === props.selectedPrice
            && product.color === props.setSelectedColor
            && product.gender === props.setSelectedGender
            && product.setSelectedKids === props.setSelectedKids
    )

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
                    <Select menuPosition='relative' onChange={(selectedOption) => props.setSelectedGender(selectedOption)} options={genderOptions} placeholder='Gender' isMulti={true} classNamePrefix='Gender' className='filters' value={props.setSelectedGender} />
                    <Select options={kidsOptions} onChange={(selectedOption) => props.setSelectedKids(selectedOption)} placeholder='Kids' isMulti={true} classNamePrefix='Kids' className='filters' value={props.selectedKids} />
                    <Select options={brandOptions} onChange={(selectedOption) => props.setSelectedBrand(selectedOption)} placeholder='Brand' isMulti={true} classNamePrefix='Brand' className='filters' value={props.selectedBrand} />
                    <Select options={priceOptions} onChange={(selectedOption) => props.setSelectedPrice(selectedOption)} placeholder='Price' isMulti={true} classNamePrefix='Price' className='filters' value={props.selectedPrice} />
                    <Select options={colorOptions} onChange={(selectedOption) => props.setSelectedColor(selectedOption)} placeholder='Colors' isMulti={true} classNamePrefix='Colors' className='filters' value={props.selectedColors} />
                    <Select options={sizeOptions} onChange={(selectedOption) => props.setSelectedSize(selectedOption)} isMulti={true} placeholder='Size' classNamePrefix='Size' className='filters' value={props.selectedSize} />
                    {/* display filters */}
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
