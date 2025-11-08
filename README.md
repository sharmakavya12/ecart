# E-Cart
<img width="1873" height="879" alt="Screenshot 2025-11-08 112411" src="https://github.com/user-attachments/assets/7e4d3345-349e-428e-8942-8007baa1163b" />
<img width="1857" height="886" alt="Screenshot 2025-11-08 112423" src="https://github.com/user-attachments/assets/96564461-9401-4a1e-bc93-203c21d439b8" />
<img width="1880" height="877" alt="Screenshot 2025-11-08 112456" src="https://github.com/user-attachments/assets/6a56acd1-7a02-4ab5-902e-c22f75d59226" />
<img width="1018" height="893" alt="Screenshot 2025-11-08 112511" src="https://github.com/user-attachments/assets/acf23f41-5efa-4c64-92b0-1948fe4c7322" />
<img width="1817" height="855" alt="Screenshot 2025-11-08 112521" src="https://github.com/user-attachments/assets/33168623-3f53-4a97-8827-b7f254b08370" />

A full-stack e-commerce application built with React (frontend) and Node.js/Express (backend) with MongoDB for data storage. This project allows users to browse products, add them to a cart, and complete checkout with a receipt modal.

## Features

- **Product Listing**: Display a list of products with images, names, prices, and descriptions.
- **Cart Management**: Add/remove products from the cart, view cart items, and calculate total price.
- **Checkout Process**: Form-based checkout with user details, payment simulation, and receipt generation.
- **Responsive Design**: Built with Tailwind CSS for mobile-friendly UI.
- **Real-time Cart Updates**: Uses React Context for state management.
- **Backend API**: RESTful API for products, cart, and checkout operations.
- **Database Seeding**: Automatically seeds sample products on server startup if none exist.

## Tech Stack

### Frontend
- **React**: 19.1.1
- **Vite**: 7.1.7 (for fast development and building)
- **React Router DOM**: 7.9.5 (for routing)
- **Tailwind CSS**: 4.1.17 (for styling)
- **Axios**: 1.13.2 (for API calls)
- **Toastify**: 2.0.1 (for notifications)

### Backend
- **Node.js**: With ES modules
- **Express**: 5.1.0
- **MongoDB**: Via Mongoose 8.19.3
- **CORS**: 2.8.5 (for cross-origin requests)
- **Dotenv**: 17.2.3 (for environment variables)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance like MongoDB Atlas)
- npm or yarn

### Backend Setup
1. Navigate to the `backend` directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the `backend` directory with the following:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
4. Start the server:
   ```
   npm start
   ```
   The server will run on `http://localhost:5000` and seed sample products if the database is empty.

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
   The app will run on `http://localhost:5173` (default Vite port).

## Usage

1. Open your browser and go to `http://localhost:5173`.
2. Browse products on the homepage.
3. Add products to the cart using the "Add to Cart" button.
4. View cart items in the cart component (accessible via navbar).
5. Proceed to checkout by clicking "Checkout".
6. Fill in the checkout form and submit to simulate payment.
7. View the receipt modal upon successful checkout.

## API Endpoints

### Products
- `GET /api/products` - Fetch all products
- `GET /api/products/:id` - Fetch a single product by ID

### Cart
- `POST /api/cart` - Add item to cart (body: { productId, quantity })
- `GET /api/cart` - Get cart items
- `PUT /api/cart/:id` - Update cart item quantity
- `DELETE /api/cart/:id` - Remove item from cart

### Checkout
- `POST /api/checkout` - Process checkout (body: user details, cart items)

## Project Structure

```
ecart/
├── backend/
│   ├── config/
│   │   └── db.js              # Database connection
│   ├── controllers/
│   │   ├── cartController.js
│   │   ├── checkoutController.js
│   │   └── productController.js
│   ├── models/
│   │   ├── CartItem.js
│   │   └── Product.js
│   ├── routes/
│   │   ├── cartRoutes.js
│   │   ├── checkoutRoutes.js
│   │   └── productRoutes.js
│   ├── server.js             # Main server file
│   ├── package.json
│   └── .env                  # Environment variables (create this)
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Cart.jsx
│   │   │   ├── Checkoutform.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Productlist.jsx
│   │   │   └── Receiptmodal.jsx
│   │   ├── context/
│   │   │   └── CartContext.jsx
│   │   ├── pages

│   │   │   ├── Homepage.jsx
│   │   │   └── Checkoutpage.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
└── README.md
