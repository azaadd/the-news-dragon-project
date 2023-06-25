import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4'>Login With</h4>
            <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login with google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login with github</Button>
            <div>
                <h4 className='mt-4'>Finds us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='mt-3'>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;