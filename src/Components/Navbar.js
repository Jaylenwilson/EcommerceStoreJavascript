import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, } from 'reactstrap';
import { useState } from 'react';
import Logo from '../assets/logo_transparent.png';

export default function Navbar() {


    const [show, setShow] = useState(false)
    const handleClose = () => {
        setShow(false)
        console.log(show)
    };
    const handleShow = () => {
        setShow(true)
        console.log(show)
    }




    return (
        <>
            <nav className="header">
                <Container fluid>
                    <Row className="px-1 ">
                        <Col className="d-flex justify-content-start align-items-center">
                            {/* <Sidebar show={show} handleClose={handleClose} setShow={setShow} handleShow={handleShow} /> */}
                        </Col>
                        <Col className="d-flex justify-content-start align-items-center">
                            <img className='logo' src={Logo} />
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </Container>
            </nav>
        </>
    )
}
