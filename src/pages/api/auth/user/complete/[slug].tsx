import { connectToDatabase } from "@/lib/connection";
import { NextApiRequest, NextApiResponse } from "next";
import { User } from "@/models/user";
import tokenMiddleware from "@/lib/middleware/token-middleware";

connectToDatabase();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  switch (req.method) {
    case "GET":
      try {
        const userDoc = await User.findById(slug);
        return res.status(200).json(userDoc);
      } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
      }
      break;
    default:
      res.status(405).json({ message: "Method not allowed" });
      break;
  }
}

export default tokenMiddleware(handler);
