import { Product } from "@/models/product";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/connection";

connectToDatabase();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
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

export default handler;
