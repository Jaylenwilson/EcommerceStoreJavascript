import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, } from 'reactstrap';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Logo from '../assets/sluggs.png';

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
                    <Row className="px-1">
                        <Col>
                            <Sidebar show={show} handleClose={handleClose} setShow={setShow} handleShow={handleShow} />
                        </Col>
                        <Col>
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </Container>
            </nav>
        </>
    )
}
