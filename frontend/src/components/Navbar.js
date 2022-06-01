import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = ({ click }) => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to="/"><h2>Shop Of You</h2></Link>
            </div>

            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className='cart__link'>
                        <i className='fas fa-shopping-cart' />
                        <span>
                            Cart
                            <span className='cartlogo_badge'>0</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/" >
                        Shop
                    </Link>
                </li>
            </ul>

            <div className='hamburger__menu' onClick={click}>
                <i className="fas fa-bars"></i>
            </div>
        </nav>
    );
};

export default Navbar;