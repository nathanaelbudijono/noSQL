import mongoose, { Document, Schema } from "mongoose";

export interface userInterface extends Document {
  user: string;
  password: string;
  city: string;
  pin: number;
  wallet: number;
  createdAt: Date;
}

const UserSchema = new Schema<userInterface>(
  {
    user: { type: String, required: true },
    password: { type: String, required: true },
    city: { type: String, required: true },
    pin: { type: Number, required: true },
    wallet: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const User =
  mongoose.models.User || mongoose.model<userInterface>("User", UserSchema);
