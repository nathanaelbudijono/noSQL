import { User } from "@/models/user";
import { Profile } from "@/models/profile";
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/connection";

connectToDatabase();

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, city, pin, wallet } = req.body;

  switch (req.method) {
    case "PUT":
      try {
        const user = await User.findOne({ user: username });

        if (!user) {
          return res.status(400).json({ message: "User not found!" });
        }

        let profile = await Profile.findOne({ origin: user._id });
        // If profile doesn't exist, create a new one
        if (!profile) {
          profile = await Profile.create({
            city: city,
            pin: pin,
            wallet: wallet,
            origin: user._id, // Use the user's ObjectId as the profile's origin
          });
         user.profile.push(profile._id);
         await user.save();   
        } else {
          // Update the existing profile
          profile.city = city;
          profile.pin = pin;
          profile.wallet = wallet;
          await profile.save();
        }

        return res.status(200).json({ profile });
      } catch (err) {
        console.error("Error updating profile:", err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
      break;
      

    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}