import { connectToDatabase } from "@/lib/connection";
import { ItemsCart } from "@/models/itemsCart";
import tokenMiddleware from "@/lib/middleware/token-middleware";
import { NextApiRequest, NextApiResponse } from "next";

connectToDatabase();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const product = await ItemsCart.find().sort({ createdAt: -1 });
      if (!product) {
        return res.status(400).json({ message: "Product not found!" });
      }
      return res.status(200).json({ product });
    } catch (err) {
      console.error("Error getting product:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export default tokenMiddleware(handler);
