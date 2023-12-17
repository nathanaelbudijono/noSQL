import { Admin } from "@/models/admin";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { connectToDatabase } from "@/lib/connection";
import jwt from "jsonwebtoken";

connectToDatabase();

const salt = bcrypt.genSaltSync(5);

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, password } = req.body;
  const token = req.cookies.token as string;
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
            role: "admin",
            wallet: 0,
          });
          return res.status(200).json({ admin });
        }
      } catch (err) {
        console.error("Error creating user:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
      break;
    case "GET":
      try {
        if (token) {
          const adminToken = await new Promise((resolve, reject) => {
            jwt.verify(
              token.substring(1, token.length - 1),
              process.env.NEXT_PUBLIC_TOKEN_SECRET as string,
              (err, token) => {
                if (err) {
                  reject(err);
                } else {
                  resolve(token);
                }
              }
            );
          });
          return res.status(200).json({ adminToken });
        } else {
          return;
        }
      } catch (err) {
        console.error("Error getting user:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
      break;
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}
