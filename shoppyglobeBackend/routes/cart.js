import express from "express";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/", async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const productExists = await Product.findById(productId);
    if (!productExists) {
      return res.status(404).json({ error: "Product does not exist." });
    }

    let cartItem = await Cart.findOne({ userId: req.user.id, productId });

    if (cartItem) {
      cartItem.quantity += (quantity || 1);
      await cartItem.save();
    } else {
      cartItem = new Cart({ userId: req.user.id, productId, quantity: quantity || 1 });
      await cartItem.save();
    }

    res.status(201).json({ message: "Product added to cart", cartItem });
  } catch (err) {
    res.status(500).json({ error: "Error adding to cart" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { quantity } = req.body;
    
    if (quantity <= 0) return res.status(400).json({ error: "Quantity must be greater than 0" });

    const updatedCart = await Cart.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      { quantity },
      { new: true }
    );

    if (!updatedCart) return res.status(404).json({ error: "Cart item not found" });

    res.status(200).json({ message: "Cart updated", updatedCart });
  } catch (err) {
    res.status(500).json({ error: "Error updating cart" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedCart = await Cart.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    
    if (!deletedCart) return res.status(404).json({ error: "Cart item not found" });

    res.status(200).json({ message: "Item removed from cart" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting cart item" });
  }
});

export default router;