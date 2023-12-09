import mongoose, { Document, Schema } from "mongoose";

export interface itemsCartInterface extends Document {
  user: Schema.Types.ObjectId | object;
  product: Schema.Types.ObjectId | object;
  quantity: number;
  totalPrice: number;
  status: string;
  purchaseDate: Date;
}

const itemsCartSchema = new Schema<itemsCartInterface>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    status: { type: String, required: true },
    purchaseDate: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const ItemsCart =
  mongoose.models.ItemsCart ||
  mongoose.model<itemsCartInterface>("ItemsCart", itemsCartSchema);
