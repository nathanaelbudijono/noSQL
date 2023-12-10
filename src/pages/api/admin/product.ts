import { Admin } from "@/models/admin";
import { Product } from "@/models/product";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/connection";

connectToDatabase();

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {username, name, description, price, rating, imageURL, quantity} = req.body;

  switch (req.method) {
    case "PUT":
      try {
        const admin = await Admin.findOne({ admin: username });

        if (!admin) {
          return res.status(400).json({ message: "Admin not found!" });
        }

        let product = await Product.findOne({ admin: admin._id });
        // If product doesn't exist, create a new one
        if (!product) {
          product = await Product.create({
            name: name,
            description: description,
            price: price,
            rating: rating,
            imageURL: imageURL,
            quantity: quantity,
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
          product.imageURL = imageURL;
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
            return res.status(200).json({ message: "Product deleted successfully" });
          } catch (err) {
            console.error("Error deleting product:", err);
            return res.status(500).json({ message: "Internal Server Error" });
          }
      break;

    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}