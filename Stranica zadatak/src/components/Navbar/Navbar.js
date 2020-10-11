import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import '../Images/crveni.jpg';
import logo from '../Images/logo.png';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <Link to ='/' className='navbar-logo'>
                    Tesla <img src={logo} alt='Logo' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/model-s' className='nav-links' onClick={closeMobileMenu}>
                            Model S
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/model-3' className='nav-links' onClick={closeMobileMenu}>
                            Model 3
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/model-x' className='nav-links' onClick={closeMobileMenu}>
                            Model X
                        </Link>
                    </li>
                    <Button />
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
