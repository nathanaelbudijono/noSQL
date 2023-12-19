import tokenMiddleware from "@/lib/middleware/token-middleware";
import { Admin } from "@/models/admin";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const adminDoc = await Admin.findById("657f5c6c73928006f106b16b");
      return res.status(200).json({ adminDoc });
    } catch (err) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}

export default tokenMiddleware(handler);
