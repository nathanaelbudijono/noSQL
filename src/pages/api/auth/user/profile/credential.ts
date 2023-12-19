import { connectToDatabase } from "@/lib/connection";
import { User } from "@/models/user";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import tokenMiddleware from "@/lib/middleware/token-middleware";

connectToDatabase();

const salt = bcrypt.genSaltSync(5);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { original, newPass, confirmPass, email } = req.body;
  if ((req.method = "PUT")) {
    try {
      if (newPass === confirmPass) {
        const userDoc = await User.findOne({ email: email });
        if (!userDoc) {
          return res.status(400).json({ message: "Account not found" });
        }
        const correctPass = bcrypt.compareSync(original, userDoc.password);
        if (!correctPass) {
          return res.status(400).json({ message: "Incorrect password" });
        }
        const hashPassword = await bcrypt.hash(newPass, salt);
        const updatePass = await User.findOneAndUpdate(
          { email: email },
          { password: hashPassword }
        );
        return res.status(200).json({ updatePass });
      } else {
        return res.status(401).json({ message: "Password not match" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "internal server error" });
    }
  } else {
    return res.status(401).json({ message: "method not allowed" });
  }
}
export default tokenMiddleware(handler);
