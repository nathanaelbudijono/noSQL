import { connectToDatabase } from "@/lib/connection";
import tokenMiddleware from "@/lib/middleware/token-middleware";
import { ItemsCart } from "@/models/itemsCart";
import { NextApiRequest, NextApiResponse } from "next";

connectToDatabase();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const slug = req.query.slug;
  const { status } = req.body;
  console.log(slug);
  switch (req.method) {
    case "PUT":
      try {
        const check = await ItemsCart.findById(slug);
        if (!check) {
          return res.status(401).json({ message: "No transaction was found!" });
        }
        const update = await ItemsCart.findByIdAndUpdate(slug, {
          status: status,
        });
        return res.status(200).json({ update });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
  }
}

export default tokenMiddleware(handler);
