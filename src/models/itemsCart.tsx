import mongoose, { Document, Schema } from "mongoose";

export interface ItemsCartInterface extends Document {
  buyer: string;
  email: string;
  purchaseDate: Date;
  totalPrice: number;
  status: string;
  cart: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
}

const itemsCartSchema = new Schema<ItemsCartInterface>(
  {
    buyer: { type: String },
    email: { type: String },
    purchaseDate: { type: Date },
    totalPrice: { type: Number },
    status: { type: String, default: "pending" },
    cart: [
      {
        id: { type: String },
        name: { type: String },
        price: { type: Number },
        quantity: { type: Number },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const ItemsCart =
  mongoose.models.ItemsCart ||
  mongoose.model<ItemsCartInterface>("ItemsCart", itemsCartSchema);
