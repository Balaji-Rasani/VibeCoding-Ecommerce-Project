import { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const AppContext = createContext();

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

// Context Provider Component
export const AppProvider = ({ children }) => {
  // Authentication state - stored in localStorage
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Cart state - stored in localStorage
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Orders state - stored in localStorage
  const [orders, setOrders] = useState(() => {
    const storedOrders = localStorage.getItem('orders');
    return storedOrders ? JSON.parse(storedOrders) : [];
  });

  // Sync user to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  // Sync cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Sync orders to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  // Login function - only requires email, no password validation
  const login = (email) => {
    const userData = { email, loginTime: new Date().toISOString() };
    setUser(userData);
  };

  // Logout function
  const logout = () => {
    setUser(null);
    // Optionally clear cart on logout
    setCart([]);
  };

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if product already exists in cart
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        // If exists, increment quantity
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If not exists, add new item with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  // Update product quantity in cart
  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate total price of cart
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Place order - saves cart items and address as an order
  const placeOrder = (address) => {
    if (cart.length === 0) {
      return false;
    }

    const order = {
      id: Date.now(), // Simple ID generation using timestamp
      date: new Date().toISOString(),
      items: [...cart], // Copy cart items
      totalAmount: getCartTotal(),
      address: address,
      deliveryDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString() // Order date + 5 days
    };

    setOrders((prevOrders) => [order, ...prevOrders]);
    clearCart(); // Clear cart after placing order
    return true;
  };

  // Value object to be provided by context
  const value = {
    user,
    cart,
    orders,
    login,
    logout,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    getCartTotal,
    placeOrder
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
