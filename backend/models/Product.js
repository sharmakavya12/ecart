import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

export const sampleProducts = [
  {
    name: 'Phone Case',
    price: 499,
    image: 'https://images.unsplash.com/photo-1601593346740-925612772716?w=300',
    description: 'Protective phone case with stylish design'
  },
  {
    name: 'Wireless Headphones',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300',
    description: 'High-quality wireless headphones with noise cancellation'
  },
  {
    name: 'Bluetooth Speaker',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300',
    description: 'Portable Bluetooth speaker with excellent sound quality'
  },
  {
    name: 'Smart Watch',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=300',
    description: 'Feature-rich smartwatch with health tracking'
  },
  {
    name: 'Gaming Mouse',
    price: 899,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=300',
    description: 'Ergonomic gaming mouse with RGB lighting'
  },
  {
    name: 'Laptop Backpack',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=300',
    description: 'Durable laptop backpack with multiple compartments'
  }
];

export default Product;
