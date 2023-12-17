import mongoose, { Document, Schema } from "mongoose";

export interface adminInterface extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dob: string;
  address: string;
  subdistrict: string;
  city: string;
  password: string;
  wallet: number;
  role: string;
  createdAt: Date;
}

const AdminSchema = new Schema<adminInterface>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    dob: { type: String, required: true },
    address: { type: String, required: true },
    subdistrict: { type: String, required: true },
    city: { type: String, required: true },
    password: { type: String, required: true },
    wallet: { type: Number, required: true },
    role: { type: String, default: "admin" },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const Admin =
  mongoose.models.Admin || mongoose.model<adminInterface>("Admin", AdminSchema);
