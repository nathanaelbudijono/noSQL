import { Admin } from "@/models/admin";
import { Product } from "@/models/product";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/connection";
import tokenMiddleware from "@/lib/middleware/token-middleware";
import { ItemsCart } from "@/models/itemsCart";

connectToDatabase();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, name, description, price, rating, image_url, quantity } =
    req.body;
  switch (req.method) {
    case "PUT":
      try {
        const admin = await Admin.findOne({ email: email });

        if (!admin) {
          return res.status(400).json({ message: "Admin not found!" });
        }

        let product = await Product.findOne({ name: name });
        // If product doesn't exist, create a new one
        if (!product) {
          product = await Product.create({
            name: name,
            description: description,
            price: parseInt(price),
            imageURL: image_url,
            quantity: parseInt(quantity),
            admin: admin._id, // Use the user's ObjectId as the product's origin
          });
          admin.product.push(product._id);
          await admin.save();
        } else {
          // Update the existing product
          product.name = name;
          product.description = description;
          product.price = price;
          product.rating = rating;
          product.imageURL = image_url;
          product.quantity = quantity;
          await product.save();
        }
        return res.status(200).json({ product });
      } catch (err) {
        console.error("Error updating product:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
      break;
    case "DELETE":
      try {
        const product = await Product.findOneAndDelete({ name });
        if (!product) {
          return res.status(400).json({ message: "Product not found!" });
        }
        return res
          .status(200)
          .json({ message: "Product deleted successfully" });
      } catch (err) {
        console.error("Error deleting product:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
      break;
    case "GET":
      try {
        const product = await Product.find();
        if (!product) {
          return res.status(400).json({ message: "Product not found!" });
        }
        return res.status(200).json({ product });
      } catch (err) {
        console.error("Error getting product:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}

export default tokenMiddleware(handler);
