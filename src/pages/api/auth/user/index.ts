import { Admin } from "@/models/admin";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { connectToDatabase } from "@/lib/connection";
import jwt from "jsonwebtoken";
import tokenMiddleware from "@/lib/middleware/token-middleware";

connectToDatabase();

const salt = bcrypt.genSaltSync(5);

async function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.cookies.token as string;
  switch (req.method) {
    case "GET":
      try {
        if (token) {
          const userToken = await new Promise((resolve, reject) => {
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
          return res.status(200).json({ userToken });
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

export default tokenMiddleware(userHandler);
