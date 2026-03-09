import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

// We are taking a few items from your mockData.js to put in the database
const productsData = [
  { name: "Wireless Headphones", price: 99.99, description: "High-quality wireless headphones with noise cancellation.", stockQuantity: 15, coverImage: "https://picsum.photos/seed/headphones/400/300" },
  { name: "Smart Watch", price: 149.99, description: "Track your fitness, heart rate, and notifications on the go.", stockQuantity: 20, coverImage: "https://picsum.photos/seed/smartwatch/400/300" },
  { name: "Gaming Mouse", price: 39.99, description: "Ergonomic gaming mouse with customizable DPI settings.", stockQuantity: 30, coverImage: "https://picsum.photos/seed/mouse/400/300" },
  { name: "Mechanical Keyboard", price: 89.99, description: "RGB mechanical keyboard with tactile switches.", stockQuantity: 10, coverImage: "https://picsum.photos/seed/keyboard/400/300" },
  { name: "Laptop Stand", price: 29.99, description: "Adjustable aluminum laptop stand for better ergonomics.", stockQuantity: 25, coverImage: "https://picsum.photos/seed/laptopstand/400/300" }
];

const seedDB = async () => {
  try {
    // Connect to your MongoDB using the URI in your .env file
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB!");

    // Clear existing products just in case
    await Product.deleteMany();
    console.log("🧹 Cleared old products...");

    // Insert the new products
    await Product.insertMany(productsData);
    console.log("🎉 Database successfully seeded with products!");

    // Exit the script once done
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedDB();