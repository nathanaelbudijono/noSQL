import mongoose, { Document, Schema } from "mongoose";

export interface adminInterface extends Document {
  admin: string;
  password: string;
  wallet: number;
  role: string;
  createdAt: Date;
}

const AdminSchema = new Schema<adminInterface>(
  {
    admin: { type: String, required: true },
    password: { type: String, required: true },
    wallet: { type: Number, default: 0 },
    role: { type: String, default: "admin" },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const Admin =
  mongoose.models.Admin || mongoose.model<adminInterface>("Admin", AdminSchema);

