import { User } from "@/models/user";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/connection";
import tokenMiddleware from "@/lib/middleware/token-middleware";

connectToDatabase();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { topup, email } = req.body;

  switch (req.method) {
    case "PUT":
      try {
        const user = await User.findOne({ email: email });

        if (!user) {
          return res.status(400).json({ message: "User not found!" });
        }

        // Increment the wallet balance
        user.wallet += topup;

        // Save the updated user object
        const updatedUser = await user.save();

        return res.status(200).json({ profile: updatedUser });
      } catch (err) {
        console.error("Error updating profile:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
      break;

    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}

export default tokenMiddleware(handler);
