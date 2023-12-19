import { User } from "@/models/user";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { connectToDatabase } from "@/lib/connection";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

connectToDatabase();

export default async function userLoginHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;

  switch (req.method) {
    case "POST":
      try {
        const userDoc = await User.findOne({ email: email });
        const correctPassword = await bcrypt.compare(
          password,
          userDoc.password
        );

        if (correctPassword) {
          const token = await new Promise((resolve, reject) => {
            jwt.sign(
              {
                email: email,
                role: userDoc.role,
                id: userDoc._id,
                image: userDoc.imageURL,
              },
              process.env.NEXT_PUBLIC_TOKEN_SECRET as string,
              {},
              (err, token) => {
                if (err) {
                  reject(err);
                } else {
                  resolve(token);
                }
              }
            );
          });
          const serializedData = serialize("token", JSON.stringify(token), {
            httpOnly: true,
            secure: false,
            path: "/",
            sameSite: "strict",
          });
          res.setHeader("Set-Cookie", serializedData);
          res.status(200).json({ token });
        } else {
          return res
            .status(400)
            .json({ message: "Invalid username or password!" });
        }
      } catch (err) {
        console.error("Error logging in:", err);
        return res.status(500).json({ message: "Internal Server Error!" });
      }
      break;

    default:
      return res.status(405).json({ message: "Method not allowed!" });
  }
}
