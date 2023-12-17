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
  const userData = req.body;
  switch (req.method) {
    case "POST":
      try {
        const userExists = await User.findOne({ user: userData.email });
        if (userExists) {
          return res.status(400).json({ message: "Email already exists!" });
        } else {
          const hashPassword = await bcrypt.hash(userData.password, salt);
          const user = await User.create({
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            phoneNumber: userData.phoneNumber,
            dob: userData.dob,
            address: userData.address,
            subdistrict: userData.subdistrict,
            city: userData.city,
            password: hashPassword,
            role: "user",
          });
          return res.status(200).json({ user });
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
