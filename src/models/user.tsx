import mongoose, { Document, Schema } from "mongoose";

export interface userInterface extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dob: string;
  address: string;
  subdistrict: string;
  city: string;
  password: string;
  role: string;
  wallet: number;
  imageURL: string;
  createdAt: Date;
}

const UserSchema = new Schema<userInterface>(
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
    imageURL: { type: String, default: "" },
    role: { type: String, default: "user" },
    wallet: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const User =
  mongoose.models.User || mongoose.model<userInterface>("User", UserSchema);
