import { User } from "@/models/user";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { connectToDatabase } from "@/lib/connection";

connectToDatabase();

const salt = bcrypt.genSaltSync(5);

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, password } = req.body;
  switch (req.method) {
    case "POST":
      try {
        const userExists = await User.findOne({ user: username });
        if (userExists) {
          return res.status(400).json({ message: "User already exists!" });
        } else {
          const hashPassword = await bcrypt.hash(password, salt);
          const user = await User.create({
            user: username,
            password: hashPassword,
            role: "user",
            profile: [],
            purchases: [],
          });
          return res.status(200).json({ user });
        }
      } catch (err) {
        console.error("Error creating user:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}
