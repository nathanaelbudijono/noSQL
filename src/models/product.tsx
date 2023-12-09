import mongoose, { Document, Schema } from "mongoose";

export interface productInterface extends Document {
    name: string;
    description: string;
    price: number;
    rating: number;
    imageURL: string;
    quantity: number;
    admin: Schema.Types.ObjectId | object;
    createdAt: Date;
}

const ProductSchema = new Schema<productInterface>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: {type: Number, required: true},
    rating: {type: Number},
    imageURL: {type: String, required: true},
    quantity: {type: Number, required: true},
    admin: { type: Schema.Types.ObjectId, ref: "Admin", required: true },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const Product =
  mongoose.models.Product || mongoose.model<productInterface>("Product", ProductSchema);

