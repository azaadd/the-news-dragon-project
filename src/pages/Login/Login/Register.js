import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [accept, setAccept] = useState(false);


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(name, photo, password, email);

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            form.reset();
        })
        .catch(error => {
            console.log(error);
        })


    }

    const handleAccept = event => {
        setAccept(event.target.checked)
    }

    return (
        <Container className='w-50 mx-auto'>
            <h2>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control name='photo' type="text" placeholder="Photo Url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    onClick={handleAccept}
                    name='accept' 
                    type="checkbox" 
                    label={<>Accept <Link to='/terms'>terms and conditions</Link></>} />
                </Form.Group>
                <Button variant="primary" disabled={!accept} type="submit">
                    Register
                </Button><br />
                <Form.Text className="text-secondary">
                    Already Have an Account ?<Link to='/login'> Login.</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;