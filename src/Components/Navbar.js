import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, } from 'reactstrap';
import { useState } from 'react';
import Sidebar from './Sidebar';
export default function Navbar() {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(false)
    return (
        <>
            <nav className="header">
                <Container>
                    <Row>
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
