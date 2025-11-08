import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import checkoutRoutes from "./routes/checkoutRoutes.js";
import Product, { sampleProducts } from "./models/Product.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Seed products on server start (only if no products exist)
const seedProducts = async () => {
  try {
    const productCount = await Product.countDocuments();
    if (productCount === 0) {
      await Product.insertMany(sampleProducts);
      console.log('Sample products seeded successfully');
    }
  } catch (error) {
    console.error('Error seeding products:', error);
  }
};

// API routes
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await connectDB();
  // Seed products after DB connection
  seedProducts();
});
