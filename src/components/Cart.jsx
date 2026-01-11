import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateCartQuantity, getCartTotal, placeOrder } = useAppContext();
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  // Handle place order
  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    if (!address.trim()) {
      alert('Please enter a delivery address');
      return;
    }

    // Place order and clear cart
    const success = placeOrder(address.trim());
    
    if (success) {
      alert('Order placed successfully!');
      navigate('/orders'); // Navigate to orders page
    }
  };

  // Handle quantity change
  const handleQuantityChange = (productId, newQuantity) => {
    const quantity = parseInt(newQuantity) || 0;
    updateCartQuantity(productId, quantity);
  };

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button className="continue-shopping-button" onClick={() => navigate('/products')}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      
      <div className="cart-content">
        <div className="cart-items-section">
          <h2>Cart Items ({cart.length})</h2>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">${item.price.toFixed(2)} each</p>
              </div>
              
              <div className="cart-item-controls">
                <div className="quantity-control">
                  <label>Qty:</label>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    className="quantity-input"
                  />
                </div>
                <p className="cart-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary-section">
          <div className="cart-summary">
            <h2>Order Summary</h2>
            
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            
            <div className="summary-row total-row">
              <span>Total:</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>

            <div className="address-section">
              <label htmlFor="address">Delivery Address *</label>
              <textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your complete delivery address..."
                rows="4"
                required
              />
            </div>

            <button
              className="place-order-button"
              onClick={handlePlaceOrder}
              disabled={!address.trim()}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
