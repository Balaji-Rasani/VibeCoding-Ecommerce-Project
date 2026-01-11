<<<<<<< HEAD
# VibeCoding-Ecommerce-Project
=======
# Mini Frontend E-Commerce Website

A fully functional frontend-only e-commerce website built with React, Vite, and CSS. This project demonstrates a complete e-commerce flow without any backend integration.

## Features

### 1. Mock Login
- User enters email and clicks login
- No password validation required
- Login state stored in React Context API
- Persistent login state using localStorage

### 2. Products Listing
- Displays static products from a local JavaScript file
- Each product shows:
  - Name
  - Price
  - Description
  - "Add to Cart" button
- Dynamic cart updates

### 3. Cart Management
- Add multiple products to cart
- Update product quantities
- Remove items from cart
- Real-time total price calculation
- Cart persisted in localStorage

### 4. Address Input
- Delivery address input on cart page
- Address stored temporarily in component state
- Required field validation before order placement

### 5. Order Placement
- Place order with cart items and address
- Cart automatically clears after order placement
- Orders saved to localStorage
- Automatic delivery date calculation (Order Date + 5 days)

### 6. Orders Page
- Display all placed orders
- Each order shows:
  - Order ID and date
  - List of products with quantities
  - Total amount
  - Delivery address
  - Expected delivery date (Order Date + 5 days)

## Technology Stack

- **React 18** - UI library
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **React Context API** - State management
- **localStorage** - Data persistence
- **CSS** - Styling (no frameworks)

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Login.jsx          # Login page component
│   │   ├── Products.jsx       # Products listing page
│   │   ├── Cart.jsx           # Shopping cart page
│   │   ├── Orders.jsx         # Orders history page
│   │   ├── Navbar.jsx         # Navigation component
│   │   └── *.css              # Component styles
│   ├── context/
│   │   └── AppContext.jsx     # React Context for state management
│   ├── data/
│   │   └── products.js        # Static products data
│   ├── App.jsx                # Main app component with routing
│   ├── App.css                # Global styles
│   └── main.jsx               # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`)

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Usage

1. **Login**: Enter any email address (e.g., `user@example.com`) and click "Login"
2. **Browse Products**: View available products on the Products page
3. **Add to Cart**: Click "Add to Cart" on any product
4. **View Cart**: Navigate to Cart page to see items and enter delivery address
5. **Place Order**: Enter delivery address and click "Place Order"
6. **View Orders**: Check the Orders page to see all your placed orders

## Key Features Implementation

### State Management
- Uses React Context API for global state management
- Three main state pieces: `user`, `cart`, and `orders`
- All states persisted to localStorage for data persistence across page refreshes

### Routing
- Protected routes requiring authentication
- Automatic redirect to login if not authenticated
- React Router DOM for navigation

### Data Persistence
- User login state persists in localStorage
- Cart persists in localStorage
- Orders persist in localStorage
- All data survives page refreshes

## Constraints Followed

✅ Frontend only - No backend or API calls  
✅ No payment integrations  
✅ React Context API for state management  
✅ localStorage for data persistence  
✅ React + Vite setup  
✅ Normal CSS (no CSS frameworks)  

## Browser Support

Modern browsers that support:
- ES6+ JavaScript features
- localStorage API
- CSS Grid and Flexbox

## License

This project is for educational purposes.
>>>>>>> cea37ca (added Mini E-Commerce Project)
