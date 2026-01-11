import { useAppContext } from '../context/AppContext';
import './Orders.css';

const Orders = () => {
  const { orders } = useAppContext();

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (orders.length === 0) {
    return (
      <div className="orders-container">
        <h1>My Orders</h1>
        <div className="empty-orders">
          <p>You haven't placed any orders yet</p>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-container">
      <h1>My Orders</h1>
      
      <div className="orders-list">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <div className="order-info">
                <h3>Order #{order.id}</h3>
                <p className="order-date">Placed on: {formatDate(order.date)}</p>
              </div>
              <div className="order-total">
                <span className="total-label">Total Amount:</span>
                <span className="total-value">${order.totalAmount.toFixed(2)}</span>
              </div>
            </div>

            <div className="order-details">
              <div className="order-items">
                <h4>Products:</h4>
                <ul className="items-list">
                  {order.items.map((item) => (
                    <li key={item.id} className="order-item">
                      <span className="item-name">{item.name}</span>
                      <span className="item-quantity">x{item.quantity}</span>
                      <span className="item-price">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="order-meta">
                <div className="meta-item">
                  <strong>Delivery Address:</strong>
                  <p>{order.address}</p>
                </div>
                <div className="meta-item">
                  <strong>Expected Delivery:</strong>
                  <p className="delivery-date">{formatDate(order.deliveryDate)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
