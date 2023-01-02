import React, { useState } from 'react'
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody, } from 'reactstrap';


export default function Sidebar(props) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(false)






    return (
        <div>
            <div>
                <Button
                    color="primary"
                    onClick={handleShow}
                >
                    Open
                </Button>
                <Offcanvas show={show}
                    onhide={handleClose}                >
                    <OffcanvasHeader closeButton>
                        Offcanvas
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
