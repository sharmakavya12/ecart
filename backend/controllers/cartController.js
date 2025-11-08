import CartItem from '../models/CartItem.js';
import Product from '../models/Product.js';

// Get cart items for a user (simplified - using session or user ID)
const getCart = async (req, res) => {
  try {
    // For simplicity, we'll use a hardcoded user ID or session
    // In a real app, you'd get this from authentication
    const userId = req.user?.id || 'guest';

    const cartItems = await CartItem.find({ user: userId }).populate('product');
    const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    res.json({ cart: cartItems, total });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addToCart = async (req, res) => {
  try {
    const { productId, qty = 1 } = req.body;
    const userId = req.user?.id || 'guest';

    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Check if item already in cart
    let cartItem = await CartItem.findOne({ product: productId, user: userId });

    if (cartItem) {
      cartItem.quantity += qty;
      await cartItem.save();
    } else {
      cartItem = new CartItem({
        product: productId,
        quantity: qty,
        user: userId,
      });
      await cartItem.save();
    }

    res.json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const userId = req.user?.id || 'guest';

    if (quantity <= 0) {
      return removeFromCart(req, res);
    }

    const cartItem = await CartItem.findOneAndUpdate(
      { _id: id, user: userId },
      { quantity },
      { new: true }
    ).populate('product');

    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    res.json(cartItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user?.id || 'guest';

    const cartItem = await CartItem.findOneAndDelete({ _id: id, user: userId });
    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getCart, addToCart, updateCartItem, removeFromCart };
