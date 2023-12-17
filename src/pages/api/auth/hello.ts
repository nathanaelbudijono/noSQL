import { NextApiRequest, NextApiResponse } from "next";
import tokenMiddleware from "@/lib/middleware/token-middleware";
function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      res.status(200).json({ message: "Hello World!" });
      break;
    default:
      res.status(405).json({ message: "Method not allowed" });
  }
}

export default tokenMiddleware(handler);
