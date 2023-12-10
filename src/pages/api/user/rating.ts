import { Admin } from "@/models/admin";
import { Product } from "@/models/product";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/connection";

connectToDatabase();

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { name, rating } = req.body;

    switch (req.method) {
    case "PUT":
      try {
        const updatedProduct = await Product.findOneAndUpdate(
          { name },
          { $set: { rating } },
          { new: true }
        );

        if (!updatedProduct) {
          return res.status(400).json({ message: "Product not found!" });
        }
        return res.status(200).json({ product: updatedProduct });
      } catch (err) {
        console.error("Error updating product rating:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
        break;
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}