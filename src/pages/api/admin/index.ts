import { Admin } from "@/models/admin";
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
        const adminExists = await Admin.findOne({ admin: username });
        if (adminExists) {
          return res.status(400).json({ message: "Admin already exists!" });
        } else {
          const hashPassword = await bcrypt.hash(password, salt);
          const admin = await Admin.create({
            admin: username,
            password: hashPassword,
            role : "admin",
            wallet: 0,
          });
          return res.status(200).json({ admin });
        }
      } catch (err) {
        console.error("Error creating user:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
      break;
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}
