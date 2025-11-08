const processCheckout = async (req, res) => {
  try {
    const { cartItems } = req.body;

    // Calculate total
    const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

    // Here you would typically save the order to database
    // For now, just return a receipt
    const receipt = {
      total,
      timestamp: new Date(),
      message: `Thank you for your purchase! Your order has been processed.`,
      items: cartItems,
    };

    res.json(receipt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { processCheckout };
