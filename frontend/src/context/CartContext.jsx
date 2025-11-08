import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from backend on mount
  useEffect(() => {
    const loadCart = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/cart');
        setCart(res.data.cart);
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    };
    loadCart();
  }, []);

  const addToCart = async (product) => {
    try {
      await axios.post('http://localhost:5000/api/cart', {
        productId: product._id,
        qty: 1,
      });
      // Reload cart from backend to ensure consistency
      const res = await axios.get('http://localhost:5000/api/cart');
      setCart(res.data.cart.map(item => ({
        id: item._id,
        name: item.product.name,
        price: item.product.price,
        qty: item.quantity,
        product: item.product
      })));
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const updateQuantity = async (id, newQty) => {
    try {
      if (newQty <= 0) {
        await removeFromCart(id);
        return;
      }
      await axios.put(`http://localhost:5000/api/cart/${id}`, {
        quantity: newQty,
      });
      // Reload cart
      const res = await axios.get('http://localhost:5000/api/cart');
      setCart(res.data.cart.map(item => ({
        id: item._id,
        name: item.product.name,
        price: item.product.price,
        qty: item.quantity,
        product: item.product
      })));
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const removeFromCart = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/${id}`);
      setCart(prev => prev.filter(p => p.id !== id));
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart, total, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext)
