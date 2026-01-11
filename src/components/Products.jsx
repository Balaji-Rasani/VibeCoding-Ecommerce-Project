import { useAppContext } from '../context/AppContext';
import { products } from '../data/products';
import './Products.css';

const Products = () => {
  const { addToCart, cart } = useAppContext();

  // Check if product is in cart
  const isProductInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  // Get product quantity in cart
  const getProductQuantity = (productId) => {
    const cartItem = cart.find(item => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  // Handle add to cart
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="products-container">
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.map((product) => {
          const inCart = isProductInCart(product.id);
          const quantity = getProductQuantity(product.id);

          return (
            <div key={product.id} className="product-card">
              <div className="product-info">
                <div className="product-icon">{product.icon}</div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price.toFixed(2)}</p>
              </div>
              <button
                className={`add-to-cart-button ${inCart ? 'added-to-cart' : ''}`}
                onClick={() => handleAddToCart(product)}
              >
                {inCart ? (
                  <>
                    <span className="check-icon">✓</span>
                    Added to Cart ({quantity})
                  </>
                ) : (
                  'Add to Cart'
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
