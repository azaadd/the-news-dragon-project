import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and coditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, facilis quo molestiae voluptatibus earum enim libero suscipit at dicta eligendi quibusdam ipsam sint temporibus, dolorem odit vitae. Eaque, dignissimos facere. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium recusandae possimus eius? Beatae magni, maiores unde eveniet autem deleniti asperiores libero modi nulla?
            </p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;