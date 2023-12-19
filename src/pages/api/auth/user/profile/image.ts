import { connectToDatabase } from "@/lib/connection";
import tokenMiddleware from "@/lib/middleware/token-middleware";
import { User } from "@/models/user";
import { NextApiRequest, NextApiResponse } from "next";

connectToDatabase();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { imageURL, email } = req.body;
  if (req.method === "PUT") {
    try {
      const edit = await User.findOneAndUpdate(
        { email: email },
        {
          imageURL: imageURL,
        }
      );
      return res.status(200).json({ edit });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "internal server error" });
    }
  } else {
    return res.status(401).json({ message: "method not allowed" });
  }
}
export default tokenMiddleware(handler);
