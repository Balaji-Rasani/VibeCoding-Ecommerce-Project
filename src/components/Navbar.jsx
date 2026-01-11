import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout, cart } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Hide navbar on login page
  if (location.pathname === '/login') {
    return null;
  }

  // Handle logout
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Calculate total items in cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/products" className="navbar-brand">
          Mini E-Commerce
        </Link>

        <div className="navbar-links">
          {user && (
            <>
              <Link to="/products" className="nav-link">
                Products
              </Link>
              <Link to="/cart" className="nav-link cart-link">
                Cart
                {cartItemCount > 0 && (
                  <span className="cart-badge">{cartItemCount}</span>
                )}
              </Link>
              <Link to="/orders" className="nav-link">
                Orders
              </Link>
              <div className="user-info">
                <span className="user-email">{user.email}</span>
                <button onClick={handleLogout} className="logout-button">
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
