import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/connection";
import { ItemsCart, ItemsCartInterface } from "@/models/itemsCart";
import tokenMiddleware from "@/lib/middleware/token-middleware";
import { User } from "@/models/user";
import { Admin } from "@/models/admin";

connectToDatabase();

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cartItems = req.body;
  switch (req.method) {
    case "POST":
      try {
        const getUser = await User.findOne({ email: cartItems.email });
        if (getUser.wallet < cartItems.totalPrice) {
          return res
            .status(401)
            .json({ message: "Your wallet is insufficient" });
        }

        let newWallet = getUser.wallet - cartItems.totalPrice;

        await User.findOneAndUpdate(
          { email: getUser.email },
          { wallet: newWallet }
        );

        await ItemsCart.create({
          email: cartItems.email,
          buyer: cartItems.id,
          totalPrice: cartItems.totalPrice,
          cart: cartItems.cart,
        });

        const getAdmin = await Admin.findById("657f5c6c73928006f106b16b");

        let adminWallet = cartItems.totalPrice + getAdmin.wallet;

        await Admin.findByIdAndUpdate("657f5c6c73928006f106b16b", {
          wallet: adminWallet,
        });
        return res
          .status(201)
          .json({ message: "Cart items added successfully" });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
      break;
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}

export default tokenMiddleware(handler);
