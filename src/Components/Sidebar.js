import React, { useState } from 'react';
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiShoppingCartFill } from 'react-icons/ri';
import { MdFavorite } from 'react-icons/md';
import { GoPackage } from 'react-icons/go';
import { BsFilterCircle, BsSearch } from 'react-icons/bs';

export default function Sidebar(props) {

    const [wishListActive, setWishListActive] = useState(false);
    const [shoppingCartActive, setShoppingCartActive] = useState(false);
    const [ordersActive, setOrdersActive] = useState(false);
    const [filtersActive, setFiltersActive] = useState(true);


    return (
        <div>
            <div>
                <Button size='md'
                    color="primary"
                    onClick={props.handleShow}
                >

                    <GiHamburgerMenu size='32px' />
                </Button>
                <Offcanvas show={props.show}
                    onHide={props.handleClose}                >
                    <OffcanvasHeader closeButton>
                        <ButtonGroup size='md' aria-label="Basic example">
                            <Button className="shoppingcart" variant="secondary"><RiShoppingCartFill size='20px' title="Shopping Cart" /></Button>
                            <Button className="favoriteicon" variant="secondary"><MdFavorite size='20px' color="white" title="favorites" /></Button>
                            <Button variant="secondary"><GoPackage size='20px' title="Shoebox/Orders" /></Button>
                            <Button variant="secondary"><BsFilterCircle size='20px' title="Filters" /></Button>
                            <Button variant="secondary"><BsSearch size='20px' title="Search" /></Button>
                        </ButtonGroup>
                    </OffcanvasHeader >
                    <OffcanvasBody>
                        <strong>
                            This is the Offcanvas body.
                    </strong>
                    </OffcanvasBody>
                </Offcanvas>
            </div>

        </div>
    )
}
