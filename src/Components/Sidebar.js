import React from 'react'
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody, } from 'reactstrap';


export default function Sidebar(props) {
    const shoppingCart = []

    a




    return (
        <div>
            <div>
                <Button
                    color="primary"
                    onClick={function noRefCheck() { }}
                >
                    Open
            </Button>
                <Offcanvas
                    backdrop={false}
                    toggle={function noRefCheck() { }}
                >
                    <OffcanvasHeader toggle={function noRefCheck() { }}>
                        Offcanvas
                </OffcanvasHeader>
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
