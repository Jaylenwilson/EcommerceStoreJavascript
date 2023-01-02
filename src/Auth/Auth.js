import React, { useState } from 'react'
import { Navigate } from 'react-router'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
// import Form from 'react-bootstrap/Form';

const Auth = (props) => {
    console.log(props)

    //stat evariable for login & signup

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [loginActive, setLoginActive] = useState(false);


    //function to create account 
    const basicSignUp = async (e) => {
        e.preventDefault();

        await fetch("http://localhost:3000/auth/register", {
            method: 'POST',
            body: JSON.stringify({
                users: {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                    address1: address1,
                    address2: address2,
                    city: city,
                    state: state,
                    zipcode: zipcode
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(data => data.json())
            .then(data => {
                console.log(data.firstName)
                if (data.user) {
                    props.setSessionToken(data.sessionToken);
                    props.updateToken(data.sessionToken, data.user.firstName, data.user.role);
                    props.setUserId(data.user.id)

                }
            })
            .catch(err => console.log(err))

    }

    const basicLogin = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                users: {
                    email: email,
                    password: password
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(data => data.json())
            .then(data => {
                props.updateToken(data.sessionToken, data.user.firstName, data.user.role)
            })
            .catch(err => console.log(err))

    }

    const toggleForm = () => {
        setLoginActive(!loginActive)
    }

    // const handleChange = e => {
    //     const { name, value } = e.targetset
    // }
    return (
        <>
            {
                loginActive ?
                    <div className="registerform">
                        <Form onSubmit={basicSignUp}>
                            <h1>Register</h1>
                            <FormGroup>
                                <Label htmlFor="firstname">First Name</Label>
                                <Input type="text" name="firstname" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="lastname">Last Name</Label>
                                <Input type="text" name="lastname" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input type="text" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="address1">Address</Label>
                                <Input type="text" name="address1" value={address1} onChange={(e) => { setAddress1(e.target.value) }} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="address2">Address 2</Label>
                                <Input type="text" name="address2" value={address2} onChange={(e) => { setAddress2(e.target.value) }} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="city">City</Label>
                                <Input type="text" name="city" value={city} onChange={(e) => { setCity(e.target.value) }} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="state">State</Label>
                                <Input type="text" name="state" value={state} onChange={(e) => { setState(e.target.value) }} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="name">Zipcode</Label>
                                <Input type="text" name="zipcode" value={zipcode} onChange={(e) => { setZipcode(e.target.value) }} />
                            </FormGroup>
                            <Button type='submit'>Submit</Button>
                            {props.userId !== "" && <Navigate to='/' />}
                        </Form>
                        <p>Already have an account <Button onClick={toggleForm}>Sign in</Button> </p>
                    </div>
                    :
                    <div>
                        <Form onSubmit={basicLogin}>
                            <h1>Login</h1>
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input type="text" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }}></Input>
                            </FormGroup>
                        </Form>
                        <p>Dont have an account? <Button onClick={toggleForm}>Register here</Button> </p>
                    </div>
            }

        </>
    )
}
export default Auth