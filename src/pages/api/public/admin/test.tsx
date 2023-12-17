// import { NextApiRequest, NextApiResponse } from "next";
// import { Admin } from "@/models/admin";
// import bcrypt from "bcrypt";
// import { connectToDatabase } from "@/lib/connection";

// connectToDatabase();

// const salt = bcrypt.genSaltSync(5);

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   switch (req.method) {
//     case "POST":
//       try {
//         const { password } = req.body;
//         const hashPassword = await bcrypt.hash(password, salt);
//         const user = await Admin.create({
//           firstName: "admin",
//           lastName: "admin",
//           email: "admin@gmail.com",
//           phoneNumber: "08123456789",
//           dob: "12 December 2002",
//           address: "Jl. Jalan",
//           subdistrict: "Sukolilo",
//           city: "Surabaya",
//           password: hashPassword,
//           wallet: 0,
//           role: "admin",
//         });
//         return res.status(200).json({ user });
//       } catch (err) {
//         console.log(err);
//       }
//   }
// }
