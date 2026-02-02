import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <header>
            <Link className='logo' to={'/'}>Logo</Link>

            <nav>
                <ul>
                    <li>
                        <Link className='link' to={'/menu'}>Menu</Link>
                    </li>
                    <li>
                        <Link className='link' to={'/contact'}>Contact</Link>
                    </li>
                    <li>
                        <Link className='link' to={'/services'}>Services</Link>
                    </li>
                </ul>
            </nav>
            <button>Sign in</button>
        </header>
    )
};

export default Header;