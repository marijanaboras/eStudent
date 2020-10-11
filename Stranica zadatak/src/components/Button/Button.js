import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

export function Button() {
    return (
        <Link to='kupi'>
            <button className='btn'>Kupi</button>
        </Link>
    );
}

export default Button;